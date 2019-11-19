import React from 'react';
import axios from 'axios';
import config from './config.js';
import {View, Text, TextInput} from 'react-native';
import MemberList from './components/MemberList.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      houseMembers: [],
      senateMembers: [],

      watchList: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    axios
      .get('https://api.propublica.org/congress/v1/116/senate/members.json', {
        headers: {'X-API-Key': config.propublicaKey},
      })
      .then(response => {
        this.setState({senateMembers: response.data.results[0].members});
      })
      .catch(err => {
        console.log(
          'there was an error fetching senate members from ProPublica',
          err,
        );
      });

    axios
      .get('https://api.propublica.org/congress/v1/116/house/members.json', {
        headers: {'X-API-Key': config.propublicaKey},
      })
      .then(response => {
        this.setState({houseMembers: response.data.results[0].members});
      })
      .catch(err => {
        console.log(
          'there was an error fetching house members from ProPublica',
          err,
        );
      });

    // axios
    //   .get('http://locahost:3000/mymembers')
    //   .then(members => {
    //     this.setState({memberList: members});
    //   })
    //   .catch(err => {
    //     console.log('there was an error fetching your members', err);
    //   });
  }
  handleSearchSubmit(event) {
    let firstName = event.nativeEvent.text.split(' ')[0];
    let lastName = event.nativeEvent.text.split(' ')[1];
    let foundMember = false;
    for (let member of this.state.senateMembers) {
      if (
        !foundMember &&
        member.first_name === firstName &&
        member.last_name === lastName
      ) {
        let newWatchList = this.state.watchList.slice(0);
        newWatchList.push(member);
        this.setState({watchList: newWatchList});
        foundMember = true;
        //send post request to add member to the database of watched members
      }
    }
    if (!foundMember) {
      for (let member of this.state.houseMembers) {
        if (
          !foundMember &&
          member.first_name === firstName &&
          member.last_name === lastName
        ) {
          let newWatchList = this.state.watchList.slice(0);
          newWatchList.push(member);
          this.setState({watchList: newWatchList});
          foundMember = true;
          //send post request to add member to the database of watched members
        }
      }
    }
    //selecting a member will add themn to the memberList arr and will add them to the database
  }

  handleChange(value) {
    this.setState({searchValue: value});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          {this.state.houseMembers[4]
            ? this.state.houseMembers[4].first_name
            : 'hi'}
          {this.state.houseMembers[4]
            ? this.state.houseMembers[4].last_name
            : 'there'}
        </Text>
        <Text>
          {this.state.senateMembers[4]
            ? this.state.senateMembers[4].first_name
            : 'hi'}
          {this.state.senateMembers[4]
            ? this.state.senateMembers[4].last_name
            : 'there'}
        </Text>
        <Text>Candidate</Text>
        <TextInput
          onChangeText={this.handleChange}
          onSubmitEditing={this.handleSearchSubmit}
          placeholder="Add to Watchlist"
        />
        <MemberList members={this.state.watchList} />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    top: 100,
    justifyItems: 'center',
    alignItems: 'center',
  },
};

export default App;

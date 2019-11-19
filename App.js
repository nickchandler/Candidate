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

      memberList: [],
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
      .then(members => {
        this.setState({senateMembers: members});
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
      .then(members => {
        this.setState({houseMembers: members});
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
  handleSearchSubmit(nativeEvent) {
    let firstName = nativeEvent.text.split('')[0];
    let lastName = nativeEvent.text.split('')[1];
    let foundMember = false;
    for (let member of this.state.allMembers) {
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
    //selecting a member will add themn to the memberList arr and will add them to the database
  }

  handleChange(value) {
    this.setState({searchValue: value});
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Candidate</Text>
        <TextInput
          onChangeText={this.handleChange}
          onSubmitEditing={this.handleSearchSubmit}
          placeholder="Add to Watchlist"
        />
        <MemberList members={this.state.memberList} />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
};

export default App;

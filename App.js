import React from 'react';
import axios from 'axios';
import config from './config.js';
import {View, Text} from 'react-native';

import {FlatList} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      houseMembers: [],
      senateMembers: [],
      memberList: [],
    };
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

  render() {
    return (
      <View style={styles.container}>
        <Text>Candidate</Text>
        <FlatList
          data={this.state.houseMembers}
          renderItem={({item}) => (
            <Item
              id={item.id}
              firstName={item.first_name}
              lastName={item.last_name}
            />
          )}>
          keyExtractor={item => item.id}
        </FlatList>
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

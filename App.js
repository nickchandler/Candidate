import React from 'react';
import axios from 'axios';
import config from './config.js';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

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
      .get('https://api.propublica.org/congress/v1/116/senate/members.json')
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
      .get('https://api.propublica.org/congress/v1/116/house/members.json')
      .then(members => {
        this.setState({houseMembers: members});
      })
      .catch(err => {
        console.log(
          'there was an error fetching house members from ProPublica',
          err,
        );
      });

    axios
      .get('http://locahost/mymembers')
      .then(members => {
        this.setState({memberList: members});
      })
      .catch(err => {
        console.log('there was an error fetching your members', err);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Candidate</Text>
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

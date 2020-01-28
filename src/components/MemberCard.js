import React from 'react';
import {View, Text, Image, Button} from 'react-native';
import axios from 'axios';

let MemberCard = function(props) {
  return (
    <View>
      <Text>
        {props.member.short_title} {props.member.first_name}{' '}
        {props.member.last_name}, {props.member.party}-{props.member.state}
      </Text>
      <Image
        style={{width: 100, height: 100}}
        source={{
          uri: `https://theunitedstates.io/images/congress/original/${props.member.id}.jpg`,
        }}
      />
      <Button
        title="Remove"
        onPress={() => {
          props.delete(props.member.id);
        }}
      />
    </View>
  );
};

// const styles = Stylesheet.create({
//   cardHeader: {},
//   memberImage: {},
// });

export default MemberCard;

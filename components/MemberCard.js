import React from 'react';
import {View, Text, Image, Stylesheet} from 'react-native';

let MemberCard = function(props) {
  return (
    <View>
      <Text style={styles.cardHeader}>
        {props.member.short_title} {props.member.first_name}{' '}
        {props.member.last_name}, {props.member.party}-{props.member.state}
      </Text>
      <Image
        // eslint-disable-next-line prettier/prettier
        src={`https://theunitedstates.io/images/congress/original/${props.member.member_id}.jpg`}
        style={styles.memberImage}
      />
    </View>
  );
};

const styles = Stylesheet.create({
  cardHeader: {},
  memberImage: {},
});

export default MemberCard;

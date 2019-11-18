import React from 'react';
import {Stylesheet, FlatList, View} from 'react-native';
import MemberCard from './MemberCard';

let MemberList = function(props) {
  return (
    <FlatList
      data={props.members}
      renderItem={({member}) => {
        <MemberCard member={member} />;
      }}
      keyExtractor={member => member.member_id}
    />
  );
};

const styles = Stylesheet.create({});

export default MemberList;

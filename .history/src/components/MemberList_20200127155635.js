import React from 'react';
import {FlatList} from 'react-native';
import MemberCard from './MemberCard.js.js';

let MemberList = function(props) {
  return (
    <FlatList
      data={props.members}
      renderItem={({item}) => {
        return <MemberCard member={item} delete={props.delete} key={item.id} />;
      }}
    />
  );
};

// const styles = Stylesheet.create({
//   memberCard: {},
// });

export default MemberList;

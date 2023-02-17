import {View} from 'react-native';
import React from 'react';

const Divider = props => {
  return (
    <View
      style={{
        width: props.width ? props.width : '100%',
        height: props.height ? props.height : 2,
        backgroundColor: props.color ? props.color : 'white',
      }}></View>
  );
};

export default Divider;

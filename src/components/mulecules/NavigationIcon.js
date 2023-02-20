import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {color} from '../../styles';

const NavigationIcon = props => {
  const generateIcon = () => {
    if (props.route == 'Home') return 'home';
    else if (props.route == 'Profile') return 'person-circle';
  };

  return (
    <View>
      <Icon name={generateIcon()} size={34} color={color.s500} />
    </View>
  );
};

export default NavigationIcon;

const styles = StyleSheet.create({});

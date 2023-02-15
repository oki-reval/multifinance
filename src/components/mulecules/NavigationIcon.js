import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {color} from '../../styles';

const NavigationIcon = props => {
  const generateIcon = () => {
    if (props.route == 'Home') return 'home';
    else if (props.route == 'Profile') return 'person-circle';
  };

  const generateColor = () => {
    if (props.isFocused) return color.primary;
    else return color.secondary;
  };
  return (
    <View>
      <Icon name={generateIcon()} size={34} color={generateColor()} />
    </View>
  );
};

export default NavigationIcon;

const styles = StyleSheet.create({});

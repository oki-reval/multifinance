import React from 'react';
import {TextInput, SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import {color, style} from '../../styles';
import {ButtonIndicator} from './Button';

const Input = props => {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        onChangeText={val => props.onChangeText(val)}
        value={props.value}
        style={styles.emailInput}
        placeholder={props.placeholder}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  emailInput: {
    width: '100%',
    height: 50,
    borderColor: color.g400,
    padding: 5,
  },
  container: {
    ...style.shadow,
    padding: 2,
    margin: 5,
    borderRadius: 15,
  },
});
export default Input;

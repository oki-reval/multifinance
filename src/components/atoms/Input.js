import React from 'react';
import {TextInput, SafeAreaView, StyleSheet, Dimensions} from 'react-native';
import {color} from '../../styles';
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
    borderWidth: 1,
    borderRadius: 15,
    borderColor: color.g400,
    padding: 10,
  },
  container: {
    margin: 10,
  },
});
export default Input;

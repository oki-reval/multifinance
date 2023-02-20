import React from 'react';
import {TextInput, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {color, style} from '../../styles';

const Input = props => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <TextInput
          onChangeText={val => props.onChangeText(val)}
          value={props.value}
          style={styles.emailInput}
          placeholder={props.placeholder}
          type={props.type}
          secureTextEntry={props.type == 'password' ? true : false}
        />
      </View>
      <View style={styles.messageContainer}>
        {props.error && <Text style={styles.error}>{'oops...!'}</Text>}
        {props.type == 'password' && (
          <Icon
            name={props.icon ? props.icon : 'eye'}
            size={28}
            color={color.p400}
            style={styles.iconRight}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  emailInput: {
    width: '100%',
    height: 50,
    borderColor: color.g400,
    padding: 10,
    color: color.g500,
    fontFamily: 'Poppins-Regular',
  },
  container: {
    ...style.shadow,
    margin: 5,
    borderRadius: 15,
  },
  messageContainer: {
    paddingHorizontal: 20,
  },
  error: {
    color: color.failed,
    fontFamily: 'Poppins-BoldItalic',
  },
  iconRight: {
    position: 'absolute',
  },
});
export default Input;

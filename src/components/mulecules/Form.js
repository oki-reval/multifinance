import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Input} from '../atoms';

const Form = props => {
  const handleChange = (key, val) => {
    const data = {key, val};
    props.setChange(data);
  };

  const renderItem = ({item}) => {
    return (
      <Input
        label={item.label}
        keyboardType={item.keyboardType}
        type={item.type}
        placeholder={item.placeholder}
        onChangeText={val => handleChange(item.type, val)}
      />
    );
  };

  return (
    <View>
      <FlatList
        data={props.data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({});

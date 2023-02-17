import React from 'react';
import {FlatList, View} from 'react-native';
import {Input} from '../atoms';
import {style} from '../../styles';

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
    <View styles={style.formContainer}>
      <FlatList
        data={props.data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Form;

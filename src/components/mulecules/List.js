import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Item} from '../atoms';

const List = props => {
  return (
    <FlatList
      data={props.data}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({item}) => {
        return <Item data={item} />;
      }}
    />
  );
};

export default List;

const styles = StyleSheet.create({});

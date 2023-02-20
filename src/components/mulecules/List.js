import React, {useCallback} from 'react';
import {FlatList, StyleSheet, Animated, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {setTabBar} from '../../states/actions/initApps';
import {Item} from '../atoms';

const List = props => {
  const dispatch = useDispatch();

  const handleScroll = event => {
    const scrollOffset = event.nativeEvent.contentOffset.y;
    if (scrollOffset > 20) return dispatch(setTabBar(true));
    else return dispatch(setTabBar(false));
  };

  return (
    <FlatList
      data={props.data}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({item}) => {
        return <Item data={item} onPress={val => props.onPress(val)} />;
      }}
      onScroll={event => {
        handleScroll(event);
      }}
    />
  );
};

export default List;

const styles = StyleSheet.create({});

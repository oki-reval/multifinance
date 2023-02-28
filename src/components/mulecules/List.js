import React, {useCallback, useState} from 'react';
import {FlatList, StyleSheet, RefreshControl} from 'react-native';
import {useDispatch} from 'react-redux';
import {setTabBar} from '../../states/actions/initApps';
import {Item} from '../atoms';

const List = props => {
  const dispatch = useDispatch();
  const [refreshing, setrefreshing] = useState(false);

  const handleScroll = event => {
    const scrollOffset = event.nativeEvent.contentOffset.y;
    if (scrollOffset > 20) return dispatch(setTabBar(true));
    else return dispatch(setTabBar(false));
  };

  const loadData = async () => {
    await props.loadData();
    setrefreshing(false);
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
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={loadData} />
      }
    />
  );
};

export default List;

const styles = StyleSheet.create({});

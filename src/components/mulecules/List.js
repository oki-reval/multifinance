import React, {useCallback, useRef, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  RefreshControl,
  Animated,
  View,
  Dimensions,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {setTabBar} from '../../states/actions/initApps';
import {Item} from '../atoms';

const List = props => {
  const dispatch = useDispatch();
  const [refreshing, setrefreshing] = useState(false);
  const scrollY = useRef(new Animated.Value(0)).current;

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
    <View style={{height: Dimensions.get('screen').height * 0.66}}>
      <Animated.FlatList
        data={props.data}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <Item
              index={index}
              itemSize={Dimensions.get('screen').height * 0.241}
              data={item}
              onPress={val => props.onPress(val)}
              scrollY={scrollY}
            />
          );
        }}
        // onScroll={event => {
        //   handleScroll(event);
        // }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={loadData} />
        }
        contentContainerStyle={{padding: 8}}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {
            useNativeDriver: true,
          },
        )}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({});

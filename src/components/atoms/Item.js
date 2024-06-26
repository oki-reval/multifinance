import {StyleSheet, Text, View, TouchableOpacity, Animated} from 'react-native';
import React from 'react';
import {color, style} from '../../styles';
import {autoCurency} from '../../utils/helper';
import Divider from './Divider';

const Item = props => {
  const inputRange = [
    -1,
    0,
    props.itemSize * props.index,
    props.itemSize * (props.index + 1),
  ];

  const scale = props.scrollY.interpolate({
    inputRange,
    outputRange: [1, 1, 1, 0],
  });

  return (
    <Animated.View style={{transform: [{scale}]}}>
      <TouchableOpacity
        onPress={() => props.onPress(props.data)}
        style={[styles.item, {flexDirection: 'column', padding: 0}]}>
        <View style={styles.item}>
          <Text style={styles.title}>
            Account Name : {props?.data?.display_name}
          </Text>
          <Text style={styles.title}>Account ID : {props?.data?.id}</Text>
          <Divider height={0.7} color={color.s500} />
        </View>
        <Text style={styles.textLoan}>
          Total Loan : {autoCurency(props?.data?.total_loan)}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  item: {
    ...style.shadow,
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 6,
  },
  textLoan: {
    marginHorizontal: 10,
    marginVertical: 10,
    color: color.primary,
    fontFamily: 'Poppins-Medium',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    color: color.g600,
  },
});
export default Item;

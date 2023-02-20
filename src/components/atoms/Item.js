import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {color, style} from '../../styles';
import {autoCurency} from '../../utils/helper';
import Divider from './Divider';

const Item = props => {
  return (
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
  );
};

const styles = StyleSheet.create({
  item: {
    ...style.shadow,
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 6,
    // flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textLoan: {
    marginHorizontal: 10,
    marginVertical: 10,
    color: color.primary,
    fontFamily: 'Poppins-Medium',
  },
  title: {
    fontFamily: 'Poppins-Medium',
  },
});
export default Item;

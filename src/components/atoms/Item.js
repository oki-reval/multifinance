import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import {style} from '../../styles';

const Item = props => {
  return (
    <Pressable style={[styles.item, {flexDirection: 'column', padding: 0}]}>
      <View style={styles.item}>
        <Text>Account Name : {props?.data?.display_name}</Text>
        <Text>Account ID : {props?.data?.id}</Text>
      </View>
      <Text style={styles.textLoan}>
        Total Loan : {props?.data?.total_loan}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  item: {
    ...style.shadow,
    margin: 5,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textLoan: {
    marginHorizontal: 10,
    marginBottom: 20,
  },
});
export default Item;

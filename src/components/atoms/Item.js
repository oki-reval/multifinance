import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {style} from '../../styles';
import {autoCurency} from '../../utils/helper';

const Item = props => {
  return (
    <TouchableOpacity
      onPress={() => props.onPress(props.data)}
      style={[styles.item, {flexDirection: 'column', padding: 0}]}>
      <View style={styles.item}>
        <Text>Account Name : {props?.data?.display_name}</Text>
        <Text>Account ID : {props?.data?.id}</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textLoan: {
    marginHorizontal: 10,
    marginBottom: 20,
  },
});
export default Item;

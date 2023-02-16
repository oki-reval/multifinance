import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {List, ModalDetailAccount} from '../mulecules';
import {color} from '../../styles';

const LoanAcount = props => {
  return (
    <View style={styles.listContainer}>
      <Text style={styles.title}>Loan Account List</Text>
      <List data={props.data} onPress={val => props.onPress(val)} />
      <ModalDetailAccount
        visible={props.visible}
        onClose={() => props.onClose()}
        detailData={props.detailData}
        onPress={props.onPay}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  title: {
    textAlign: 'center',
    fontWeight: '600',
    color: color.g800,
    fontSize: 24,
    marginVertical: 5,
  },
});
export default LoanAcount;

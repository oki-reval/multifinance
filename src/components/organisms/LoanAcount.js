import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {List, ModalDetailAccount} from '../mulecules';
import {style} from '../../styles';

const LoanAcount = props => {
  return (
    <View style={styles.listContainer}>
      <Text style={style.h1}>Loan Account List</Text>
      <List data={props.data} onPress={val => props.onPress(val)} />
      <ModalDetailAccount
        visible={props.visible}
        onClose={() => props.onClose()}
        detailData={props.detailData}
        onPress={props.onPay}
        loading={props.loadData}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
});
export default LoanAcount;

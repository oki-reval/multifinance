import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {List, ModalDetailAccount} from '../mulecules';
import {color, style} from '../../styles';
import {Loading} from '../atoms';

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
      />
      <Loading loading={props.loadingPage} />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
});
export default LoanAcount;

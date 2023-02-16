import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FormPayment, ModalConfirmation} from '../mulecules';
import {Button} from '../atoms';
import {style} from '../../styles';

const PaymentContainer = props => {
  return (
    <View style={styles.container}>
      <FormPayment location={props.location} />
      <ModalConfirmation visible={false} />
      <Button title={'Konfirmasi Pembayaran'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
export default PaymentContainer;

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PaymentContainer} from '../../components/organisms';

const Payments = props => {
  return <PaymentContainer location={props.route.params.location} />;
};

export default Payments;

const styles = StyleSheet.create({});

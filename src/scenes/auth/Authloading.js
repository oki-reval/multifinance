import React, {useEffect} from 'react';
import {StyleSheet, Dimensions, View, Text} from 'react-native';
import {Welcome} from '../../assets/svg';
import {color} from '../../styles/colors';

const {height, width} = Dimensions.get('screen');

const AuthLoading = props => {
  useEffect(() => {
    props.navigation.navigate('loginRegister');
  }, [10000]);

  return (
    <View style={styles.container}>
      <Welcome width={width / 2} height={height / 4} />
      <Text style={styles.label}>MULTIFINANCE</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.primary,
  },
  label: {
    color: '#fff',
    fontSize: 34,
  },
});

export default AuthLoading;

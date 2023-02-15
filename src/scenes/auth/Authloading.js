import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {StyleSheet, Dimensions, View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {Welcome} from '../../assets/svg';
import {setAuthloading, setUser} from '../../states/actions/initApps';
import {color} from '../../styles/colors';

const {height, width} = Dimensions.get('screen');

const AuthLoading = props => {
  const user = AsyncStorage.getItem('user');
  const dispatch = useDispatch();

  useEffect(() => {
    generateConfiguration();
  });

  const generateConfiguration = () => {
    if (user) {
      setTimeout(() => {
        dispatch(setUser(user));
        dispatch(setAuthloading(false));
      }, 500);
    } else {
      setTimeout(() => {
        dispatch(setAuthloading(false));
      }, 500);
    }
  };

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

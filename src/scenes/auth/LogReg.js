import React, {useState} from 'react';
import {StyleSheet, StatusBar, View} from 'react-native';
import {Login, Register} from '../../components/organisms';
import {color, style} from '../../styles';

const LogReg = () => {
  const [activePage, setActivePage] = useState('login');
  return (
    <View style={[style.container, {backgroundColor: color.background}]}>
      <StatusBar style="light" backgroundColor={'transparent'} translucent />
      {activePage == 'login' ? (
        <Login
          onPress={() => alert('pressed')}
          onPressText={() => setActivePage('register')}
        />
      ) : (
        <Register
          onPress={() => alert('pressed')}
          onPressText={() => setActivePage('login')}
        />
      )}
    </View>
  );
};

export default LogReg;

const styles = StyleSheet.create({});

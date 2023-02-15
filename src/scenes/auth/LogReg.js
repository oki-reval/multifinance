import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState, useEffect} from 'react';
import {StyleSheet, StatusBar, View, BackHandler, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {Login, Register} from '../../components/organisms';
import {setAuthloading, setUser} from '../../states/actions/initApps';
import {color, style} from '../../styles';
import {odoo_builder} from '../../utils/environment';

const LogReg = () => {
  const dispatch = useDispatch();
  const [activePage, setActivePage] = useState('login');
  const [loading, setLoading] = useState(false);
  function handleBackButtonClick() {
    if (activePage == 'login') {
      setActivePage('register');
    } else {
      setActivePage('login');
    }
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  const onLogin = async data => {
    console.log(data);
    setLoading(true);
    await odoo_builder('http://47.241.10.35:88', 'demo')
      .login(data.email, data.password)
      .then(res => {
        dispatch(setUser(res));
        dispatch(setAuthloading(true));
      })
      .catch(err => {
        alert('Server Error, Please Try Agains');
        console.log({err});
      });
    setLoading(false);
  };

  return (
    <View style={[style.container, {backgroundColor: color.background}]}>
      <StatusBar style="light" backgroundColor={'transparent'} translucent />
      {activePage == 'login' ? (
        <Login
          onLogin={data => onLogin(data)}
          onPressText={() => setActivePage('register')}
          loading={loading}
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

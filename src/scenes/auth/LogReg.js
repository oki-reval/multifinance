import React, {useState, useEffect} from 'react';
import {StatusBar, View, BackHandler} from 'react-native';
import {useDispatch} from 'react-redux';
import {Loading} from '../../components/atoms';
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
    setLoading(true);
    await odoo_builder('http://47.241.10.35:88', 'demo')
      .login(data.email, data.password)
      .then(res => {
        dispatch(setUser(res));
        dispatch(setAuthloading(true));
      })
      .catch(err => {
        alert('Server Error, Please Try Agains');
      });
    setLoading(false);
  };

  return (
    <View style={style.CenteredContainer}>
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
      {loading && <Loading loading={loading} />}
    </View>
  );
};

export default LogReg;

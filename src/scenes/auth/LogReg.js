import React, {useState} from 'react';
import {StatusBar, View} from 'react-native';
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

  const onLogin = async data => {
    setLoading(true);
    await odoo_builder('http://47.241.10.35:88', 'LoanDemo-3.1')
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
      <StatusBar
        style="light"
        backgroundColor={loading ? color.p600 : 'transparent'}
        translucent
      />
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

import React, {useState} from 'react';
import {Dimensions, View, Text, Image} from 'react-native';
import {Form} from '../mulecules';
import {style} from '../../styles';
import {Connection} from '../../assets/svg';
import {ButtonIndicator, Divider} from '../atoms';

const {height, width} = Dimensions.get('screen');

const input = [
  {
    title: 'email',
    type: 'email',
    keyboardType: 'email',
    placeholder: 'Masukan Alamat Email',
  },
  {
    title: 'password',
    type: 'password',
    keyboardType: 'password',
    placeholder: 'Masukan password',
  },
];

const Login = props => {
  const [data, setData] = useState({});

  const handleChange = val => {
    setData(prev => {
      return {
        ...prev,
        [val.key]: val.val,
      };
    });
  };

  return (
    <View>
      <Image
        source={require('../../assets/images/Logo.png')}
        style={style.logoSmall}
        resizeMode="contain"
      />
      <View style={style.centerContent}>
        <Connection width={width / 1.5} height={height / 3.6} />
        <Text style={[style.h1]}>Selamat Datang, Silakan Login</Text>
      </View>
      <Form data={input} setChange={val => handleChange(val)} />
      <Divider height={30} width={10} />
      <ButtonIndicator title={'Login'} onPress={() => props.onLogin(data)} />
      {/* <View style={style.flexRow}>
        <Text>Belum Memiliki akun ? silakan </Text>
        <ButtonText
          color={color.primary}
          title={'Register'}
          onPress={props.onPressText}
        />
      </View> */}
    </View>
  );
};

export default Login;

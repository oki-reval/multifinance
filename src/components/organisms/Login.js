import {Text, Dimensions, View} from 'react-native';
import React from 'react';
import {Form} from '../mulecules';
import {style} from '../../styles';
import {Auth} from '../../assets/svg';
import {ButtonIndicator, ButtonText} from '../atoms';

const {height, width} = Dimensions.get('screen');

const Login = props => {
  const data = [
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

  return (
    <View style={style.formContainer}>
      <View style={style.centerContent}>
        <Auth width={width / 1.5} height={height / 3} />
      </View>
      <Form data={data} />
      <ButtonIndicator title={'Login'} onPress={props.onPress} />
      <View style={style.flexRow}>
        <Text>Belum Memiliki akun ? silakan </Text>
        <ButtonText title={'Register'} onPress={props.onPressText} />
      </View>
    </View>
  );
};

export default Login;

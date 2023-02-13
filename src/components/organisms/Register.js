import {Text, Dimensions, View} from 'react-native';
import React from 'react';
import {Form} from '../mulecules';
import {style} from '../../styles';
import {Auth} from '../../assets/svg';
import {ButtonIndicator, ButtonText} from '../atoms';

const {height, width} = Dimensions.get('screen');

const Register = props => {
  const data = [
    {
      title: 'username',
      type: 'username',
      keyboardType: 'Masukan Username',
      placeholder: 'Masukan Username',
    },
    {
      title: 'email',
      type: 'email',
      keyboardType: 'email',
      placeholder: 'Masukan Alamat Email',
    },
    {
      title: 'Jenis Kelamin',
      type: 'Jenis Kelamin',
      placeholder: 'Masukan Jenis Kelamin',
    },
    {
      title: 'password',
      type: 'password',
      keyboardType: 'password',
      placeholder: 'Masukan Password',
    },
  ];

  return (
    <View style={style.formContainer}>
      <View style={style.centerContent}>
        <Auth width={width / 1.5} height={height / 3} />
      </View>
      <Form data={data} />
      <ButtonIndicator title={'Register'} onPress={props.onPress} />
      <View style={style.flexRow}>
        <Text>Sudah Belum Memiliki akun ? silakan </Text>
        <ButtonText title={'Login'} onPress={props.onPressText} />
      </View>
    </View>
  );
};

export default Register;

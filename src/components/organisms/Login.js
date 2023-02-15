import {Text, Dimensions, View} from 'react-native';
import React, {useState} from 'react';
import {Form} from '../mulecules';
import {color, style} from '../../styles';
import {Auth} from '../../assets/svg';
import {ButtonIndicator, ButtonText} from '../atoms';
import {useDispatch} from 'react-redux';

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
    <View style={style.formContainer}>
      <View style={style.centerContent}>
        <Auth width={width / 1.5} height={height / 3} />
      </View>
      <Form data={input} setChange={val => handleChange(val)} />
      <ButtonIndicator
        loading={props.loading}
        title={'Login'}
        onPress={() => props.onLogin(data)}
      />
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

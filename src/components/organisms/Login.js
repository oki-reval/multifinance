import {Dimensions, View, Text} from 'react-native';
import React, {useState} from 'react';
import {Form} from '../mulecules';
import {style} from '../../styles';
import {Auth} from '../../assets/svg';
import {ButtonIndicator} from '../atoms';
import Geolocation from '@react-native-community/geolocation';

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

  const openCamera = () => {
    alert('camera');
  };

  const openGalery = () => {
    alert('galery');
  };

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      },
    );
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

      <ButtonIndicator
        loading={props.loading}
        title={'Open Camera'}
        onPress={() => openCamera(data)}
      />

      <ButtonIndicator
        loading={props.loading}
        title={'Open Galery'}
        onPress={() => openGalery(data)}
      />

      <ButtonIndicator
        loading={props.loading}
        title={'Get Location'}
        onPress={getLocation}
      />

      <View>
        <Text>Render Test Result</Text>
      </View>

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

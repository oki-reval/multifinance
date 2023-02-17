import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';
import {BallIndicator} from 'react-native-indicators';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
import {setAuthloading, setUser} from '../../states/actions/initApps';
import {style} from '../../styles';
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
    <LinearGradient
      start={{x: 0.4, y: 0.25}}
      end={{x: 0.1, y: 2}}
      locations={[0.2, 0.8, 0.6]}
      colors={[color.pt10, color.secondary, color.p600]}
      style={styles.container}>
      <StatusBar style="light" backgroundColor={'transparent'} translucent />
      <Text style={styles.label}>WELCOME</Text>
      <Image
        source={require('../../assets/images/Logo.png')}
        resizeMode="contain"
        style={{height: height / 3, width: width / 1.5}}
      />
      <View style={style.footer}>
        <BallIndicator color={'white'} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: '#fff',
    fontSize: 34,
    fontFamily: 'Poppins-Light',
  },
});

export default AuthLoading;

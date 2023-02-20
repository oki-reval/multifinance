import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {StyleSheet, Dimensions, View, StatusBar, Image} from 'react-native';
import {BallIndicator} from 'react-native-indicators';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
import {Welcome} from '../../assets/svg';
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
      start={{x: 0.1, y: 0.14}}
      end={{x: 0.1, y: 2}}
      locations={[0, 0.5, 0.1]}
      colors={[color.s700, color.p600, color.pt60]}
      style={styles.container}>
      <StatusBar style="light" backgroundColor={'transparent'} translucent />
      <Welcome height={height / 3} />
      <View style={[style.flexRow, style.footer]}>
        <Image
          source={require('../../assets/images/Logo.png')}
          resizeMode="contain"
          style={{height: height / 15, width: width / 2}}
        />
        <BallIndicator color={color.s400} size={20} />
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
});

export default AuthLoading;

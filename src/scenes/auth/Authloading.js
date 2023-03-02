import AsyncStorage from '@react-native-async-storage/async-storage';
import {Divider} from '@rneui/base';
import React, {useEffect} from 'react';
import {StatusBar, Dimensions, View, Text, FlatList, Image} from 'react-native';
import {BallIndicator} from 'react-native-indicators';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch} from 'react-redux';
import {Promotion, Welcome} from '../../assets/svg';
import {Background, ButtonIndicator} from '../../components/atoms';
import {OpeningIndicator} from '../../components/mulecules';
import {setAuthloading, setUser} from '../../states/actions/initApps';
import {style} from '../../styles';
import {color} from '../../styles/colors';

const {height, width} = Dimensions.get('screen');

const AuthLoading = props => {
  const user = AsyncStorage.getItem('user');
  const dispatch = useDispatch();

  useEffect(() => {
    // generateConfiguration();
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
    <View>
      <StatusBar style="light" backgroundColor={'transparent'} translucent />
      <OpeningIndicator />
    </View>
  );
};

export default AuthLoading;

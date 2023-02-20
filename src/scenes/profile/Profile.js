import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {color, style} from '../../styles';
import {setAuthloading, setUser} from '../../states/actions/initApps';
import {Button} from '../../components/atoms';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Auth} from '../../assets/svg';

const Profile = props => {
  const data = useSelector(state => state.initApps.user);
  const dispatch = useDispatch();

  const onLogout = () => {
    AsyncStorage.getAllKeys().then(keys => AsyncStorage.multiRemove(keys));
    dispatch(setAuthloading(true));
    dispatch(setUser(null));
  };

  return (
    <View style={styles.container}>
      <Auth height={250} width={200} />
      <View style={[style.flexRow, styles.childContainer]}>
        <Text style={styles.title}>Name </Text>
        <Text style={styles.subtitle}>{data?.name}</Text>
      </View>
      <View style={[style.flexRow, styles.childContainer]}>
        <Text style={styles.title}>Email </Text>
        <Text style={styles.subtitle}>{data?.username}</Text>
      </View>
      <View style={[style.flexRow, styles.childContainer]}>
        <Text style={styles.title}>Username </Text>
        <Text style={styles.subtitle}>{data?.username}</Text>
      </View>
      <View style={[style.flexRow, styles.childContainer]}>
        <Text style={styles.title}>Company </Text>
        <Text style={styles.subtitle}>
          {data?.user_companies.current_company[1]}
        </Text>
      </View>
      <Button title={'Logout'} onPress={onLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 30,
  },
  childContainer: {
    ...style.shadow,
    justifyContent: 'space-between',
    marginVertical: 3,
  },
  title: {
    fontWeight: '500',
    fontSize: 17,
    fontFamily: 'Poppins-Medium',
    color: color.g700,
  },
  subtitle: {
    fontWeight: '400',
    fontSize: 15,
    fontFamily: 'Poppins-Regular',
    color: color.g700,
  },
});
export default Profile;

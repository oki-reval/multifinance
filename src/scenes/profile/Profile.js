import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {style} from '../../styles';
import {setAuthloading, setUser} from '../../states/actions/initApps';
import {Button} from '../../components/atoms';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = props => {
  const data = useSelector(state => state.initApps.user);

  const onLogout = () => {
    AsyncStorage.getAllKeys()
      .then(keys => AsyncStorage.multiRemove(keys))
      .then(() => alert('success'));
    dispatch(setAuthloading(true));
    dispatch(setUser(null));
  };

  return (
    <View style={style.container}>
      <View style={[style.flexRow, styles.childContainer]}>
        <Text style={styles.title}>Name : </Text>
        <Text style={styles.subtitle}>{data.name}</Text>
      </View>
      <View style={[style.flexRow, styles.childContainer]}>
        <Text style={styles.title}>Email : </Text>
        <Text style={styles.subtitle}>{data.username}</Text>
      </View>
      <View style={[style.flexRow, styles.childContainer]}>
        <Text style={styles.title}>Username : </Text>
        <Text style={styles.subtitle}>{data.username}</Text>
      </View>
      <View style={[style.flexRow, styles.childContainer]}>
        <Text style={styles.title}>Company : </Text>
        <Text style={styles.subtitle}>
          {data.user_companies.current_company[1]}
        </Text>
      </View>
      <Button title={'Logout'} onPress={onLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  childContainer: {
    ...style.shadow,
    justifyContent: 'space-between',
    marginVertical: 3,
  },
  title: {
    fontWeight: '500',
    fontSize: 17,
  },
  subtitle: {
    fontWeight: '400',
    fontSize: 15,
  },
});
export default Profile;

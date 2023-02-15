import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../../scenes/home/Dashboard';

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={'dashboard'} component={Dashboard} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;

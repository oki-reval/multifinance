import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../../scenes/home/Dashboard';
import Payments from '../../scenes/home/Payments';

const Stack = createNativeStackNavigator();

const HomeNav = () => {
  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <Stack.Screen name="payments" component={Payments} />
    </Stack.Navigator>
  );
};

export default HomeNav;

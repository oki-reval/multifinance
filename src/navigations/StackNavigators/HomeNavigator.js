import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../../scenes/home/Dashboard';

const Tab = createBottomTabNavigator();

const HomeNavigator = () => {
  return (
    <Tab.Navigator initialRouteName={'home'}>
      <Tab.Screen name={'home'} component={Dashboard} />
      <Tab.Screen name={'analytics'} component={Dashboard} />
      <Tab.Screen name={'notes'} component={Dashboard} />
      <Tab.Screen name={'settings'} component={Dashboard} />
    </Tab.Navigator>
  );
};

export default HomeNavigator;

import React from 'react';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabBar} from '../components/organisms';
import Dashboard from '../scenes/home/Dashboard';
import Profile from '../scenes/profile/Profile';
import HomeNav from './PrivateNav/HomeNav';

const Tab = createBottomTabNavigator();

const PrivateNavigator = () => {
  const visibelTab = route => {
    const routeName = getFocusedRouteNameFromRoute(route);
    const hideOnScreens = ['Home'];
    if (hideOnScreens.indexOf(routeName) > -1) return false;
    return true;
  };

  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{headerShown: false}}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name={'Home'}
        component={HomeNav}
        options={({route}) => {
          return visibelTab(route);
        }}
      />

      <Tab.Screen
        name={'Profile'}
        component={Profile}
        options={({route}) => {
          return visibelTab(route);
        }}
      />
    </Tab.Navigator>
  );
};

export default PrivateNavigator;

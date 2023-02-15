import React from 'react';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabBar} from '../components/organisms';
import Dashboard from '../scenes/home/Dashboard';
import Icon from 'react-native-vector-icons/Ionicons';
import {color, style} from '../styles';

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
      initialRouteName={'home'}
      options={{headerShown: false}}
      tabBar={props => <TabBar {...props} />}
      //   screenOptions={({route}) => ({
      //     tabBarIcon: ({focused, color, size}) => {
      //       let iconName;
      //       if (route.name == 'Home') {
      //         iconName = `home-outline'}`;
      //       } else if (route.name == 'Keranjang') {
      //         iconName = `cart-outline'}`;
      //       } else if (route.name == 'Profile') {
      //         iconName = `log-in-outline'}`;
      //       } else if (route.name == 'News') {
      //         iconName = `reader-outline'}`;
      //       }
      //       return <Icon name={iconName} size={24} color={color} />;
      //     },
      //     activeTintColor: color.primary,
      //     inactiveTintColor: color.g600,
      //     showLabel: false,
      //     style: [style.shadow],
      //   })}
      //   tabBarOptions={{
      //     activeTintColor: color.primary,
      //     inactiveTintColor: color.g600,
      //     showLabel: false,
      //     style: [style.shadow],
      //       }}
    >
      <Tab.Screen
        name={'home'}
        component={Dashboard}
        options={({route}) => {
          return visibelTab(route);
        }}
      />

      <Tab.Screen
        name={'analytics'}
        component={Dashboard}
        options={({route}) => {
          return visibelTab(route);
        }}
      />

      <Tab.Screen
        name={'notes'}
        component={Dashboard}
        options={({route}) => {
          return visibelTab(route);
        }}
      />

      <Tab.Screen
        name={'settings'}
        component={Dashboard}
        options={({route}) => {
          return visibelTab(route);
        }}
      />
    </Tab.Navigator>
  );
};

export default PrivateNavigator;

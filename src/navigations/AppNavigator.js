import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';
import PrivateNavigator from './PrivateNavigator';
import AuthLoading from '../scenes/auth/Authloading';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();

const App = props => {
  const loading = useSelector(state => state.initApps.isAuthLoading);
  const user = useSelector(state => state.initApps.user);

  if (loading) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name={'Middleware'}
            component={AuthLoading}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <Stack.Screen
            name={'PrivateNavigator'}
            component={PrivateNavigator}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name={'AuthNavigator'}
            component={AuthNavigator}
            options={{headerShown: false}}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

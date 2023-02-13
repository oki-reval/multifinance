import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthLoading from '../scenes/auth/Authloading';
import LogReg from '../scenes/auth/LogReg';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="authLoading"
        component={AuthLoading}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="loginRegister"
        component={LogReg}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;

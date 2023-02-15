import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigator from './AuthNavigator';
import PrivateNavigator from './PrivateNavigator';

const Stack = createNativeStackNavigator();

const App = props => {
  const token = null;
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  // if (loading) {
  //   return (
  //     <NavigationContainer>
  //       <Stack.Navigator>
  //         <Stack.Screen
  //           options={{headerShown: false}}
  //           name={'Middleware'}
  //           component={<AuthLoading />}
  //         />
  //       </Stack.Navigator>
  //     </NavigationContainer>
  //   );
  // }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {token ? (
          <Stack.Screen
            name={'PrivateNavigator'}
            component={PrivateNavigator}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen name={'AuthNavigator'} component={AuthNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

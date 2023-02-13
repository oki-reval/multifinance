import React, {useEffect} from 'react';
import store from './redux/store';
import {Provider} from 'react-redux';
import AppNavigator from './src/navigations/AppNavigator';
import {PersistGate} from 'redux-persist/integration/react';
import {Text} from 'react-native/types';
import {persistor} from './src/states/store';
import SplashScreen from 'react-native-splash-screen';
import {StatusBar} from 'react-native';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading....</Text>} persistor={persistor}>
        <StatusBar style="light" backgroundColor={'transparent'} translucent />
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;

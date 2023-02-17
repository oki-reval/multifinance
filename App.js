import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import AppNavigator from './src/navigations/AppNavigator';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/states/store';
import {Text} from 'react-native';
import {color} from './src/styles';

const App = () => {
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.style = {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: color.p800,
  };
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;

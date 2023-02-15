import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import AppNavigator from './src/navigations/AppNavigator';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/states/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;

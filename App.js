import store from './redux/store';
import {Provider} from 'react-redux';
import AppNavigator from './src/navigations/AppNavigator';
import {PersistGate} from 'redux-persist/integration/react';
import {Text} from 'react-native/types';
import {persistor} from './src/states/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading....</Text>} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;

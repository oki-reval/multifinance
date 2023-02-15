import React, {useEffect} from 'react';
import store from './src/states/store';
import {Provider} from 'react-redux';
import AppNavigator from './src/navigations/AppNavigator';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor} from './src/states/store';
import {Text} from 'react-native';
import {odoo_builder} from './src/utils/environment';

const LOAN_ACCOUNT = `
  {
    LoanAccount {
      name

      display_name
      total_loan

      line_ids {
        id
        display_name
      }
    }
  }
`;

const App = () => {
  useEffect(() => {
    setConfiguration();
  }, []);

  const setConfiguration = async () => {
    odoo_builder('http://47.241.10.35:88', 'demo')
      .login('oki.reval@ikonsultan.co', '12345')
      .then(res => console.log(res, 'login'));

    // await odoo_builder('http://47.241.10.35:88', 'demo')
    //   .session()
    //   .then(res => console.log(res, 'session'));

    await odoo_builder('http://47.241.10.35:88', 'demo')
      .graphql(LOAN_ACCOUNT)
      .then(res => console.log(res, 'graphql'));
  };

  return (
    // <Provider store={store}>
    // <PersistGate loading={<Text>Loading....</Text>} persistor={persistor}>
    <AppNavigator />
    // </PersistGate>
    // </Provider>
  );
};

export default App;

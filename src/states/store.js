import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createLogger} from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';

import reducers from './reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const logger = createLogger();

const store = createStore(
  persistedReducer,
  applyMiddleware(logger, promiseMiddleware),
);

const persistor = persistStore(store);

export {store, persistor};

import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {
  ActivityIndicator,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import AppNavigator from './src/navigations/AppNavigator';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/states/store';
import {color} from './src/styles';
import CodePush from 'react-native-code-push';

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const syncCodePush = async () => {
    try {
      await CodePush.sync(
        {
          updateDialog: {
            appendReleaseDescription: true,
            title: 'a new update is available!',
          },
          installMode: CodePush.InstallMode.IMMEDIATE,
        },
        status => {
          if (status === CodePush.SyncStatus.DOWNLOADING_PACKAGE) {
            showModal();
          } else {
            hideModal();
          }
        },
      );
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    syncCodePush();
  }, []);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.style = {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: color.p800,
  };

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View style={{flex: 1}}>
          <TouchableOpacity onPress={showModal}>
            <Text>Show Modal</Text>
          </TouchableOpacity>
          <Modal visible={modalVisible} animationType="slide" transparent>
            <View
              style={{
                flex: 1,
                backgroundColor: 'rgba(0,0,0,0.5)',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  backgroundColor: '#FFF',
                  width: '70%',
                  padding: 20,
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <ActivityIndicator size="large" />
                <Text style={{marginTop: 10}}>Loading...</Text>
              </View>
            </View>
          </Modal>
          <AppNavigator />
          {isLoading && (
            <View
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <ActivityIndicator size="large" />
            </View>
          )}
        </View>
      </PersistGate>
    </Provider>
  );
};

export default CodePush(App);

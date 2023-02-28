import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import AppNavigator from './src/navigations/AppNavigator';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/states/store';
import {Alert, Text} from 'react-native';
import {color} from './src/styles';
import CodePush from 'react-native-code-push';
import {Loading} from './src/components/atoms';

let CodePushOptions = {
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
  mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
  updateDialog: {
    appendReleaseDescription: true,
    title: 'a new update is available!',
  },
  onDownloadProgress: progress => {
    setDownloadProgress(progress.receivedBytes / progress.totalBytes);

    if (progress.receivedBytes === progress.totalBytes) {
      // Tampilkan notifikasi ketika pengunduhan selesai
      Alert.alert(
        'Update berhasil diunduh',
        'Aplikasi akan memperbarui dirinya saat dibuka kembali',
      );
    }
  },
};
if (CodePushOptions.checkFrequency == 1) {
  // Alert.alert(CodePushOptions.onDownloadProgress.length);
  console.log(CodePushOptions.onDownloadProgress.length);
}
console.log(CodePushOptions);

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

export default CodePush(CodePushOptions)(App);

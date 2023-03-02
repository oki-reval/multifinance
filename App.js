import React, {useState, useEffect} from 'react';
import * as Progress from 'react-native-progress';
import {Provider} from 'react-redux';
import AppNavigator from './src/navigations/AppNavigator';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/states/store';
import {ActivityIndicator, Alert, Text, View} from 'react-native';
import {color} from './src/styles';
import CodePush from 'react-native-code-push';
import {Loading} from './src/components/atoms';

const App = () => {
  const [progressBar, setProgress] = useState(0);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const downloadCodePush = async () => {
      try {
        const update = await CodePush.checkForUpdate();
        console.log('update', update);
        console.log('CodePush', CodePush);
        if (!update) {
          console.log('The app is up to date.');
        } else {
          setShowPopup(true);
          const syncStatus = CodePush.sync(
            {updateDialog: true, installMode: CodePush.InstallMode.IMMEDIATE},
            status => {
              console.log(`CodePush sync status: ${JSON.stringify(status)}`);
              if (status === CodePush.SyncStatus.DOWNLOADING_PACKAGE) {
                console.log(
                  `Download progress: ${syncStatus.downloadProgress}`,
                );
                setProgress(Math.floor(syncStatus.downloadProgress * 100));
              }
            },
          );
          await CodePush.sync(
            {
              checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
              mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
              updateDialog: {
                appendReleaseDescription: true,
                title: 'A new update is available!',
              },
              installMode: CodePush.InstallMode.IMMEDIATE,
            },
            syncStatus,
          );
        }
      } catch (err) {
        console.log(`An error occurred while checking for updates - ${err}`);
      } finally {
        setShowPopup(false);
      }
    };

    downloadCodePush();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View style={{flex: 1}}>
          <AppNavigator />
          {showPopup && (
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
              }}>
              <View
                style={{
                  backgroundColor: '#fff',
                  padding: 20,
                  borderRadius: 10,
                  alignItems: 'center',
                }}>
                <Text>Downloading update: {progressBar}%</Text>
                <Progress.Circle progress={progressBar / 100} size={50} />
              </View>
            </View>
          )}
        </View>
      </PersistGate>
    </Provider>
  );
};

export default CodePush(App);

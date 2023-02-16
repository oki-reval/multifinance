import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {FormPayment, ModalConfirmation} from '../mulecules';
import {Button} from '../atoms';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const PaymentContainer = props => {
  const [image, setImage] = useState('');

  const openCamera = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, res => {
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        console.log(res.data, 'assets');
        setImage(res);
      }
    });
  };

  const openGalery = () => {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, res => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        setImage(res);
      }
    });
  };

  return (
    <View style={styles.container}>
      <FormPayment
        location={props.location}
        openCamera={openCamera}
        openGalery={openGalery}
        image={image}
      />
      <ModalConfirmation visible={false} />
      <Button title={'Konfirmasi Pembayaran'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default PaymentContainer;

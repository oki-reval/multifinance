import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {style} from '../../styles';
import {Button} from '../atoms';

const {height, width} = Dimensions.get('screen');

const FormPayment = props => {
  return (
    <View>
      <View style={[style.flexRow, styles.childContainer]}>
        <Text>Lokasi Pembayaran : </Text>
        <Text>
          {props.location.coords.latitude +
            ' , ' +
            props.location.coords.longitude}
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Text>Unggah Bukti Pembayaran</Text>
        <View style={[style.flexRow, styles.childContainer, {width: '100%'}]}>
          <Button title={'Ambil Foto'} onPress={props.openCamera} />
          <Button title={'Pilih dari Galeri'} onPress={props.openGalery} />
        </View>
        <View style={[style.shadow, {marginVertical: 20}]}>
          {props?.image && (
            <Image
              source={{uri: props?.image?.assets[0]?.uri}}
              style={{
                margin: 10,
                height: Dimensions.get('screen').height / 3,
                width: Dimensions.get('screen').width / 1.5,
              }}
            />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childContainer: {
    justifyContent: 'space-between',
    ...style.shadow,
    borderRadius: 15,
  },
  imageContainer: {
    padding: 20,
    alignItems: 'center',
    margin: 10,
    borderWidth: 0.1,
    ...style.shadow,
  },
});
export default FormPayment;

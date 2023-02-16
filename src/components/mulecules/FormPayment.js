import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {style} from '../../styles';
import {Button} from '../atoms';

const {height, width} = Dimensions.get('screen');

const FormPayment = props => {
  console.log(props.location);
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
          <Button title={'Ambil Foto'} />
          <Button title={'Pilih dari Galeri'} />
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

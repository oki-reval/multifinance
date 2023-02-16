import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {style} from '../../styles';
import {Button, Input} from '../atoms';
import Icon from 'react-native-vector-icons/Ionicons';

const {height, width} = Dimensions.get('screen');

const FormPayment = props => {
  return (
    <View>
      <View style={[style.flexRow, styles.childContainer]}>
        <Text>Lokasi Pembayaran : </Text>
        <View style={styles.address}>
          <Text>{props.location}</Text>
        </View>
      </View>
      <View style={[style.flexRow, styles.childContainer]}>
        <Text>Jumlah Pembayaran : </Text>
        <View style={styles.address}>
          <Input
            placeholder={'Masukan Nominal Pembayaran'}
            onChangeText={val => console.log(val)}
          />
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Text>Unggah Bukti Pembayaran</Text>
        <View style={[style.flexRow, styles.childContainer, {width: '100%'}]}>
          <Button title={'Ambil Foto'} onPress={props.openCamera} />
          <Button title={'Pilih dari Galeri'} onPress={props.openGalery} />
        </View>
        <View style={[style.shadow, {marginVertical: 10}]}>
          {props?.image && (
            <>
              <Icon
                name="close-circle"
                size={24}
                onPress={() => props.onDelete()}
              />
              <Image
                source={{uri: props?.image?.assets[0]?.uri}}
                style={{
                  margin: 10,
                  height: height / 5,
                  width: width / 2.5,
                }}
              />
            </>
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
    alignItems: 'center',
  },
  imageContainer: {
    padding: 20,
    alignItems: 'center',
    ...style.shadow,
    borderRadius: 15,
  },
  address: {
    maxWidth: width / 2,
  },
});
export default FormPayment;

import React from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {color, style} from '../../styles';
import {Button} from '../atoms';

const ModalConfirmation = props => {
  return (
    <View style={styles.centeredView}>
      <Modal animationType="fade" transparent={true} visible={props.visible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Icon
              name={'close-circle-outline'}
              size={34}
              onPress={() => props.onClose()}
              style={styles.close}
            />
            <Text style={styles.modalText}>
              Pembayaran Berhasil dilakukan {props.message}
            </Text>
            <Button title={'Kembali'} onPress={() => props.onBack()} />
          </View>
        </View>
        <View style={styles.transparent}></View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    ...style.shadow,
  },
  modalText: {
    marginVertical: 25,
    textAlign: 'center',
  },
  transparent: {
    position: 'absolute',
    backgroundColor: color.g800,
    opacity: 0.7,
    height: '100%',
    width: '100%',
    zIndex: -10,
  },
  close: {
    position: 'absolute',
    right: 10,
  },
});

export default ModalConfirmation;

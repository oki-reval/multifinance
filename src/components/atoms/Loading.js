import React from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import {BallIndicator} from 'react-native-indicators';
import Icon from 'react-native-vector-icons/Ionicons';
import {color, style} from '../../styles';
import {Button} from '../atoms';

const Loading = props => {
  return (
    <View style={styles.centeredView}>
      <Modal animationType="fade" transparent={true} visible={props.loading}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <BallIndicator />
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
    height: 80,
    width: 80,
  },
  transparent: {
    position: 'absolute',
    backgroundColor: color.g800,
    opacity: 0.7,
    height: '100%',
    width: '100%',
    zIndex: -10,
  },
});

export default Loading;

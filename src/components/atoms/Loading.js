import React from 'react';
import {Dimensions, Modal, StatusBar, StyleSheet, View} from 'react-native';
import {BallIndicator} from 'react-native-indicators';
import {color} from '../../styles';

const Loading = props => {
  return (
    <View style={styles.centeredView}>
      <StatusBar backgroundColor={color.p600} translucent />
      <Modal animationType="fade" transparent={true} visible={props.loading}>
        <View style={styles.centeredView}>
          <BallIndicator color={color.p700} />
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
  transparent: {
    position: 'absolute',
    backgroundColor: color.p700,
    opacity: 0.7,
    height: '100%',
    width: '100%',
    zIndex: -10,
  },
});

export default Loading;

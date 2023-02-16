import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  View,
  FlatList,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {color, style} from '../../styles';
import {autoCurency} from '../../utils/helper';

const ModalDetailAccount = props => {
  const data = props?.detailData;

  const renderItem = ({item}) => (
    <View
      style={[
        style.shadow,
        {marginVertical: 5, width: Dimensions.get('screen').width - 10},
      ]}>
      <View style={[style.flexRow, styles.textItem]}>
        <Text>Tanggal Pembayaran</Text>
        <Text>{item.display_name}</Text>
      </View>
      <View style={[style.flexRow, styles.textItem]}>
        <Text>Jumlah Pembayaran</Text>
        <Text>{autoCurency(item.amount)}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.centeredView}>
      <Modal animationType="fade" transparent={true} visible={props.visible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Icon
              name={'close-circle-outline'}
              size={34}
              onPress={() => props.onClose()}
            />
            <Text style={styles.modalText}>
              {data?.LoanAccount ? data?.LoanAccount[0]?.display_name : ''}
            </Text>
            <FlatList
              data={data?.LoanAccount ? data?.LoanAccount[0]?.line_ids : []}
              keyExtractor={(_, index) => index.toString()}
              renderItem={renderItem}
            />
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
    padding: 35,
    ...style.shadow,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  modalText: {
    marginBottom: 15,
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
  textItem: {
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: -8,
  },
});

export default ModalDetailAccount;

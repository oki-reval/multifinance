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
import {Button} from '../atoms';
const {height, width} = Dimensions.get('screen');
const ModalDetailAccount = props => {
  const data = props?.detailData;

  const renderItem = ({item}) => (
    <View
      style={[
        style.shadow,
        {
          padding: 5,
          marginVertical: 10,
          marginHorizontal: 5,
          alignItems: 'center',
          borderRadius: 6,
          borderWidth: 0.7,
          borderColor: color.secondary,
        },
      ]}>
      <View style={[style.flexRow, styles.textItem]}>
        <Text>Tanggal Pembayaran</Text>
        <Text>{item.display_name}</Text>
      </View>
      <View style={[style.flexRow, styles.textItem]}>
        <Text>Jumlah Pembayaran</Text>
        <Text>{autoCurency(item.amount)}</Text>
      </View>
      <View style={{width: '60%', paddingVertical: 5}}>
        <Button title={'Bayar'} onPress={props.onPress} />
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
              style={{alignSelf: 'flex-end'}}
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
    justifyContent: 'flex-end',
    // alignItems: 'center',
  },
  modalView: {
    backgroundColor: color.g700,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 15,
    ...style.shadow,
    width: width,
    height: height - 100,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 24,
  },
  transparent: {
    position: 'absolute',
    backgroundColor: color.tabBg,
    opacity: 0.7,
    height: '100%',
    width: '100%',
    zIndex: -10,
  },
  textItem: {
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: -5,
  },
});

export default ModalDetailAccount;

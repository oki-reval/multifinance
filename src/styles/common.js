import {StyleSheet, Platform} from 'react-native';
import {color} from './colors';

export const style = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: color.bglight,
    padding: 10,
    justifyContent: 'center',
  },
  formContainer: {
    alignContent: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 3,
    shadowRadius: 2,
    elevation: 2,
    backgroundColor: '#fff',
  },
  centerContent: {
    alignSelf: 'center',
  },
  header: {
    // height: Platform.OS == 'ios' ? isIphoneX() ? 93 : 73 : 58,
    flexDirection: 'row',
    alignItems: 'center',
    // paddingTop: Platform.OS == 'ios' ? isIphoneX() ? 30 : 25 : 5,
    paddingHorizontal: 10,
    paddingBottom: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
    backgroundColor: '#fff',
    marginBottom: 3,
  },
  body: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    // padding: 16,
  },
});

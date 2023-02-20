import {StyleSheet, Platform} from 'react-native';
import {color} from './colors';

export const style = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'center',
  },
  CenteredContainer: {
    flex: 1,
    backgroundColor: color.bglight,
    padding: 10,
    justifyContent: 'center',
  },
  formContainer: {
    alignContent: 'center',
  },
  footer: {
    position: 'absolute',
    bottom: 10,
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
    alignItems: 'center',
  },
  logoSmall: {
    height: 50,
    width: 100,
  },
  body: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  h1: {
    fontSize: 20,
    margin: 5,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
    color: color.p700,
  },
  h1_light: {
    textAlign: 'center',
    fontSize: 20,
    margin: 10,
    fontFamily: 'Poppins-Light',
  },
});

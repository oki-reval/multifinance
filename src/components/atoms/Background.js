import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('screen');
const Background = props => {
  return (
    <ImageBackground
      style={[
        {
          height: props.height ? props.height : height,
          width: props.width ? props.width : width,
          padding: 10,
        },
      ]}
      blurRadius={8}
      source={require('../../assets/images/background.jpg')}>
      <Image
        style={[
          {
            height: props.height ? props.height : height,
            width: props.width ? props.width : width,
            position: 'absolute',
            transform: [{rotate: '180deg'}],
            opacity: 0.4,
          },
        ]}
        source={require('../../assets/images/background.jpg')}
      />
      <View style={styles.container}>{props.children}</View>
    </ImageBackground>
  );
};

export default Background;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

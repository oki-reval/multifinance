import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Animated,
} from 'react-native';
import {BallIndicator} from 'react-native-indicators';
import Icon from 'react-native-vector-icons/Ionicons';
import {color, style} from '../../styles';
import LinearGradient from 'react-native-linear-gradient';

const Button = props => {
  const {backgroundColor, outline, disable} = props;
  return (
    <TouchableHighlight
      underlayColor="transparent"
      disabled={disable}
      onPress={props.onPress}
      style={{marginVertical: 8}}>
      <View
        style={[
          {
            backgroundColor: disable
              ? color.g400
              : outline
              ? null
              : backgroundColor ?? color.primary,
            borderWidth: outline && 1,
            borderColor: outline && color.primary,
            borderRadius: 10,
          },
          props.style,
        ]}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'center',
            padding: 10,
          }}>
          {props.iconLeft && <Icon name={props.iconLeft} color="#fff" />}
          {props.loading ? (
            <BallIndicator size={18} color="#fff" />
          ) : (
            <Text
              style={{
                color: outline ? color.primary : '#fff',
                fontWeight: 'bold',
                fontFamily: 'Poppins-Bold',
              }}>
              {props.title}
            </Text>
          )}
        </View>
      </View>
    </TouchableHighlight>
  );
};

const ButtonText = props => {
  return (
    <TouchableHighlight underlayColor="transparent" onPress={props.onPress}>
      <View
        style={[
          props.style,
          {alignItems: 'center', flexDirection: 'row', alignSelf: 'center'},
        ]}>
        {props.iconLeft && (
          <Icon
            name={props.iconLeft}
            size={props.iconSize ?? 16}
            color={props.iconColor}
            style={{paddingRight: 4}}
          />
        )}
        <Text
          style={[
            styles.text,
            props.textStyle,
            {
              color: props.color,
              fontWeight: props.noBold ? 'normal' : 'bold',
              fontSize: props.fontSize,
            },
          ]}>
          {props.title}
        </Text>
        {props.iconRight && (
          <Icon
            name={props.iconRight}
            size={16}
            color={props.iconColor ?? color.primary}
            style={{paddingLeft: 4}}
          />
        )}
      </View>
    </TouchableHighlight>
  );
};

const ButtonIndicator = props => {
  const {border, textColor, stripColor, loading} = props;

  return (
    <TouchableHighlight
      underlayColor="transparent"
      onPress={props.onPress}
      disabled={props.disabled}>
      <LinearGradient
        start={{x: 0.6, y: 0.25}}
        end={{x: 0.5, y: 2}}
        locations={[0, 0.8, 0.6]}
        colors={[color.pt30, color.primary, color.p200]}
        style={[styles.btnIndicator, props.style, {borderWidth: border}]}>
        <View>
          {loading ? (
            <View style={{height: 25}}>
              <BallIndicator size={28} color="#fff" />
            </View>
          ) : (
            <Text
              style={[
                styles.btnTextIndicator,
                {color: textColor ?? color.g200},
              ]}>
              {props.title}
            </Text>
          )}
        </View>
      </LinearGradient>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  text: {
    color: color.g800,
    fontFamily: 'Poppins-Bold',
  },
  btnIndicator: {
    ...style.shadow,
    padding: 10,
    borderRadius: 10,
    borderColor: color.g300,
  },
  btnTextIndicator: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
  },
});

export {Button, ButtonText, ButtonIndicator};

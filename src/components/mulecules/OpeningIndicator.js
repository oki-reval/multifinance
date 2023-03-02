import {Divider} from '@rneui/base';
import React from 'react';
import {Dimensions, View, Text, FlatList, Image} from 'react-native';
import {Promotion} from '../../assets/svg';
import {Background, ButtonIndicator} from '../../components/atoms';
import {style} from '../../styles';
import {color} from '../../styles/colors';

const dummy = [
  {
    title: 'Welcome to BinaArta Finance',
    subtitle: ' Lorem Ipsum None more anom ipsum. Laborte occordions',
  },
  {
    title: 'Get a new experience with BinaArta',
    subtitle: ' Lorem Ipsum None more anom ipsum. Laborte occordions',
  },
  {
    title: 'Easy Manage Loan Account for your Company',
    subtitle: ' Lorem Ipsum None more anom ipsum. Laborte occordions',
  },
];

const {height, width} = Dimensions.get('screen');

const OpeningIndicator = props => {
  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          margin: 10,
          padding: 5,
          width: '76%',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/images/Logo.png')}
          resizeMode="center"
          style={{width: 100, height: 80}}
        />
        <Text style={[style.h1]}>Welcome To BinaArta Finance</Text>
        <Text style={[style.title]}>
          Lorem Ipsum None more anom ipsum. Laborte occordions
        </Text>
      </View>
    );
  };

  const renderDot = ({item, index}) => (
    <View
      style={{
        height: 15,
        width: 15,
        borderRadius: 15,
        margin: 5,
        backgroundColor: color.p700,
      }}></View>
  );

  return (
    <View>
      <Background>
        <View style={{position: 'absolute', top: 30}}>
          <Promotion height={height / 2} width={width / 1.5} />
        </View>
        <View
          style={[
            style.footer,
            style.shadow,
            {
              width: '100%',
              borderTopEndRadius: 15,
              borderTopStartRadius: 15,
              padding: 10,
            },
          ]}>
          <FlatList
            data={dummy}
            keyExtractor={(_, index) => index.toString()}
            renderItem={renderItem}
            horizontal
          />
          <View style={{alignItems: 'center'}}>
            <FlatList
              data={[{id: 1}, {id: 1}, {id: 1}]}
              keyExtractor={(_, index) => index.toString()}
              renderItem={renderDot}
              horizontal
            />
          </View>
          <Divider height={40} />
          <ButtonIndicator title={'Next'} />
        </View>
      </Background>
    </View>
  );
};

export default OpeningIndicator;

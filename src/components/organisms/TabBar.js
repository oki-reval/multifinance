import React from 'react';
import {View, Pressable, Dimensions, StyleSheet, Text} from 'react-native';
import NavigationIcon from '../mulecules/NavigationIcon';

const {width} = Dimensions.get('window');

const TabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={styles.mainContainer}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <View
            key={index}
            style={[
              styles.mainItemContainer,
              {borderRightWidth: label == 'notes' ? 3 : 0},
            ]}>
            <Pressable
              onPress={onPress}
              style={{
                backgroundColor: isFocused ? '#030D16' : '#182028',
                borderRadius: 20,
              }}>
              <View style={styles.icon}>
                <NavigationIcon route={label} isFocused={isFocused} />
                <Text style={styles.label}>{label}</Text>
              </View>
            </Pressable>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 15,
    backgroundColor: '#182028',
    borderRadius: 25,
    marginHorizontal: width * 0.04,
  },
  mainItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 1,
    borderColor: '#333B42',
  },
  label: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
});

export default TabBar;

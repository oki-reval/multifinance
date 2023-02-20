import React from 'react';
import {View, Pressable, Dimensions, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector} from 'react-redux';
import {color} from '../../styles';
import NavigationIcon from '../mulecules/NavigationIcon';

const {width} = Dimensions.get('window');

const TabBar = ({state, descriptors, navigation}) => {
  const hideTabs = useSelector(state => state.initApps.hideTabs);

  return (
    <SafeAreaView>
      {hideTabs ? null : (
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
              <View key={index} style={[styles.mainItemContainer]}>
                <Pressable
                  onPress={onPress}
                  style={{
                    backgroundColor: isFocused ? color.p600 : color.p800,
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
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 15,
    backgroundColor: color.p800,
    borderRadius: 25,
    marginHorizontal: width * 0.04,
  },
  mainItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 2,
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
    paddingVertical: 3,
  },
});

export default TabBar;

import React, {useEffect, useState, useCallback} from 'react';
import {PaymentContainer} from '../../components/organisms';
import Geocoder from 'react-native-geocoding';
import {useFocusEffect} from '@react-navigation/native';
import {setTabBar} from '../../states/actions/initApps';
import {useDispatch} from 'react-redux';

const Payments = props => {
  const dispatch = useDispatch();
  const [showMessage, setShowMessage] = useState(false);
  const coordinate = props.route.params?.location?.coords;
  const [address, setAddress] = useState([]);

  useFocusEffect(
    useCallback(() => {
      dispatch(setTabBar(true));
      return () => {
        dispatch(setTabBar(false));
      };
    }, []),
  );

  useEffect(() => {
    Geocoder.init('AIzaSyBoPaefkLBT9tyVqyaH0kgkU2YxthQBZ_4');
    Geocoder.from(coordinate.latitude, coordinate.longitude)
      .then(json => {
        var addressComponent = json.results[0].address_components;
        let add = [];
        addressComponent.map(val => {
          add.push(val.long_name);
        });
        setAddress(add);
      })
      .catch(error => console.warn(error));
  }, [props.route.params.location]);

  const onConfirmPayment = () => {
    setShowMessage(true);
  };

  return (
    <PaymentContainer
      location={address.toString()}
      paymentConfirmation={onConfirmPayment}
      showMessage={showMessage}
      onClose={() => setShowMessage(false)}
      onBack={() => props.navigation.goBack()}
    />
  );
};

export default Payments;

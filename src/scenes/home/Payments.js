import React, {useEffect, useState} from 'react';
import {PaymentContainer} from '../../components/organisms';
import Geocoder from 'react-native-geocoding';

const Payments = props => {
  const [showMessage, setShowMessage] = useState(false);
  const coordinate = props.route.params?.location?.coords;
  const [address, setAddress] = useState([]);

  useEffect(() => {
    Geocoder.init('AIzaSyBoPaefkLBT9tyVqyaH0kgkU2YxthQBZ_4');
    Geocoder.from(coordinate.latitude, coordinate.longitude)
      .then(json => {
        console.log(json.results[0], 'results');
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
    />
  );
};

export default Payments;

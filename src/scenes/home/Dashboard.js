import React, {useCallback, useState} from 'react';
import {Image, Alert} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {odoo_builder} from '../../utils/environment';
import {
  getDetailLoanAccount,
  getLoanAccount,
  variableDetail,
} from '../../graphql/query';
import {LoanAcount} from '../../components/organisms';
import {useDispatch, useSelector} from 'react-redux';
import {setLoan} from '../../states/actions/initApps';
import Geolocation from '@react-native-community/geolocation';
import {useFocusEffect} from '@react-navigation/native';
import {style} from '../../styles';

const Dashboard = props => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.initApps.loadingLoan);
  const [data, setData] = useState([]);
  const [visible, setvisible] = useState(false);
  const [detailData, setDetailData] = useState({});
  const [loadings, setLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      generateData();
      return () => {
        null;
      };
    }, []),
  );

  const generateData = async () => {
    await odoo_builder('http://47.241.10.35:88', 'demo')
      .graphql(getLoanAccount)
      .then(res => setData(res.LoanAccount))
      .catch(err => {
        console.log(err);
      });
    dispatch(setLoan(data));
  };

  const getDetails = async val => {
    setvisible(true);
    await odoo_builder('http://47.241.10.35:88', 'demo')
      .graphql(getDetailLoanAccount, variableDetail(val.name))
      .then(res => {
        setDetailData(res);
      })
      .catch(err => {
        Alert.alert('Opps ..... ', 'Please Try Again', [
          {
            text: 'OK',
            onPress: () => setvisible(false),
          },
        ]);
      });
  };

  const generateLocation = async () => {
    await Geolocation.getCurrentPosition(
      async res => {
        await setvisible(false);
        await props.navigation.navigate('payments', {location: res});
      },
      err => {
        console.log(err);
      },
    );
  };

  return (
    <SafeAreaView>
      <Image
        source={require('../../assets/images/Logo.png')}
        style={[style.logoSmall, {margin: 10}]}
      />
      <LoanAcount
        data={data}
        detailData={detailData}
        loading={loading}
        loadingPage={loadings}
        onPress={val => getDetails(val)}
        visible={visible}
        onClose={() => {
          setDetailData([]);
          setvisible(false);
        }}
        onPay={generateLocation}
      />
    </SafeAreaView>
  );
};

export default Dashboard;

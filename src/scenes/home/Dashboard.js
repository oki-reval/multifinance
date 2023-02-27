import React, {useCallback, useState, useEffect} from 'react';
import {Image, Alert, BackHandler} from 'react-native';
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
import {Loading} from '../../components/atoms';

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
  console.log(visible);
  function handleBackButtonClick() {
    setvisible(false);
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', handleBackButtonClick);
    return () => {
      BackHandler.removeEventListener(
        'hardwareBackPress',
        handleBackButtonClick,
      );
    };
  }, []);

  const generateData = async () => {
    await odoo_builder('http://47.241.10.35:88', 'LoanDemo-3.1')
      .graphql(getLoanAccount)
      .then(res => setData(res.LoanAccount))
      .catch(err => {
        console.log(err);
      });
    dispatch(setLoan(data));
  };

  const getDetails = async val => {
    setvisible(true);
    setLoading(true);
    await odoo_builder('http://47.241.10.35:88', 'LoanDemo-3.1')
      .graphql(getDetailLoanAccount, variableDetail(val.name))
      .then(res => {
        setDetailData(res);
        setLoading(false);
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
        onPress={val => getDetails(val)}
        visible={visible}
        onClose={() => {
          setDetailData([]);
          setvisible(false);
        }}
        onPay={generateLocation}
        loadData={loadings}
      />
      {loading && <Loading />}
    </SafeAreaView>
  );
};

export default Dashboard;

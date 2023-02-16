import React, {useEffect, useState} from 'react';
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

const Dashboard = props => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.initApps.loadingLoan);
  const [data, setData] = useState([]);
  const [visible, setvisible] = useState(false);
  const [detailData, setDetailData] = useState({});

  useEffect(() => {
    generateData();
  }, []);

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
    await odoo_builder('http://47.241.10.35:88', 'demo')
      .graphql(getDetailLoanAccount, variableDetail(val.name))
      .then(res => {
        setDetailData(res);
        setTimeout(() => {
          setvisible(true);
        }, 500);
      })
      .catch(err => {
        alert('Please Try Agains');
      });
  };

  const generateLocation = () => {
    Geolocation.getCurrentPosition(
      res => {
        console.log(res);
        props.navigation.navigate('payments', {location: res});
      },
      err => {
        console.log(err);
      },
    );
  };

  return (
    <SafeAreaView>
      <LoanAcount
        data={data}
        detailData={detailData}
        loading={loading}
        onPress={val => getDetails(val)}
        visible={visible}
        onClose={() => setvisible(false)}
        onPay={generateLocation}
      />
    </SafeAreaView>
  );
};

export default Dashboard;

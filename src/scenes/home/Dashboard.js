import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {odoo_builder} from '../../utils/environment';
import {getLoanAccount} from '../../graphql/query';
import {LoanAcount} from '../../components/organisms';
import {useDispatch, useSelector} from 'react-redux';
import {setLoan} from '../../states/actions/initApps';

const Dashboard = props => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const loading = useSelector(state => state.initApps.loadingLoan);
  useEffect(() => {
    generateData();
  }, []);

  const generateData = async () => {
    await odoo_builder('http://47.241.10.35:88', 'demo')
      .graphql(getLoanAccount)
      .then(res => setData(res.LoanAccount));
    dispatch(setLoan(data));
  };

  return (
    <SafeAreaView>
      <LoanAcount data={data} loading={loading} />
    </SafeAreaView>
  );
};

export default Dashboard;

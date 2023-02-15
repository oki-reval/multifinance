import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {odoo_builder} from '../../utils/environment';
import {getLoanAccount} from '../../graphql/query';
import {LoanAcount} from '../../components/organisms';
import {useDispatch, useSelector} from 'react-redux';
import {setLoan} from '../../states/actions/initApps';

const Dashboard = props => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const [temp, setTemp] = useState(0);
  const loading = useSelector(state => state.initApps.loadingLoan);

  useEffect(() => {
    generateData();
  }, [temp]);

  const generateData = async () => {
    await odoo_builder('http://47.241.10.35:88', 'demo')
      .graphql(getLoanAccount)
      .then(res => setData(res.LoanAccount))
      .catch(err => {
        console.log(err);
        // setTemp(temp + 1);
      });
    dispatch(setLoan(data));
  };

  return (
    <SafeAreaView>
      <LoanAcount data={data} loading={loading} />
    </SafeAreaView>
  );
};

export default Dashboard;

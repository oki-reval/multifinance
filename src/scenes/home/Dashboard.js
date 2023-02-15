import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, StatusBar, FlatList, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {odoo_builder} from '../../utils/environment';
import {getLoanAccount} from '../../graphql/query';

const Dashboard = props => {
  const [data, setData] = useState([]);
  useEffect(() => {
    generateData();
  }, []);

  const generateData = async () => {
    await odoo_builder('http://47.241.10.35:88', 'demo')
      .graphql(getLoanAccount)
      .then(res => setData(res.LoanAccount));
  };

  const renderItem = ({item}) => (
    <View>
      <Text>{item.id}</Text>
      <Text>{item.display_name}</Text>
      <Text>{item.total_loan}</Text>
    </View>
  );

  console.log(data);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#040507" />
      <View style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#040507',
    // alignItems: 'center',
  },
});

import React from 'react';
import {SafeAreaView} from 'react-native';
import HotelsList from 'root/src/components/hotelsList';

import styles from './styles';

const Home = () => {
  return (
    <SafeAreaView style={styles.bg}>
      <HotelsList />
    </SafeAreaView>
  );
};

export default Home;

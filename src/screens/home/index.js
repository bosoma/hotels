import React, {useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {getHotels} from 'root/src/api';
import HotelsList from 'root/src/components/hotelsList';

const Home = () => {

  return (
    <View>
      <HotelsList/>
    </View>
  );
};

export default Home;

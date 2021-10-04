import React, {useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import {getHotels} from 'root/src/api';

const HotelsList = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    getHotels()
      .then(response => response.json())
      .then(result => {
          setHotels(result);
          setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <View>
      <FlatList
        data={hotels}
        //renderItem={}
        style={{}}
      />
    </View>
  );
};

export default HotelsList;

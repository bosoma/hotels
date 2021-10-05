import React, {useEffect, useState} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';

import {getHotels} from 'root/src/api';
import Hotel from 'root/src/components/hotel';

import styles from './styles';

const HotelsList = () => {

  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    if (!hotels.length) {
      getHotels()
        .then(response => response.json())
        .then(result => {
          setHotels(result);
          setLoading(false);
          console.log('···· data received');
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, []);

  return (
    <View>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={55} />
        </View>
      ) : (
        <FlatList
          keyExtractor={item => item.id}
          data={hotels}
          renderItem={hotelData => <Hotel hotelData={hotelData.item} />}
        />
      )}
    </View>
  );
};

export default HotelsList;

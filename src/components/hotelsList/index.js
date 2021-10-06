import React from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';

import Hotel from 'root/src/components/hotel';

import styles from './styles';

const HotelsList = ({hotels = null}) => {

  //console.log('*hotels', hotels)

  return (
    <View>
      {!hotels ? (
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

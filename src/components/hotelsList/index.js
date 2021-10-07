import React from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';

import Hotel from 'root/src/components/hotel';
import Filter from 'root/src/components/filter';

import styles from './styles';

const HotelsList = ({hotels = null, filterOptions, updateData}) => {
  return (
    <View>
      {!hotels ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={55} />
        </View>
      ) : (
        <FlatList
          ListHeaderComponent={
            <Filter filterOptions={filterOptions} updateData={updateData} />
          }
          keyExtractor={item => item.id}
          data={hotels}
          renderItem={hotelData => <Hotel hotelData={hotelData.item} />}
        />
      )}
    </View>
  );
};

export default HotelsList;

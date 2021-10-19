import React from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';

import Hotel from 'root/src/components/hotel';

import styles from './styles';

const HotelsList = ({listItems = null, listHeaderComponent}) => {

  return (
    <View>
      {!listItems ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={55} />
        </View>
      ) : (
        <FlatList
          ListHeaderComponent={listHeaderComponent}
          keyExtractor={item => item.id}
          data={listItems}
          renderItem={({item}) => <Hotel itemData={item} />}
        />
      )}
    </View>
  );
};

export default HotelsList;

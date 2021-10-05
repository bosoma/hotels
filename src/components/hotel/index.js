import React, {useState} from 'react';
import {Image, View, TouchableOpacity, Text} from 'react-native';
import {Rating} from 'react-native-elements';

import styles from './styles';

// Rating used here both for stars indicator and rating average
const Hotel = ({hotelData}) => {

  const [isExpanded, setExpanded] = useState(false);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setExpanded(!isExpanded)}>
      <View style={styles.overview}>
        <Image style={styles.image} source={{uri: hotelData.gallery[0]}} />
        <View style={styles.internalRow}>
          <Text style={styles.title} numberOfLines={2}>
            {hotelData.name}
          </Text>
          <View style={styles.hotelStars}>
            <Rating
              readonly
              imageSize={10}
              ratingCount={hotelData.stars}
              startingValue={hotelData.stars}
              type="custom"
              ratingColor={styles.hotelStars.color}
            />
          </View>
        </View>
      </View>
      {!!isExpanded && (
        <View>
          <Text style={styles.details}>test</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Hotel;

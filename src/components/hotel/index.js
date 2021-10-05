import React from 'react';
import {View} from 'react-native';
import {ListItem, Avatar, Rating} from 'react-native-elements';

import styles from './styles';

// Rating used here both for stars indicator and rating average
const Hotel = ({hotelData}) => {

  const subtitle = '';
  const title = hotelData.name.slice(0, 35)
  return (
    <ListItem bottomDivider onPress={() => console.log('pressed')}>
      <Avatar source={{uri: hotelData.gallery[0]}} />
      <ListItem.Content>
        <View style={styles.internalRow}>
          <ListItem.Title style={styles.title} numberOfLines={2}>
            {title}
          </ListItem.Title>
          <View style={styles.hotelStars}>
            <Rating
              readonly
              imageSize={15}
              ratingCount={hotelData.stars}
              startingValue={hotelData.stars}
              type="custom"
              ratingColor={styles.hotelStars.color}
            />
          </View>
        </View>
        {/* <ListItem.Subtitle>{subtitle}</ListItem.Subtitle> */}
      </ListItem.Content>
    </ListItem>
  );
};

export default Hotel;

import React, {useState} from 'react';
import {Image, View, TouchableOpacity, Text} from 'react-native';
import {Rating, Icon, Button} from 'react-native-elements';

import ItemDetails from 'root/src/components/itemDetails';

import styles from './styles';

const Hotel = ({hotelData}) => {
  const defaultImg =
    'https://cdn.icon-icons.com/icons2/2490/PNG/512/hotel_icon_150155.png';

  const [isExpanded, setExpanded] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const [avatarImg, setAvatarImg] = useState(
    hotelData.gallery ? hotelData.gallery[imageIndex] : defaultImg,
  );

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setExpanded(!isExpanded)}>
      <View style={styles.overview}>
        <Image
          key={imageIndex}
          style={styles.image}
          source={{uri: avatarImg}}
          onError={e => {
            hotelData.gallery
            setImageIndex(imageIndex + 1);
            setAvatarImg(hotelData.gallery[imageIndex]);
            if (imageIndex === hotelData.gallery.length - 1) {
              setAvatarImg(defaultImg);
            }
          }}
        />
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
        <ItemDetails
          rating={hotelData.userRating}
          location={hotelData.location}
          checks={{in: hotelData.checkIn, out: hotelData.checkOut}}
          contact={hotelData.contact}
          images={hotelData.gallery}
          price={{qty: hotelData.price, currency: hotelData.currency}}
        />
      )}
    </TouchableOpacity>
  );
};

export default Hotel;

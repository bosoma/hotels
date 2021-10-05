import React, {useState} from 'react';
import {Image, View, TouchableOpacity, Text} from 'react-native';
import {Rating} from 'react-native-elements';

import styles from './styles';

// Rating used here both for stars indicator and rating average
const Hotel = ({hotelData}) => {

  const defaultImg = 'https://cdn.icon-icons.com/icons2/2490/PNG/512/hotel_icon_150155.png';

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
            setImageIndex(imageIndex + 1);
            setAvatarImg(hotelData.gallery[imageIndex])
            if (imageIndex === hotelData.gallery.length-1) {
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
        <View>
          <Text style={styles.details}>test</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Hotel;

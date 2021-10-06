import React, {useState} from 'react';
import {View, Linking, Text, TouchableOpacity} from 'react-native';
import {Rating, PricingCard, Overlay, Icon} from 'react-native-elements';
import Gallery from 'react-native-image-gallery';

import styles from './styles';

const currencies = {
  EUR: '€',
  USD: '$',
};

const ItemDetails = ({rating, location, checks, contact, images, price}) => {
  const [isGalleryOpen, setIsOpenGallery] = useState(false);

  const details = [
    `Address: ${location.address}, ${location.city}`,
    `Checkin: ${checks.in.from}-${checks.in.to}`,
    `Checkout: ${checks.out.from}-${checks.out.to}`,
  ];

  const imgs = images.map(img => {
    return {source: {uri: img}};
  });

  return (
    <View style={styles.container}>
      <Text style={styles.rating}>{rating} /10</Text>

      <Rating
        readonly
        imageSize={30}
        fractions={1}
        ratingCount={5}
        startingValue={(rating / 2).toFixed(1)}
      />
      <PricingCard
        title={'Price:'}
        price={`${price.qty} ${currencies[price.currency]}`}
        info={details}
        button={{
          title: 'Gallery',
          disabled: !imgs.length,
          onPress: () => setIsOpenGallery(true),
        }}
      />
      <View style={styles.contact}>
        <Text style={styles.contactTitle}>Contact: </Text>
        <View style={styles.contactRow}>
          <Text>Email: </Text>
          <Text onPress={() => Linking.openURL(`mailto:${contact.email}`)}>
            {contact.email}
          </Text>
        </View>
        <View style={styles.contactRow}>
          <Text>Phone Number: </Text>
          <Text onPress={() => Linking.openURL(`tel:${contact.phoneNumber}`)}>
            {contact.phoneNumber}
          </Text>
        </View>
      </View>

      <Overlay
        isVisible={isGalleryOpen && imgs.length > 0}
        onBackdropPress={() => setIsOpenGallery(false)}
        overlayStyle={styles.overlay}>
        <TouchableOpacity onPress={() => setIsOpenGallery(false)}>
          <Icon style={{alignSelf: 'flex-end'}} name="close" color="white" />
        </TouchableOpacity>
        <Gallery images={imgs} />
      </Overlay>
    </View>
  );
};

export default ItemDetails;

import React, {useState} from 'react';
import {View, Linking, Text} from 'react-native';
import {Rating, PricingCard} from 'react-native-elements';

import styles from './styles';

const ItemDetails = ({rating, location, checks, contact, images, price}) => {
  const details = [
    `Checkin: ${checks.in.from}-${checks.in.to}`,
    `Checkout: ${checks.out.from}-${checks.out.to}`,
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.rating}>{rating} /10</Text>
      <Rating
        imageSize={30}
        fractions={1}
        ratingCount={5}
        startingValue={(rating / 2).toFixed(1)}
      />
      <PricingCard
        color="#4f9deb"
        title={`${location.address}, ${location.city}`}
        price={`${price.qty} ${price.currency}`}
        info={details}
        button={{title: 'Gallery'}}
      />
      <View style={styles.contact}>
        <View style={styles.email}>
          <Text>Email: </Text>
          <Text onPress={() => Linking.openURL(`mailto:${contact.email}`)}>
            {contact.email}
          </Text>
        </View>
        <View style={styles.phone}>
          <Text>Phone Number: </Text>
          <Text onPress={() => Linking.openURL(`tel:${contact.phoneNumber}`)}>
            {contact.phoneNumber}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ItemDetails;

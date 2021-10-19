import React from 'react';
import {View, Text} from 'react-native';

import {startCase} from 'lodash';

import styles from './styles.js'

const Flight = ({data}) => {
  const details = [
    'airline',
    'arrivalAirport',
    'arrivalTime',
    'departureAirport',
    'departureTime',
  ];

  return (
    <View>
      {details.map(detail => {
        return (
          <View key={detail.id} style={styles.row}>
            <Text>{startCase(detail)}: </Text>
            <Text>{data[detail]}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Flight;

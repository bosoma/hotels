import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';

import HotelsList from 'root/src/components/hotelsList';
import Filter from 'root/src/components/filter';
import {getHotels} from 'root/src/api';

import styles from './styles';

// Literal object keys that are in hotel, but it could be some intermediate mapping if necessary
const filterOptions = ['name', 'city', 'stars', 'price'];


const Home = () => {
  const [filteredElements, setFilteredElements] = useState([]);

  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    if (!hotels.length) {
      getHotels()
        .then(response => response.json())
        .then(result => {
          if (isMounted) {
            setHotels(result);
            setFilteredElements(result);
            setLoading(false);
          }
        })
        .catch(error => {
          console.error(error);
        });
    }
    return () => {
      isMounted = false;
    };
  }, []);

  const updateData = (newValue, activeFilterOptions) => {
    if (!newValue) {
      setFilteredElements(hotels);
    } else {
      const fieldsToObserve = !activeFilterOptions.length
        ? filterOptions
        : filterOptions.filter((o, i) => activeFilterOptions.includes(i));

      const filtered = hotels.filter(hotel => {
        const flattenedObj = {...hotel, ...hotel.location};
        const match = fieldsToObserve.find(key => {
          const fieldValue = String(flattenedObj[key]);
          return fieldValue.toLowerCase().includes(newValue);
        });
        return match !== undefined;
      });
      setFilteredElements(filtered);
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={55} />
      </View>
    );
  }

  return (
    <View style={styles.bg}>
      <HotelsList
        hotels={filteredElements}
        listHeaderComponent={
          <Filter filterOptions={filterOptions} updateData={updateData} />
        }
      />
    </View>
  );
};

export default Home;

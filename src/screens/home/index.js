import React, {useState, useEffect} from 'react';
import {View, ActivityIndicator} from 'react-native';

import HotelsList from 'root/src/components/hotelsList';
import Filter from 'root/src/components/filter';
import {getHotels, getHotelsWithFlights} from 'root/src/api';

import styles from './styles';

// Literal object keys that are in hotel, but it could be some intermediate mapping if necessary
const filterOptions = ['name', 'city', 'stars', 'price'];


const Home = () => {
  const [filteredElements, setFilteredElements] = useState([]);

  const [listItems, setListItems] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log('loading', loading)

  useEffect(() => {
    let isMounted = true;
    if (!listItems.length) {
      getHotels()
        .then(response => response.json())
        .then(result => {
          const finalElements = result.holidayPackages || result;
          if (isMounted) {
            setListItems(finalElements);
            setFilteredElements(finalElements);
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
      setFilteredElements(listItems);
    } else {
      const fieldsToObserve = !activeFilterOptions.length
        ? filterOptions
        : filterOptions.filter((o, i) => activeFilterOptions.includes(i));

      const filtered = listItems.filter(hotel => {
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
        listItems={filteredElements}
        listHeaderComponent={
          <Filter filterOptions={filterOptions} updateData={updateData} />
        }
      />
    </View>
  );
};

export default Home;

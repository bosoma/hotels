import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, ActivityIndicator} from 'react-native';
import {SearchBar, ButtonGroup} from 'react-native-elements';
import {startCase} from 'lodash';
import HotelsList from 'root/src/components/hotelsList';
import {getHotels} from 'root/src/api';

import styles from './styles';

const filterOptions = ['name', 'city', 'stars', 'price'];

const Home = () => {
  const [filteredElements, setFilteredElements] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [activeFilterOptions, setActiveFilterOptions] = useState([]);
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

  const updateData = newValue => {
    setSearchValue(newValue);
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

  useEffect(() => {
    updateData(searchValue);
  }, [activeFilterOptions]);

  const buttons = filterOptions.map(el => {
    return {element: () => <Text>{startCase(el)}</Text>};
  });

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size={55} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.bg}>
      <>
        <SearchBar
          placeholder="Search.."
          onChangeText={val => updateData(val)}
          value={searchValue}
          lightTheme
          searchIcon={false}
        />
        <ButtonGroup
          onPress={setActiveFilterOptions}
          selectMultiple
          selectedIndexes={activeFilterOptions}
          buttons={buttons}
        />
      </>
      <HotelsList hotels={filteredElements} />
    </SafeAreaView>
  );
};

export default Home;

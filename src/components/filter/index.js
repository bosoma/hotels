import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, ActivityIndicator} from 'react-native';
import {SearchBar, ButtonGroup} from 'react-native-elements';
import {startCase} from 'lodash';
import HotelsList from 'root/src/components/hotelsList';
import {getHotels} from 'root/src/api';

//import styles from './styles';

const Filter = ({updateData, filterOptions}) => {
  const [searchValue, setSearchValue] = useState('');
  const [activeFilterOptions, setActiveFilterOptions] = useState([]);

  useEffect(() => {
    updateData(searchValue, activeFilterOptions);
  }, [activeFilterOptions]);

  const buttons = filterOptions.map(el => {
    return {element: () => <Text>{startCase(el)}</Text>};
  });

  return (
    <>
      <SearchBar
        placeholder="Search.."
        onChangeText={val => {
          setSearchValue(val);
          updateData(val, activeFilterOptions);
        }}
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
  );
};

export default Filter;

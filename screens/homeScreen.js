import React, { useState, useLayoutEffect } from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { Picker } from '@react-native-community/picker';
import { useSelector } from 'react-redux';
import RenderdResturant from '../components/RenderdResturant';
import device from '../constants/Layout';

const HomeScreen = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState('Select Locality');
  const resturants = useSelector((state) => state.resturantsReducer.resturants);

  //Extracted the location Key from each resturant object
  const resturantArrayKeys = resturants.map((item) => item.location);

  //I filterd only unique values for resturantArrayKeys
  const filterdResturantArray = [...new Set(resturantArrayKeys)];

  const resturantTODisplay = resturants.filter(
    (resturant) => resturant.location == selectedValue
  );

  useLayoutEffect(() => {
    navigation.setOptions({ title: `${selectedValue}` });
  }, [selectedValue]);

  return (
    <SafeAreaView style={styles.container}>
      <Picker
        selectedValue={selectedValue}
        style={{ height: 50, width: 200 }}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label='Select Locality' value='Select Locality' />
        {filterdResturantArray.map((rest, index) => {
          return <Picker.Item key={index} label={rest} value={rest} />;
        })}
      </Picker>

      <FlatList
        data={resturantTODisplay}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <RenderdResturant navigation={navigation} item={item} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  picker: {
    width: device.window.width / 1.7,
    margin: 10,
    borderColor: 'black',
  },
});

export default HomeScreen;

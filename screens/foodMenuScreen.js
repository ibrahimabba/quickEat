import React from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import RenderdFoodItem from '../components/RenderdFoodItems';

const foodMenuScreen = ({ navigation, route }) => {
  const { itemId } = route.params;
  const resturants = useSelector((state) => state.resturantsReducer.resturants);

  const resturant = resturants.find((rest) => rest.id == itemId);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={resturant.foodMenus}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <RenderdFoodItem navigation={navigation} item={item} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default foodMenuScreen;

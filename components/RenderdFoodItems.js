import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Card from './Card';
import device from '../constants/Layout';
import color from '../constants/Colors';
import NumberContainer from '../components/NumberContainer';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { addOrder } from '../store/actions/resturantActions';
const RenderdFoodItem = ({ item, navigation }) => {
  const [contityView, setcontityView] = useState(false);
  const [contity, setContity] = useState(1);
  const dispatch = useDispatch();
  return (
    <Card style={styles.card}>
      <Image source={item.otherImages.image2} style={styles.image} />
      <View style={styles.infoContainer}>
        <View style={styles.menuName}>
          <Text style={styles.menuText}>{item.menuName}</Text>
          <Text style={styles.priceText}>₦{item.price}</Text>
        </View>
        {!contityView && (
          <View style={styles.order}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                setcontityView((prevState) => !prevState);
              }}
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>Order</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {contityView && (
        <View>
          <Text>Select Quantity:</Text>
          <View style={styles.contityView}>
            <View style={styles.increment}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => {
                  setContity((prevState) => {
                    if (prevState == 1) return prevState;
                    return (prevState = prevState - 1);
                  });
                }}
                style={{ marginHorizontal: 10 }}
              >
                <AntDesign name='minuscircle' size={24} color='#cd853f' />
              </TouchableOpacity>
              <NumberContainer>{contity}</NumberContainer>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => {
                  setContity((prevState) => (prevState = prevState + 1));
                }}
                style={{ marginHorizontal: 10 }}
              >
                <AntDesign name='pluscircle' size={24} color='#cd853f' />
              </TouchableOpacity>
            </View>
            <View style={{ marginHorizontal: 14 }}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => {
                  dispatch(addOrder(item, contity));
                }}
              >
                <View style={styles.button2}>
                  <Text style={styles.buttonText}>Order Now</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
  },
  image: {
    width: device.window.width / 1.1,
    height: device.window.height / 2.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuName: {
    marginHorizontal: 5,
    marginVertical: 10,
  },
  menuText: {
    fontSize: 18,
    //fontFamily: 'space-mono'
  },
  priceText: {
    marginRight: 0,
    color: color.defaultColor,
  },
  order: {
    marginRight: 10,
    width: 130,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.defaultColor,
    padding: 2,
    borderRadius: 14,
    width: 120,
  },
  button2: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    padding: 2,
    borderRadius: 14,
    width: 120,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  contityView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  increment: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default RenderdFoodItem;

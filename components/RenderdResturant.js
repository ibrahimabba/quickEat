import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';
import Card from './Card';
import device from '../constants/Layout';
import { Ionicons, AntDesign } from '@expo/vector-icons';

const RenderdResturant = ({ item, navigation }) => {
  return (
    <Card style={styles.card}>
      <TouchableOpacity
        style={styles.touchable}
        activeOpacity={0.9}
        onPress={() => {
          navigation.navigate('MenuScreen', {
            titleName: `${item.restaurantName}`,
            itemId: item.id,
          });
        }}
      >
        <ImageBackground source={item.previewImage} style={styles.image}>
          <Text>Closed</Text>
        </ImageBackground>
      </TouchableOpacity>
      <View style={styles.infoContainer}>
        <View style={styles.menuName}>
          <Text style={styles.menuText}>{item.restaurantName}</Text>
          <View style={{ flexDirection: 'row', margin: 5 }}>
            <AntDesign name='clockcircleo' size={18} color='black' />
            <Text style={{ fontSize: 14, marginHorizontal: 5 }}>
              {item.deliveryTime}
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>
          <AntDesign name='star' size={16} color='orange' />
          <Text style={{ fontSize: 14, marginHorizontal: 5 }}>
            {item.ratings}
          </Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: device.window.width / 1.1,
    height: device.window.height / 2.5,
    marginVertical: 10,
  },
  image: {
    flex: 1,
    height: '95%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchable: {
    //flex: 1,
    height: '75%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
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
  },
  menuText: {
    fontSize: 18,
    //fontFamily: 'space-mono'
  },
});

export default RenderdResturant;

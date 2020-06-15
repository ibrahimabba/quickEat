import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import Card from '../components/Card';

const OrderItem = ({ item, quantity, date }) => {
  return (
    <Card style={styles.orderItem}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>{item.menuName}</Text>
        {/* <Text style={styles.totalAmount}>${item.price}</Text> */}
        <Text style={styles.date}>{date}</Text>
      </View>
      <View style={styles.summary}>
        <Text style={styles.date}>Quantity: {quantity} </Text>
        <Text style={styles.totalAmount}>₦{item.price * quantity}</Text>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  orderItem: {
    margin: 20,
    padding: 10,
    alignItems: 'center',
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  totalAmount: {
    fontFamily: 'open-sans-bold',
    fontSize: 16,
  },
  date: {
    fontSize: 12,
    fontFamily: 'open-sans',
    color: '#888',
  },
  detailItems: {
    width: '100%',
  },
});

export default OrderItem;

import React from 'react';
import { Button, View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import StackNavigator from './stackNavigator';
import Colors from '../constants/Colors';
import OrderStackNavigator from './orderStackNavigator';
const Drawer = createDrawerNavigator();

const DrawerNavigator = (props) => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => (
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props} />
          <View style={{ flex: 1, padding: 50 }}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => {}}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Sign In</Text>
              </View>
            </TouchableOpacity>
          </View>
        </DrawerContentScrollView>
      )}
      screenOptions={({ route }) => ({
        drawerIcon: () => {
          let iconName;

          if (route.name === 'Orders') {
            iconName = 'md-list';
          } else if (route.name === 'Home') {
            iconName = 'md-home';
          }
          return (
            <Ionicons name={iconName} size={25} color={Colors.defaultColor} />
          );
        },
      })}
    >
      <Drawer.Screen name='Home' component={StackNavigator} />
      <Drawer.Screen name='Orders' component={OrderStackNavigator} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.defaultColor,
    padding: 2,
    borderRadius: 14,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default DrawerNavigator;

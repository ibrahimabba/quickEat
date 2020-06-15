import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OrderScreen from '../screens/orderScreen';
import myColors from '../constants/Colors';
import CustomHeaderButton from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
const Stack = createStackNavigator();

const OrderStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: myColors.defaultColor,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name='Welcome'
        component={OrderScreen}
        options={({ route, navigation }) => ({
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title='Menu'
                iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                onPress={() => {
                  navigation.toggleDrawer();
                }}
              />
            </HeaderButtons>
          ),
          title: 'Your Orders',
        })}
      />
    </Stack.Navigator>
  );
};

export default OrderStackNavigator;

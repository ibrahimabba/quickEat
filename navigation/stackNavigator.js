import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/homeScreen';
import foodMenuScreen from '../screens/foodMenuScreen';
import myColors from '../constants/Colors';
import CustomHeaderButton from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
const Stack = createStackNavigator();

const StackNavigator = () => {
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
        component={HomeScreen}
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
          title: 'Welcome to quickEat',
        })}
      />
      <Stack.Screen
        name='MenuScreen'
        component={foodMenuScreen}
        options={({ route }) => {
          const { titleName } = route.params;
          return { title: `${titleName}` };
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

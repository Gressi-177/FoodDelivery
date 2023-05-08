import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import OrderScreen from '../screens/OrderScreen';
import MessageScreen from '../screens/MessageScreen';
import EWalletScreen from '../screens/WalletScreen';
import ProfileScreen from '../screens/ProfileScreen';
import color from '../contains/color';

const Tab = createBottomTabNavigator();

function BottomNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Order') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Message') {
            iconName = focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline';
          } else if (route.name === 'EWallet') {
            iconName = focused ? 'wallet' : 'wallet-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: color.primary500,
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
      <Tab.Screen options={{ headerShown: false }} name="Order" component={OrderScreen} />
      <Tab.Screen options={{ headerShown: false }} name="Message" component={MessageScreen} />
      <Tab.Screen options={{ headerShown: false }} name="EWallet" component={EWalletScreen} />
      <Tab.Screen options={{ headerShown: false }} name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default BottomNavigation;

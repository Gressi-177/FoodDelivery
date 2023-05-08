import React from 'react';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import HomeAuthScreen from '../screens/auth/HomeAuthScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';

const Stack = createStackNavigator();

const TransitionScreenOptions = {
  ...TransitionPresets.SlideFromRightIOS,
  headerShown: false,
};

export default AuthNavigator = () => (
  <Stack.Navigator screenOptions={TransitionScreenOptions}>
    <Stack.Screen
      options={{headerShown: false}}
      name="Splash"
      component={SplashScreen}
    />
    <Stack.Screen
      options={{headerShown: false}}
      name="HomeAuth"
      component={HomeAuthScreen}
    />
    <Stack.Screen
      options={{headerShown: false}}
      name="Login"
      component={LoginScreen}
    />
    <Stack.Screen
      options={{headerShown: false}}
      name="Register"
      component={RegisterScreen}
    />
  </Stack.Navigator>
);

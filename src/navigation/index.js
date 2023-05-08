import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

// import navigators
import auth from '@react-native-firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';

// firebase auth
import { setUser } from '../redux/slices/user';

function AppContainer() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const { user } = useSelector((state) => state.user);

  const { loading } = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  // Handle user state changes
  function onAuthStateChanged(user) {
    if (user) {
      const { displayName, email, photoURL, uid } = user;

      dispatch(
        setUser({
          displayName,
          email,
          photoURL,
          uid,
        })
      );
    } else {
      dispatch(setUser(user));
    }

    if (initializing) setInitializing(false);
  }

  useEffect(
    () => auth().onAuthStateChanged(onAuthStateChanged), // unsubscribe on unmount
    []
  );

  if (initializing) return null;

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default AppContainer;

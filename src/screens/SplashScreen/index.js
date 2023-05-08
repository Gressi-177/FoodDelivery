import {View, Image} from 'react-native';
import React, {useEffect} from 'react';
import styles from './style';
import LottieView from 'lottie-react-native';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';

const SplashScreen = () => {
  const navigation = useNavigation();
  const {user} = useSelector(state => state.user);
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: user ? 'Home' : 'HomeAuth'}],
        }),
      );
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Image style={{width: 210}} source={require('../../assets/splash.png')} />
      <LottieView
        source={require('../../assets/lottie/loading.json')}
        autoPlay
        loop={true}
        style={styles.loading}
      />
    </View>
  );
};

export default SplashScreen;

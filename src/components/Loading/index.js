import React from 'react';
import LottieView from 'lottie-react-native';
import {View, StyleSheet} from 'react-native';

const Loading = () => {
  return (
    <View
      style={[
        StyleSheet.absoluteFillObject,
        {
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.3)',
        },
      ]}>
      <LottieView
        source={require('../../assets/lottie/loading2.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default Loading;

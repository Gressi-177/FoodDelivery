import { View, Text } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import color from '../../contains/color';

function Empty() {
  return (
    <View style={{ flex: 1, alignItems: 'center', backgroundColor: color.white }}>
      <LottieView
        source={require('../../assets/lottie/empty.json')}
        autoPlay
        loop
        style={{ width: 280, marginBottom: 40, marginTop: 40 }}
      />
      <Text style={{ fontSize: 20, fontWeight: 700, color: color['grey-scale-900'] }}>Empty</Text>
      <Text style={{ marginTop: 8, fontSize: 16 }}>
        You don't have any foods in cart at this time
      </Text>
    </View>
  );
}

export default Empty;

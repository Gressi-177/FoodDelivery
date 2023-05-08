import {View, Text} from 'react-native';
import React from 'react';
import styles from './style';
const Divider = ({text, style}) => {
  return (
    <View style={[styles.dividerContainer, style]}>
      <View style={styles.divider}></View>
      <Text style={styles.dividerText}>{text}</Text>
      <View style={styles.divider}></View>
    </View>
  );
};

export default Divider;

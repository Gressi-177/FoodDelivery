import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import color from '../../../contains/color';

const defaultHandle = () => {
  return;
};

const DefaultButton = ({
  bgColor = color.primary500,
  titleColor = color.white,
  rounded = 16,
  title = 'Button',
  onPress = defaultHandle,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {backgroundColor: bgColor, borderRadius: rounded},
      ]}
      onPress={onPress}
      activeOpacity={0.6}
      {...props}>
      <Text style={[styles.tittle, {color: titleColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default DefaultButton;

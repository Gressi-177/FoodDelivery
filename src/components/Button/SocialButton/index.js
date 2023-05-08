import {Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './style';
import color from '../../../contains/color';

const SocialButton = ({
  image,
  dark = false,
  title = 'SocialButton',
  action,
}) => {
  const {bgColor, textColor, borderColor} = {
    bgColor: dark ? color['dark-2'] : color.white,
    textColor: dark ? color.white : color['grey-scale-900'],
    borderColor: dark ? color['dark-3'] : color['grey-scale-200'],
  };

  return (
    <TouchableOpacity
      style={[
        styles.container,
        {backgroundColor: bgColor, borderColor: borderColor},
      ]}
      onPress={action}>
      {image && <Image style={styles.icon} source={image} />}

      <Text style={[styles.title, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SocialButton;

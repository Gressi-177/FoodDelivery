import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import React from 'react';
import color from '../../contains/color';

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Special Offers</Text>
      <TouchableOpacity>
        <Text style={styles.button}>See All</Text>
      </TouchableOpacity>
    </View>
  );
}

function Offers() {
  return (
    <View style={styles.container}>
      <Header />
      <Image
        style={styles.image}
        source={require('../../assets/image/spicy-food-landscape-banner.jpg')}
      />
    </View>
  );
}

export default Offers;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 700,
    color: color['grey-scale-900'],
    flex: 1,
  },
  button: {
    fontSize: 16,
    fontWeight: 700,
    color: color.primary500,
  },
  image: {
    width: '100%',
    height: 160,
    marginTop: 16,
    borderRadius: 36,
  },
});

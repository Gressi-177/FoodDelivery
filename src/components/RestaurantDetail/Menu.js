import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { re } from '@babel/core/lib/vendor/import-meta-resolve';
import color from '../../contains/color';

function Menu({ basket }) {
  const navigation = useNavigation();
  const { restaurant } = useSelector((state) => state.restaurant);

  useEffect(() => {
    console.log('menu', basket);
  }, []);
  const handleCheckOrder = (id) => basket.find((i) => i.id === id);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      {restaurant && (
        <View style={styles.list}>
          {restaurant.menu.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[styles.item, { borderColor: color.primary, borderWidth: 2 }]}
              onPress={() =>
                navigation.navigate('AddItem', {
                  idRes: restaurant.id,
                  nameRes: restaurant.name,
                  imageRes: restaurant.imageUrl,
                  idItem: item.id,
                })
              }
            >
              <Image style={styles.image} source={{ uri: item.imageUrl }} />
              <View style={styles.infoWrap}>
                <Text style={styles.name} numberOfLines={1}>
                  {item.name}
                </Text>
                <Text style={styles.price}>${item.price}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

export default Menu;

const styles = StyleSheet.create({
  container: { marginVertical: 16 },
  title: {
    fontSize: 24,
    fontWeight: 700,
    color: color['grey-scale-900'],
  },
  list: {
    marginTop: 20,
    rowGap: 20,
  },
  item: {
    flexDirection: 'row',
    padding: 14,
    marginHorizontal: 4,
    borderRadius: 16,
    backgroundColor: color.white,
    shadowColor: '#04060F',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    elevation: 4,
  },

  image: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    borderRadius: 16,
  },
  infoWrap: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
    paddingVertical: 10,
    rowGap: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 700,
    color: color['grey-scale-900'],
  },
  price: {
    fontSize: 18,
    color: color.primary500,
    fontWeight: 700,
  },
});

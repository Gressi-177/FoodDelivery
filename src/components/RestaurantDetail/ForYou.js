import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import color from '../../contains/color';

const DATA = [
  {
    image: require('../../assets/image/food.jpg'),
    name: 'First Item hello hello',
  },
  {
    image: require('../../assets/image/food2.jpg'),
    name: 'Raspberries cake',
  },
  {
    image: require('../../assets/image/food3.jpg'),
    name: 'Vegan salad bowl',
  },
];

function Item({ image, name, ...props }) {
  return (
    <TouchableOpacity style={styles.item} {...props}>
      <Image style={styles.image} source={image} />
      <View style={styles.infoWrap}>
        <Text style={styles.name} numberOfLines={2}>
          {name}
        </Text>
        <Text style={styles.price}>$2.00</Text>
      </View>
    </TouchableOpacity>
  );
}

function ForYou({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ForYou</Text>
      <View style={styles.list}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {DATA.map((item, index) => (
            <Item
              key={index}
              image={item.image}
              name={item.name}
              onPress={() => navigation.push('AddItem')}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

export default ForYou;

const styles = StyleSheet.create({
  container: { marginTop: 8 },
  title: {
    fontSize: 24,
    fontWeight: 700,
    color: color['grey-scale-900'],
  },
  list: {
    marginTop: 8,
  },
  item: {
    flexDirection: 'column',
    padding: 14,
    width: 180,
    marginHorizontal: 8,
    marginVertical: 10,
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
    width: '100%',
    height: 140,
    resizeMode: 'contain',
    borderRadius: 16,
  },
  infoWrap: {
    flex: 1,
    marginTop: 12,
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
    marginTop: 6,
  },
});

import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import firestore from '@react-native-firebase/firestore';
import color from '../../contains/color';

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Discount Guaranteed! 👌</Text>
      <TouchableOpacity>
        <Text style={styles.button}>See All</Text>
      </TouchableOpacity>
    </View>
  );
}

const DATA = [
  {
    image: require('../../assets/image/food.jpg'),
    name: 'First Item',
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

function ListItem() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const unsubscribe = firestore()
      .collection('restaurant')
      .onSnapshot((snapshot) => {
        const res = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        const data = [];
        res.map((item) => {
          data.push(...item.menu);
        });
        data.sort(() => Math.random() - 0.5);
        const randomData = data.slice(0, 3);
        setData(randomData);
      });
    // cleanup function
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <View style={styles.list}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <Image style={styles.image} source={{ uri: item.imageUrl }} />
            <Text style={styles.name} numberOfLines={1}>
              {item.name}
            </Text>
            <View style={styles.info}>
              <Text style={styles.distance}>1.5km</Text>
              <Ionicons name="star" size={14} color="#00FF00" />
              <Text style={styles.point}>4.8</Text>
              <Text style={styles.sell}>(1.2k)</Text>
            </View>
            <View style={styles.priceInfo}>
              <Text style={styles.price}>${item.price}.00</Text>
              <Ionicons
                style={{ transform: [{ rotate: '90deg' }] }}
                name="md-remove-outline"
                size={16}
              />
              <MaterialIcons name="delivery-dining" size={20} />
              <Text style={styles.priceShip}>$2.00</Text>
              <TouchableOpacity>
                <Ionicons name="heart-outline" size={24} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

function Discount() {
  return (
    <View style={styles.container}>
      <Header />
      <ListItem />
    </View>
  );
}

export default Discount;

const styles = StyleSheet.create({
  container: { marginTop: 14 },
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
  list: {
    marginTop: 16,
  },
  item: {
    width: 220,
    padding: 14,
    marginHorizontal: 8,
    marginTop: 6,
    marginBottom: 10,
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
    width: 192,
    height: 192,
    resizeMode: 'contain',
    borderRadius: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 700,
    color: color['grey-scale-900'],
    marginTop: 8,
  },
  info: {
    flexDirection: 'row',
    height: 16,
    alignItems: 'center',
    columnGap: 6,
    marginTop: 8,
  },
  distance: {
    paddingRight: 6,
    borderRightWidth: 1,
    borderColor: color['grey-scale-700'],
    fontSize: 12,
  },
  point: {
    fontSize: 12,
  },
  sell: {
    fontSize: 12,
  },
  priceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 14,
  },
  price: {
    fontSize: 20,
    fontWeight: 700,
    color: color.primary500,
  },
  priceShip: {
    flex: 1,
    marginLeft: 6,
    fontSize: 12,
    fontWeight: 500,
  },
});

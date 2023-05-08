import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import firestore from '@react-native-firebase/firestore';
import color from '../../contains/color';
import { addItemOnFavorite, removeItemOnFavorite } from '../../utils/favorite';
import FavoriteButton from '../Button/FavoriteButton';

const DataListTab = [
  {
    image: require('../../assets/icon/check.png'),
    category: 'All',
  },
  {
    image: require('../../assets/categories/Icon_pizza.png'),
    category: 'Pizza',
  },
  {
    image: require('../../assets/categories/Icon_burger.png'),
    category: 'Hamburger',
  },
  {
    image: require('../../assets/categories/Icon_beer.png'),
    category: 'Drink',
  },
];

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Recommended For You 😍</Text>
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

function Restaurant({ restaurant, ...props }) {
  return (
    <TouchableOpacity style={styles.item} {...props}>
      <Image style={styles.image} source={{ uri: restaurant.imageUrl }} />
      <View style={styles.infoWrap}>
        <Text style={styles.name} numberOfLines={1}>
          {restaurant.name}
        </Text>
        <View style={styles.info}>
          <Text style={styles.distance}>1.5km</Text>
          <Ionicons name="star" size={14} color="#00FF00" />
          <Text style={styles.point}>4.8</Text>
          <Text style={styles.sell}>(1.2k)</Text>
        </View>
        <View style={styles.priceInfo}>
          <MaterialIcons name="delivery-dining" size={20} color={color.primary500} />
          <Text style={styles.priceShip}>$2.00</Text>
          <FavoriteButton restaurant={restaurant} />
        </View>
      </View>
    </TouchableOpacity>
  );
}

function Recommended({ navigation }) {
  const [status, setStatus] = useState('All');
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('restaurant')
      .onSnapshot((snapshot) => {
        const newRestaurants = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRestaurants(newRestaurants);
      });
    // cleanup function
    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        style={styles.listTab}
        data={DataListTab}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => setStatus(item.category)}
            style={styles.btnTab(status == item.category)}
          >
            <Image style={styles.imageTab} source={item.image} />
            <Text style={styles.textTab(status == item.category)}>{item.category}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.foodList}>
        {restaurants.map((restaurant) => (
          <Restaurant
            key={restaurant.id}
            restaurant={restaurant}
            onPress={() =>
              navigation.navigate('RestaurantDetail', {
                restaurantID: restaurant.id,
              })
            }
          />
        ))}
      </View>
    </View>
  );
}

export default Recommended;

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    paddingBottom: 100,
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
  listTab: {
    marginTop: 24,
  },
  btnTab: (isActive) => ({
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderColor: color.primary,
    borderWidth: isActive ? 0 : 1,
    borderRadius: 100,
    marginRight: 12,
    backgroundColor: isActive ? color.primary500 : color.white,
  }),
  imageTab: {
    width: 22,
    height: 22,
    marginRight: 6,
  },
  textTab: (isActive) => ({
    color: isActive ? color.white : color.primary500,
    fontWeight: 600,
    fontSize: 16,
  }),
  foodList: {
    marginTop: 24,
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
    width: 100,
    height: 100,
    resizeMode: 'contain',
    borderRadius: 16,
  },
  infoWrap: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 700,
    color: color['grey-scale-900'],
  },
  info: {
    flexDirection: 'row',
    height: 16,
    alignItems: 'center',
    columnGap: 6,
  },
  distance: {
    paddingRight: 6,
    borderRightWidth: 1,
    borderColor: color['grey-scale-700'],
    fontSize: 14,
  },
  point: {
    fontSize: 14,
  },
  sell: {
    fontSize: 14,
  },
  priceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 20,
    fontWeight: 700,
    color: color.primary500,
  },
  priceShip: {
    flex: 1,
    marginLeft: 6,
    fontSize: 14,
    fontWeight: 500,
  },
});

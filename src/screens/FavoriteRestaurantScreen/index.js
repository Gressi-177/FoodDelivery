import { View, Text, Image, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import color from '../../contains/color';
import styles from './style';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FavoriteButton from '../../components/Button/FavoriteButton';
import { useNavigation } from '@react-navigation/native';

function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Ionicons name="arrow-back" size={28} onPress={() => navigation.goBack()} />
      <Text
        style={{
          flex: 1,
          marginLeft: 16,
          fontWeight: 700,
          color: color['grey-scale-900'],
          fontSize: 20,
        }}
      >
        My Favorite Restaurants
      </Text>
      <Ionicons name="search-outline" size={28} />
    </View>
  );
}

function Restaurant({ restaurant }) {
  return (
    <View style={styles.item}>
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
          <FavoriteButton restaurant={restaurant} like={true} />
        </View>
      </View>
    </View>
  );
}

const FavoriteRestaurantScreen = () => {
  const [listFavorite, setListFavorite] = useState([]);
  useEffect(() => {
    const getListData = async () => {
      try {
        const { currentUser } = auth();
        const key = `favorite${currentUser.uid}`;
        const data = await AsyncStorage.getItem(key);
        if (data !== null) {
          const parsedData = JSON.parse(data);
          setListFavorite(parsedData);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getListData();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView
        style={{
          paddingHorizontal: 16,
          flex: 1,
          paddingTop: 16,
        }}
      >
        {listFavorite.map((restaurant) => (
          <Restaurant restaurant={restaurant} key={restaurant.id} />
        ))}
      </ScrollView>
    </View>
  );
};

export default FavoriteRestaurantScreen;

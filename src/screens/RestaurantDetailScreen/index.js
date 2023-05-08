import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRoute } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import styles from './style';
import Header from '../../components/RestaurantDetail/Header';
import color from '../../contains/color';
import ForYou from '../../components/RestaurantDetail/ForYou';
import { setRestaurant } from '../../redux/slices/restaurant';

const Tag = () => (
  <View style={styles.tag}>
    <Text style={styles.tagText}>NEW</Text>
  </View>
);

function RestaurantDetailScreen({ navigation }) {
  const route = useRoute();
  const { restaurant } = useSelector((state) => state.restaurant);
  const dispatch = useDispatch();
  const { restaurantID } = route.params;
  const { cart } = useSelector((state) => state.cart);
  const [heightBtnOrder, setHeightBtnOrder] = useState(0);

  const [basket, setBasket] = useState([]);

  const handleChangeBasket = async () => {
    const res = cart.find((i) => i.id === restaurantID);
    if (res) await setBasket(res.orders);
  };

  const handleCheckOrder = (id) => {
    if (basket.length !== 0) {
      const item = basket.find((i) => i.id === id);
      if (item) return true;
    }

    return false;
  };

  useEffect(() => {
    firestore()
      .collection('restaurant')
      .doc(restaurantID)
      .get()
      .then((documentSnapshot) => {
        const data = { id: documentSnapshot.id, ...documentSnapshot.data() };
        dispatch(setRestaurant(data));
      });

    handleChangeBasket().catch((err) => console.log(err));
  }, [restaurantID, cart]);

  const handleLayout = (event) => {
    const { height } = event.nativeEvent.layout;
    setHeightBtnOrder(height);
  };

  return (
    restaurant.length !== 0 && (
      <>
        <Header navigation={navigation} />
        <ScrollView
          style={[styles.container, heightBtnOrder > 0 && { marginBottom: heightBtnOrder }]}
        >
          <Image style={styles.image} source={{ uri: restaurant.imageUrl }} />
          <View style={styles.content}>
            <Text style={styles.title}>{restaurant.name}</Text>
            <View style={styles.divider} />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Ionicons name="star" size={24} color={color.primary500} />
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: color['grey-scale-900'],
                  marginHorizontal: 8,
                }}
              >
                4.8
              </Text>
              <Text style={{ fontSize: 14, color: color['grey-scale-700'], flex: 1 }}>
                (4.8k reviews)
              </Text>
              <Ionicons name="chevron-forward" size={24} color={color['grey-scale-900']} />
            </View>
            <View style={styles.divider} />
            <View style={styles.shipInfo}>
              <MaterialCommunityIcons name="map-marker" size={24} color={color.primary500} />
              <View style={{ marginHorizontal: 8, flex: 1 }}>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 700,
                    color: color['grey-scale-900'],
                  }}
                >
                  2.4km
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Text>Delivery Now</Text>
                  <View
                    style={{
                      height: 16,
                      backgroundColor: color['grey-scale-700'],
                      width: 1,
                      marginHorizontal: 8,
                    }}
                  />
                  <MaterialIcons name="delivery-dining" size={20} color={color.primary500} />

                  <Text style={{ marginLeft: 8 }}>$2.00</Text>
                </View>
              </View>
              <Ionicons name="chevron-forward" size={24} color={color['grey-scale-900']} />
            </View>
            <View style={styles.divider} />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <MaterialCommunityIcons
                name="brightness-percent"
                size={24}
                color={color.primary500}
              />
              <Text
                style={{
                  fontWeight: 600,
                  fontSize: 16,
                  color: color['grey-scale-900'],
                  marginLeft: 8,
                  flex: 1,
                }}
              >
                Offers are available
              </Text>
              <Ionicons name="chevron-forward" size={24} color={color['grey-scale-900']} />
            </View>
            <View style={styles.divider} />
            <ForYou navigation={navigation} />
            {/* <Menu basket={basket} /> */}
            <View style={styles.menuContainer}>
              <Text style={styles.menuTitle}>Menu</Text>

              <View style={styles.menuList}>
                {restaurant.menu.map((item) => (
                  <TouchableOpacity
                    key={item.id}
                    style={[
                      styles.menuItem,
                      handleCheckOrder(item.id) && {
                        borderColor: color.primary,
                        borderWidth: 2,
                      },
                    ]}
                    onPress={() =>
                      navigation.navigate('AddItem', {
                        idRes: restaurant.id,
                        nameRes: restaurant.name,
                        imageRes: restaurant.imageUrl,
                        idItem: item.id,
                      })
                    }
                  >
                    <Image style={styles.menuImage} source={{ uri: item.imageUrl }} />
                    <View style={styles.menuInfoWrap}>
                      <Tag />
                      <Text
                        style={[
                          styles.menuName,
                          handleCheckOrder(item.id) && { color: color.primary500 },
                        ]}
                        numberOfLines={1}
                      >
                        {handleCheckOrder(item.id) &&
                          `${basket.find((i) => i.id === item.id).quantity}x  `}
                        {item.name}
                      </Text>
                      <Text style={styles.menuPrice}>${item.price}.00</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </ScrollView>
        {basket.length !== 0 && (
          <View style={styles.btnOrderContainer} onLayout={handleLayout}>
            <TouchableOpacity
              style={styles.btnOrder}
              onPress={() =>
                navigation.navigate('Checkout', {
                  restaurantID,
                  restaurantName: restaurant.name,
                  restaurantImage: restaurant.imageUrl,
                  basket,
                })
              }
            >
              <Text style={styles.textBtn}>
                Basket • {basket.length} items • $
                {basket.reduce((acc, item) => acc + item.price * item.quantity, 0)}.00
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </>
    )
  );
}

export default RestaurantDetailScreen;

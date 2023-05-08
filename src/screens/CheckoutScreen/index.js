import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { useSelector } from 'react-redux';
import styles from './style';

import color from '../../contains/color';
import navigation from '../../navigation';

function Divider() {
  return (
    <View
      style={{
        width: '100%',
        height: 1,
        backgroundColor: color['grey-scale-200'],
        marginVertical: 16,
      }}
    />
  );
}
function Header({ navigation }) {
  return (
    <View style={styles.header}>
      <Ionicons name="arrow-back" size={28} onPress={() => navigation.goBack()} />
      <Text style={styles.titleHeader}>Checkout Orders</Text>
    </View>
  );
}

function DeliverTo() {
  return (
    <View style={styles.deliverContainer}>
      <Text style={{ fontSize: 20, fontWeight: 700, color: color['grey-scale-900'] }}>
        Deliver to
      </Text>
      <Divider style={{ marginVertical: 8 }} />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <View
          style={{
            width: 52,
            height: 52,
            borderRadius: 100,
            backgroundColor: color.transparentGreen,
            padding: 8,
          }}
        >
          <View
            style={{
              backgroundColor: color.primary,
              borderRadius: 100,
              width: '100%',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image source={require('../../assets/icon/Location.png')} />
          </View>
        </View>
        <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 16, fontWeight: 700, color: color['grey-scale-900'] }}>
            Home
          </Text>
          <Text style={{ color: color['grey-scale-700'], fontSize: 14 }}>
            Times Square NYC, Manhattan
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={24} color={color.primary} />
      </View>
    </View>
  );
}

function OrderSumary({ basket, navigation }) {
  return (
    <View style={{ backgroundColor: color.white, borderRadius: 24, marginTop: 20, padding: 20 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 700, color: color['grey-scale-900'] }}>
          Order Summary
        </Text>
        <TouchableOpacity
          style={{
            paddingVertical: 4,
            paddingHorizontal: 12,
            borderColor: color.primary500,
            borderWidth: 2,
            borderRadius: 32,
          }}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ fontSize: 14, color: color.primary500 }}>Add Items</Text>
        </TouchableOpacity>
      </View>
      <View>
        {basket.map((item) => (
          <View key={item.id}>
            <Divider />
            <TouchableOpacity style={[styles.item]}>
              <Image
                style={styles.image}
                source={{
                  uri: item.imageUrl,
                }}
              />
              <View style={styles.infoWrap}>
                <Text style={styles.name} numberOfLines={1}>
                  {item.name}
                </Text>
                <Text style={styles.price}>${item.price}.00</Text>
              </View>
              <View
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  borderColor: color.primary,
                  borderWidth: 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Text style={{ color: color.primary, fontWeight: 700 }}>{item.quantity}x</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}

function Options() {
  return (
    <View style={{ padding: 24, backgroundColor: color.white, borderRadius: 24, marginTop: 20 }}>
      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
        <MaterialIcons name="payment" size={24} color={color.primary} />
        <Text style={{ flex: 1, marginLeft: 12, color: color['grey-scale-900'], fontWeight: 500 }}>
          Payment Methods
        </Text>
        <Ionicons name="chevron-forward" size={24} color={color.primary} />
      </TouchableOpacity>
      <Divider />
      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
        <MaterialCommunityIcons name="brightness-percent" size={24} color={color.primary} />
        <Text style={{ flex: 1, marginLeft: 12, color: color['grey-scale-900'], fontWeight: 500 }}>
          Get Discounts
        </Text>
        <Ionicons name="chevron-forward" size={24} color={color.primary} />
      </TouchableOpacity>
    </View>
  );
}

function DetailOrder({ subTotal, deliveryFee }) {
  return (
    <View style={styles.detaiOrder.container}>
      <View style={[styles.detaiOrder.item, { marginBottom: 20 }]}>
        <Text style={styles.detaiOrder.title}>Subtotal</Text>
        <Text style={styles.detaiOrder.price}>${subTotal}.00</Text>
      </View>
      <View style={styles.detaiOrder.item}>
        <Text style={styles.detaiOrder.title}>Delivery Fee</Text>
        <Text style={styles.detaiOrder.price}>${deliveryFee}.00</Text>
      </View>
      <Divider />
      <View style={styles.detaiOrder.item}>
        <Text style={styles.detaiOrder.title}>Total</Text>
        <Text style={styles.detaiOrder.price}>${subTotal + deliveryFee}.00</Text>
      </View>
    </View>
  );
}
function CheckoutScreen() {
  const route = useRoute();
  const { user } = useSelector((state) => state.user);
  const { restaurantID, restaurantName, restaurantImage, basket } = route.params;
  const [heightBtnOrder, setHeightBtnOrder] = useState();

  const handleLayout = (event) => {
    const { height } = event.nativeEvent.layout;

    setHeightBtnOrder(height);
  };
  const navigation = useNavigation();
  const subTotal = basket.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryFee = 2;

  const handleOrder = () => {
    firestore().collection('orders').add({
      userID: user.uid,
      restaurantID,
      restaurantName,
      restaurantImage,
      itemOrder: basket,
      status: 1,
    });
  };
  return (
    <>
      <ScrollView
        style={[styles.container, heightBtnOrder > 0 && { marginBottom: heightBtnOrder }]}
      >
        <Header navigation={navigation} />
        <DeliverTo />
        <OrderSumary basket={basket} navigation={navigation} />
        <Options />
        <DetailOrder subTotal={subTotal} deliveryFee={deliveryFee} />
      </ScrollView>
      <View style={styles.btnOrderContainer} onLayout={handleLayout}>
        <TouchableOpacity onPress={handleOrder} style={styles.btnOrder}>
          <Text style={styles.textBtn}>Place Order - ${subTotal + deliveryFee}.00</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default CheckoutScreen;

import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import color from '../../contains/color';

function ListCart() {
  const { cart } = useSelector((state) => state.cart);

  const totalPriceRes = (item) => {
    let totalPrice = 0;
    console.log(item.orders[0]);
    item.orders.map((p) => (totalPrice += p.price * p.quantity));
    return totalPrice;
  };

  return (
    <ScrollView style={styles.container}>
      {cart.map((item) => (
        <TouchableOpacity style={styles.item} key={item.id}>
          <View style={styles.imageWrap}>
            <Image
              source={{
                uri: item.orders[0].imageUrl,
              }}
              style={[styles.image, { marginRight: 24 }]}
            />

            <Image
              source={{
                uri: item.orders[0].imageUrl,
              }}
              style={[styles.image, { position: 'absolute', top: 0, left: 12 }]}
            />
            <Image
              source={{
                uri: item.orders[0].imageUrl,
              }}
              style={[styles.image, { position: 'absolute', top: 0, left: 24 }]}
            />
          </View>

          <View style={styles.content}>
            <Text style={styles.name} numberOfLines={1}>
              {item.name}
            </Text>
            <Text style={styles.detail}>{item.orders.length} items | 1.5km</Text>
            <Text style={styles.price}>${totalPriceRes(item)}.00</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

export default ListCart;

const styles = StyleSheet.create({
  container: { marginTop: 16, flex: 1 },
  item: {
    backgroundColor: color.white,
    flexDirection: 'row',
    paddingHorizontal: 14,
    paddingVertical: 12,
    borderRadius: 16,
    marginBottom: 16,
  },
  imageWrap: {},
  image: {
    width: 90,
    height: 90,
    borderRadius: 16,
    borderWidth: 4,
    borderColor: color.white,
    overflow: 'hidden',
  },
  content: { marginLeft: 12, justifyContent: 'space-around' },
  name: {
    color: color['grey-scale-900'],
    fontWeight: 700,
    fontSize: 16,
    width: 200,
  },
  detail: {},
  price: {
    color: color.primary,
    fontWeight: 700,
    fontSize: 16,
  },
});

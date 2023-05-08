import { View, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Cart/Header';
import color from '../../contains/color';
import Empty from '../../components/Cart/Empty';
import ListCart from '../../components/Cart/ListCart';
import { getObjData, storeObjData } from '../../utils/storage';
import { addToCart } from '../../redux/slices/cart';

function CartScreen({ navigation }) {
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const saveCartToStorage = (uid, items) => storeObjData(uid, items);

  const loadCartFromStorage = async (uid, dispatch) => {
    const items = getObjData(uid);
    if (items != null) {
      dispatch(addToCart(JSON.parse(await items)));
    }
  };

  // useEffect(() => {
  //   loadCartFromStorage(user.uid, dispatch).then((r) => console.log(cart));
  // }, [user.uid]);
  //
  // useEffect(() => {
  //   saveCartToStorage(user.uid, cart).then((r) => console.log(cart));
  // }, [cart]);

  return (
    <View style={[styles.container, cart.length === 0 && { backgroundColor: color.white }]}>
      <Header navigation={navigation} />
      {cart.length > 0 ? <ListCart /> : <Empty />}
    </View>
  );
}

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
});

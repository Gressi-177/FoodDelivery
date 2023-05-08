import { createSlice } from '@reduxjs/toolkit';
import { stat } from '@babel/core/lib/gensync-utils/fs';

const initialState = {
  cart: [],
  basket: [],
};
export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { idRes, nameRes, imageRes, item } = action.payload;
      const restaurant = state.cart.find((item) => item.id === idRes);
      if (!restaurant) {
        state.cart.push({
          id: idRes,
          name: nameRes,
          image: imageRes,
          orders: [{ ...item }],
        });
      } else {
        const orderExistsInRestaurant = restaurant.orders.findIndex(
          (order) => order.id === item.id
        );
        if (orderExistsInRestaurant !== -1) {
          restaurant.orders[orderExistsInRestaurant].quantity += item.quantity;
        } else {
          restaurant.orders.push({
            ...item,
          });
        }
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;

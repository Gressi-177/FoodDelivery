import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  restaurant: [],
};

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

export const { setRestaurant } = restaurantSlice.actions;
export default restaurantSlice.reducer;

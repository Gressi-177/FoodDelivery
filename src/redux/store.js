import { configureStore } from '@reduxjs/toolkit';
import user from './slices/user';
import loading from './slices/loading';
import cart from './slices/cart';
import restaurant from './slices/restaurant';
import dimensions from './slices/dimensions';

export const store = configureStore({
  reducer: { user, loading, restaurant, cart, dimensions },
});

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  heightBottomBar: 0,
};

export const dimensionSlice = createSlice({
  name: 'dimensions',
  initialState,
  reducers: {
    setHeightBottomBar: (state, action) => {
      state.heightBottomBar = action.payload;
    },
  },
});

export const { setHeightBottomBar } = dimensionSlice.actions;
export default dimensionSlice.reducer;

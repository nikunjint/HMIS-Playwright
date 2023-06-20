// homeDataSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: null,
};

const homeDataSlice = createSlice({
  name: "homeData",
  initialState,
  reducers: {
    updateData: (state, action) => {
      state.loading = true;
      state.data = action.payload;
    },
    setDataLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { updateData, setDataLoading } = homeDataSlice.actions;

export default homeDataSlice.reducer;

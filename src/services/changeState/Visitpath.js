// visitDataSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: [],
};

const visitDataSlice = createSlice({
  name: "visitData",
  initialState,
  reducers: {
    visitupdateData: (state, action) => {
      state.loading = true;
      const newData = [...state.data, ...action.payload];
      state.data = newData.filter(
        (value, index, self) => self.findIndex((v) => v.to === value.to) === index
      );
    },
    deleteDataVisit: (state, action) => {
        const idToDelete = action.payload;
        state.data = state.data.filter((item) => item.to !== idToDelete);
      },
      setVisitLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { visitupdateData, setVisitLoading ,deleteDataVisit} = visitDataSlice.actions;

export default visitDataSlice.reducer;

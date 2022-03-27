import { createSlice } from '@reduxjs/toolkit';
import { getAccuweather } from './methods/getAccuweather';
import { AccuweatherSlice } from './accuweatherSlice.types';

const initialState: AccuweatherSlice = {
  loading: false,
  error: null,
  language: 'es-es',
  id: '',
  selectedCity: '',
  data: [],
  favouriteList: [],
};

export const accuweatherSlice = createSlice({
  name: 'accuweather',
  initialState,
  reducers: {
    selectedId: (state, action) => {
      state.id = action.payload.id;
      state.selectedCity = action.payload.selectedCity;
    },
    resetError: (state) => {
      state.error = null;
    },
    addToFavourite: (state, action) => {
      state.favouriteList = [...state.favouriteList, action.payload];
    },
    removeToFavourite: (state, action) => {
      state.favouriteList = state.favouriteList.filter((id) => action.payload !== id);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAccuweather.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAccuweather.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.data = payload.data;
    });
    builder.addCase(getAccuweather.rejected, (state, { payload }) => {
      state.loading = false;
      let error = payload?.message ? payload.message : null;
      state.error = error;
    });
  },
});

export const { selectedId, resetError, addToFavourite, removeToFavourite } =
  accuweatherSlice.actions;

export default accuweatherSlice.reducer;

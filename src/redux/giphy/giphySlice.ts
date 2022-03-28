import { createSlice } from '@reduxjs/toolkit';
import { getGiphy } from './methods/getGiphy';
import { GiphySlice } from './giphySlice.types';

const initialState: GiphySlice = {
  loading: false,
  error: null,
  pagination: {
    total_count: 0,
    count: 50,
    offset: 0,
  },
  search: '',
  data: [],
  favouriteList: [],
};

export const giphySlice = createSlice({
  name: 'giphy',
  initialState,
  reducers: {
    updateInput: (state, action) => {
      state.search = action.payload;
    },
    resetError: (state) => {
      state.error = null;
    },
    resetList: (state) => {
      state.data = [];
    },
    updateOffset: (state, action) => {
      state.pagination.offset = action.payload;
    },
    addToFavourite: (state, action) => {
      state.favouriteList = [...state.favouriteList, action.payload];
    },
    removeToFavourite: (state, action) => {
      state.favouriteList = state.favouriteList.filter((giphyId) => action.payload !== giphyId);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getGiphy.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getGiphy.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.error = null;
      state.data = [...state.data, ...payload.data];
      state.pagination = payload.pagination;
    });
    builder.addCase(getGiphy.rejected, (state, { payload }) => {
      state.loading = false;
      let error = payload?.message ? payload.message : null;
      state.error = error;
    });
  },
});

export const {
  updateInput,
  resetError,
  addToFavourite,
  removeToFavourite,
  updateOffset,
  resetList,
} = giphySlice.actions;

export default giphySlice.reducer;

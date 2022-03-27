import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import giphySlice from './giphy/giphySlice';
import accuweatherSlice from './accuweather/accuweatherSlice';

const store = configureStore({
  reducer: {
    giphy: giphySlice,
    accuweather: accuweatherSlice,
  },
  // desvtools habilitar
  devTools: true,
});

export default store;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

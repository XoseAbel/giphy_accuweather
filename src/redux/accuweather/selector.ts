import { RootState } from '../shared.types';

export const selectAccuweatherError = (mainState: RootState) => mainState.accuweather.error;
export const selectAccuweatherId = (mainState: RootState) => mainState.accuweather.id;
export const selectAccuweatherNameCity = (mainState: RootState) =>
  mainState.accuweather.selectedCity;

export const selectAccuweatherData = (mainState: RootState) => mainState.accuweather.data;

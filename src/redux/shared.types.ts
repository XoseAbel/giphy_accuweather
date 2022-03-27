import { GiphySlice } from './giphy/giphySlice.types';
import { AccuweatherSlice } from './accuweather/accuweatherSlice.types';

export interface RootState {
  giphy: GiphySlice;
  accuweather: AccuweatherSlice;
}

import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'src/redux/shared.types';
import { connectWithApi } from 'src/services/api/connectWithApi';
import { GET, ACCUWEATHER_BASE_URL, API_KEY_PARAM_ACCUWEATHER } from 'src/services/api/constants';
import { ApiError } from 'src/services/api/throwErrors/ApiErrors';
import { DataAccuweather } from '../accuweatherSlice.types';

export const getAccuweather = createAsyncThunk<
  any,
  void,
  { rejectValue: { message: string }; getState: () => RootState }
>('accuweather/getAccuweather', async (_, { rejectWithValue, getState }) => {
  try {
    const state = getState() as RootState;
    const { id, language } = state.accuweather;
    const { REACT_APP_ACCUWEATHER_API_KEY } = process.env;
    const url = `${ACCUWEATHER_BASE_URL}${id}${API_KEY_PARAM_ACCUWEATHER}${REACT_APP_ACCUWEATHER_API_KEY}`;
    const { DailyForecasts } = await connectWithApi(url, GET, { language });
    return {
      data: DailyForecasts.map(({ Date, Day, Temperature, Night }: DataAccuweather) => ({
        Date,
        Day,
        Temperature,
        Night,
      })),
    };
  } catch (error) {
    let e = error instanceof ApiError ? error : new ApiError(500);
    const { message } = e;
    return rejectWithValue({ message });
  }
});

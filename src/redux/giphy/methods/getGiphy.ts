import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'src/redux/shared.types';
import { connectWithApi } from 'src/services/api/connectWithApi';
import { GET, GIPHY_SEARCH } from 'src/services/api/constants';
import { ApiError } from 'src/services/api/throwErrors/ApiErrors';
import { DataGiphy } from '../giphySlice.types';

export const getGiphy = createAsyncThunk<
  any,
  void,
  { rejectValue: { message: string }; getState: () => RootState }
>('giphy/getGiphy', async (_, { rejectWithValue, getState }) => {
  try {
    const { REACT_APP_GIPHY_API_KEY } = process.env;
    const state = getState() as RootState;
    const { limit, offset } = state.giphy.pagination;
    const q = state.giphy.search;
    const { data, pagination } = await connectWithApi(GIPHY_SEARCH + REACT_APP_GIPHY_API_KEY, GET, {
      limit,
      offset,
      q,
    });
    return {
      data: data.map(
        ({
          type,
          id,
          slug,
          title,
          images: {
            downsized_medium: { height, width, size, url },
          },
        }: DataGiphy) => ({
          type,
          id,
          slug,
          title,
          images: { downsized_medium: { height, width, size, url } },
        })
      ),
      pagination,
    };
  } catch (error) {
    let e = error instanceof ApiError ? error : new ApiError(500);
    const { message } = e;
    return rejectWithValue({ message });
  }
});

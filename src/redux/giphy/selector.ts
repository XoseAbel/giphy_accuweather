import { RootState } from '../shared.types';

export const selectGiphySearchValue = (mainState: RootState) => mainState.giphy.search;
export const selectGiphyError = (mainState: RootState) => mainState.giphy.error;
export const selectGiphyLoading = (mainState: RootState) => mainState.giphy.loading;
export const selectGiphyPagination = (mainState: RootState) => mainState.giphy.pagination;
export const selectGiphyList = (mainState: RootState) =>
  mainState.giphy.data.map((item) => ({
    ...item,
    favourite: mainState.giphy.favouriteList.includes(item.id),
  }));

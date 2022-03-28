import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Pagination } from 'src/redux/giphy/giphySlice.types';

export const useInfiniteScroll = (
  loading: boolean,
  pagination: Pagination,
  update: ActionCreatorWithPayload<any, string>
) => {
  const { offset, count, total_count } = pagination;
  const observer = useRef<IntersectionObserver>();
  const dispatch = useDispatch();

  const lastElement = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && count + offset < total_count)
          dispatch(update(count + offset));
      });
      if (node) observer.current.observe(node);
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [loading]
  );
  return {
    lastElement,
  };
};

export default useInfiniteScroll;

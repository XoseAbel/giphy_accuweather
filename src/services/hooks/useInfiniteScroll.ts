import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';

export const useInfiniteScroll = (
  loading: boolean,
  pagination: { limit: number; offset: number; totalCount: number },
  update: ActionCreatorWithPayload<any, string>
) => {
  const { offset, limit, totalCount } = pagination;
  const observer = useRef<IntersectionObserver>();
  const dispatch = useDispatch();

  const lastElement = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && limit + offset < totalCount)
          dispatch(update(limit + offset));
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

import { useCallback, useEffect, useRef, useState } from 'react';
import { ApiError } from 'src/services/api/throwErrors/ApiErrors';

export default function useLoadingFunction(func: any) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | ApiError>(null);
  const isMountedRef = useRef(true);

  useEffect(
    () => () => {
      isMountedRef.current = false;
    },
    []
  );

  const resetError = () => {
    setError(null);
  };

  const wrappedClick = useCallback(
    async (...args) => {
      resetError();
      setLoading(true);
      let result;
      try {
        result = await func(...args);
      } catch (e) {
        if (isMountedRef.current) setLoading(false);
        e instanceof ApiError ? setError(e) : setError(new ApiError(500));
      } finally {
        setLoading(false);
      }
      return result;
    },
    [func]
  );

  return [wrappedClick, error, loading, resetError] as const;
}

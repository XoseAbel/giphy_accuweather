import { Alert, Snackbar, SnackbarOrigin } from '@mui/material';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Props from './SnackbarError.types';

const SnackbarError = ({ selector, action }: Props) => {
  const dispatch = useDispatch();
  const errorMessage = useSelector(selector);

  const positionSnackbar: SnackbarOrigin = useMemo(
    () => ({ vertical: 'top', horizontal: 'center' }),
    []
  );

  const handleClose = () => {
    dispatch(action());
  };

  return (
    <Snackbar
      open={!!errorMessage}
      autoHideDuration={3000}
      anchorOrigin={positionSnackbar}
      onClose={handleClose}
    >
      <Alert severity='error' sx={{ width: '100%' }} onClose={handleClose}>
        {errorMessage}
      </Alert>
    </Snackbar>
  );
};
export { SnackbarError };

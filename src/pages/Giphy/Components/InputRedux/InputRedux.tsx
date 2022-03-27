import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@mui/material';
import Props from './InputRedux.types';

const InputRedux = ({ selector, action }: Props) => {
  const dispatch = useDispatch();
  const value = useSelector(selector);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value;
    dispatch(action(value));
  };

  return (
    <TextField
      fullWidth
      label='Buscar'
      size='small'
      variant='outlined'
      value={value}
      onChange={handleChange}
    />
  );
};

export { InputRedux };

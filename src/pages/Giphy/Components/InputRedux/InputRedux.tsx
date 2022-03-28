import { ChangeEvent, KeyboardEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField } from '@mui/material';
import Props from './InputRedux.types';

const InputRedux = ({ selector, action, actionsSearch }: Props) => {
  const dispatch = useDispatch();
  const value = useSelector(selector);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const value = e.target.value;
    dispatch(action(value));
  };

  const handleSearch = (e: KeyboardEvent<HTMLDivElement>) => {
    // on Enter start search
    e.key === 'Enter' && actionsSearch.forEach((action) => dispatch(action()));
  };

  return (
    <TextField
      fullWidth
      label='Buscar'
      size='small'
      variant='outlined'
      value={value}
      onChange={handleChange}
      onKeyDown={handleSearch}
    />
  );
};

export { InputRedux };

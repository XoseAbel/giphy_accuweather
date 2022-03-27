import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Props from './ButtonSearch.types';

const ButtonSearch = ({ action, title, checkValue }: Props) => {
  const dispatch = useDispatch();
  const value = useSelector(checkValue);

  const handleSearch = () => {
    dispatch(action());
  };

  return (
    <Button variant='contained' onClick={handleSearch} disabled={!value}>
      {title}
    </Button>
  );
};

export { ButtonSearch };

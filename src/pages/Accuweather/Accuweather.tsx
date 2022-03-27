import { Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import GoHomeButton from 'src/Components/GoHomeButton';
import NoResult from 'src/Components/NoResult';
import SnackbarError from 'src/Components/SnackbarError';
import { resetError } from 'src/redux/accuweather/accuweatherSlice';
import {
  selectAccuweatherData,
  selectAccuweatherError,
  selectAccuweatherNameCity,
} from 'src/redux/accuweather/selector';
import CardWeather from './Components/CardWeather';
import SearchAutocomplete from './Components/SearchAutocomplete';

const Accuweather = () => {
  const listWeather = useSelector(selectAccuweatherData);
  const city = useSelector(selectAccuweatherNameCity);

  return (
    <Grid container direction='column' padding='10px'>
      <SnackbarError selector={selectAccuweatherError} action={resetError} />
      <Grid container paddingTop='5px'>
        <Grid item xs={1} container alignContent='center' justifyContent='start'>
          <GoHomeButton />
        </Grid>
        <Grid item xs={9}>
          <SearchAutocomplete />
        </Grid>
      </Grid>
      <Grid container paddingTop='5px'>
        {listWeather.length ? (
          <>
            <Typography variant='h5'>{city}</Typography>
            <Grid container>
              {listWeather.map((data) => (
                <CardWeather key={data.Date} {...data} />
              ))}
            </Grid>
          </>
        ) : (
          <NoResult />
        )}
      </Grid>
    </Grid>
  );
};

export { Accuweather };

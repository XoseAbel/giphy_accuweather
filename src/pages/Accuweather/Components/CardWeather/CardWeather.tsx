import { useCallback } from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { DataAccuweather } from 'src/redux/accuweather/accuweatherSlice.types';
import dayjs from 'dayjs';
import { DATE_FORMAT, iconStrategy } from './constants';
import WeatherIcon from './Components/WeatherIcon';

const CardWeather = ({ Date, Temperature, Day, Night }: DataAccuweather) => {
  const changeToCelsius = useCallback((value: number) => Math.round(((value - 32) * 5) / 9), []);

  return (
    <Grid item xs={8} padding='10px'>
      <Card raised>
        <CardContent>
          <Grid container direction='row'>
            <Grid container item xs={4} direction='column'>
              <Typography gutterBottom variant='h6' component='div'>
                {dayjs(Date).format(DATE_FORMAT)}
              </Typography>
              <Typography gutterBottom variant='body2' component='div'>
                Max. {changeToCelsius(Temperature.Maximum.Value)} ºC
              </Typography>
              <Typography gutterBottom variant='body2' component='div'>
                Min. {changeToCelsius(Temperature.Minimum.Value)} ºC
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <WeatherIcon title='Day' image={iconStrategy[`${Day.Icon}`]} />
            </Grid>
            <Grid item xs={4}>
              <WeatherIcon title='Night' image={iconStrategy[`${Night.Icon}`]} />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export { CardWeather };

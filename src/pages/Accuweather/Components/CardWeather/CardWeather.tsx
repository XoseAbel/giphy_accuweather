import { useCallback } from 'react';
import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { DataAccuweather } from 'src/redux/accuweather/accuweatherSlice.types';
import dayjs from 'dayjs';
import { iconStrategy } from './constants';

const CardWeather = ({ Date, Temperature, Day }: DataAccuweather) => {
  const changeToCelsius = useCallback((value: number) => Math.round(((value - 32) * 5) / 9), []);

  return (
    <Grid item xs={3} padding='10px'>
      <Card raised>
        <CardMedia
          component='img'
          height='140'
          image={iconStrategy[`${Day.Icon}`]}
          alt='weather icon'
        />
        <CardContent>
          <Typography gutterBottom variant='h6' component='div'>
            {dayjs(Date).format('YYYY-MM-DD')}
          </Typography>
          <Grid container direction='row' justifyContent='space-between'>
            <Typography gutterBottom variant='body2' component='div'>
              Max. {changeToCelsius(Temperature.Maximum.Value)} ºC
            </Typography>
            <Typography gutterBottom variant='body2' component='div'>
              Min. {changeToCelsius(Temperature.Minimum.Value)} ºC
            </Typography>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export { CardWeather };

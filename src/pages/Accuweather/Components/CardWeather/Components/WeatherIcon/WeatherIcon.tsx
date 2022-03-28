import { CardMedia, Typography } from '@mui/material';
import { Props } from './WeatherIcon.types';

const WeatherIcon = ({ title, image }: Props) => {
  return (
    <>
      <Typography gutterBottom variant='body2' component='div' align='center'>
        {title}
      </Typography>
      <CardMedia
        sx={{ width: 'auto', marginLeft: 'auto', marginRight: 'auto' }}
        component='img'
        height='100'
        image={image}
        alt='weather icon'
      />
    </>
  );
};

export { WeatherIcon };

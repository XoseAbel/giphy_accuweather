import { Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import routes from 'src/routes/constants';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = (url: string) => {
    navigate(url);
  };

  return (
    <Grid container justifyContent='center' marginTop='20px'>
      <Grid item xs={8} container justifyContent='space-around'>
        <Button variant='contained' onClick={() => handleNavigate(routes.giphy.url)}>
          {routes.giphy.title}
        </Button>
        <Button variant='contained' onClick={() => handleNavigate(routes.accuweather.url)}>
          {routes.accuweather.title}
        </Button>
      </Grid>
    </Grid>
  );
};

export { Home };

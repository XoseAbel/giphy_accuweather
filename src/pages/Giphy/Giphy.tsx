import { Grid } from '@mui/material';
import ButtonSearch from 'src/pages/Giphy/Components/ButtonSearch';
import GoHomeButton from 'src/Components/GoHomeButton';
import InputRedux from 'src/pages/Giphy/Components/InputRedux';
import SnackbarError from 'src/Components/SnackbarError';
import { resetError, resetList, updateInput } from 'src/redux/giphy/giphySlice';
import { getGiphy } from 'src/redux/giphy/methods/getGiphy';
import { selectGiphyError, selectGiphySearchValue } from 'src/redux/giphy/selector';
import ImageGrid from './Components/ImageGrid';

const Giphy = () => {
  return (
    <Grid container direction='column' padding='10px'>
      <SnackbarError selector={selectGiphyError} action={resetError} />
      <Grid container paddingTop='5px'>
        <Grid item xs={1} container alignContent='center' justifyContent='start'>
          <GoHomeButton />
        </Grid>
        <Grid item xs={9}>
          <InputRedux
            selector={selectGiphySearchValue}
            action={updateInput}
            actionsSearch={[resetList, getGiphy]}
          />
        </Grid>
        <Grid item xs={2} container alignContent='center' justifyContent='center'>
          <ButtonSearch
            actions={[resetList, getGiphy]}
            title='Buscar Gifs'
            checkValue={selectGiphySearchValue}
          />
        </Grid>
      </Grid>
      <ImageGrid />
    </Grid>
  );
};

export { Giphy };

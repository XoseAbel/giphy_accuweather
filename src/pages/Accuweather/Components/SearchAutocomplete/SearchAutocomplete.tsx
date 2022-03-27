import { Alert, Autocomplete, CircularProgress, Snackbar, TextField } from '@mui/material';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectedId } from 'src/redux/accuweather/accuweatherSlice';
import { getAccuweather } from 'src/redux/accuweather/methods/getAccuweather';
import { connectWithApi } from 'src/services/api/connectWithApi';
import {
  ACCUWEATHER_AUTOCOMPLETE_URL,
  API_KEY_PARAM_ACCUWEATHER,
  GET,
} from 'src/services/api/constants';
import useLoadingFunction from 'src/services/hooks/useLoading';
import { AutocompleResponse, Cities } from './SearchAutocomplete.types';

const SearchAutocomplete = () => {
  const dispatch = useDispatch();
  const [cities, setCities] = useState<Cities[]>([]);

  const handleChange = async (event: SyntheticEvent, value: string) => {
    if (value) {
      const { REACT_APP_ACCUWEATHER_API_KEY } = process.env;
      const url =
        ACCUWEATHER_AUTOCOMPLETE_URL + API_KEY_PARAM_ACCUWEATHER + REACT_APP_ACCUWEATHER_API_KEY;
      const result = await connectWithApi(url, GET, { q: value });
      setCities(
        result.map(({ Key, LocalizedName, Country, AdministrativeArea }: AutocompleResponse) => ({
          id: Key,
          cityRegionCountry: `${LocalizedName}, ${AdministrativeArea.LocalizedName}, ${Country.ID}`,
        }))
      );
    }
  };
  const [startFetch, error, loading, resetError] = useLoadingFunction(handleChange);

  const handleSelectCity = (event: ChangeEvent<{}> | null, value: Cities | null) => {
    if (value) {
      dispatch(selectedId({ id: value.id, selectedCity: value.cityRegionCountry }));
      dispatch(getAccuweather());
    }
  };

  return (
    <>
      <Snackbar
        open={!!error}
        autoHideDuration={2000}
        onClose={resetError}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert severity='error' sx={{ width: '100%' }} onClose={resetError}>
          {error?.message}
        </Alert>
      </Snackbar>
      <Autocomplete
        disablePortal
        onInputChange={startFetch}
        onChange={handleSelectCity}
        onOpen={() => setCities([])}
        options={cities}
        getOptionLabel={(option) => option.cityRegionCountry}
        fullWidth
        size='small'
        noOptionsText='Por favor, busca una ciudad'
        renderInput={(params) => (
          <TextField
            {...params}
            label='Ciudad'
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? (
                    <CircularProgress color='inherit' size={20} sx={{ marginRight: '30px' }} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
      />
    </>
  );
};

export { SearchAutocomplete };

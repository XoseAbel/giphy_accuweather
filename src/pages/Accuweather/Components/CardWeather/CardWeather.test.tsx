import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardWeather from './index';
import dayjs from 'dayjs';
import { DATE_FORMAT } from './constants';

test('CardWeather render controlled element', () => {
  const props = {
    Date: '2022-03-28T07:00:00+02:00',
    Temperature: {
      Minimum: {
        Value: 54,
        Unit: 'F',
        UnitType: 18,
      },
      Maximum: {
        Value: 73,
        Unit: 'F',
        UnitType: 18,
      },
    },
    Day: {
      Icon: 1,
      IconPhrase: 'Soleado',
      HasPrecipitation: false,
    },
    Night: {
      Icon: 35,
      IconPhrase: 'Parcialmente nublado',
      HasPrecipitation: false,
    },
  };
  render(<CardWeather {...props} />);

  expect(screen.getByText(dayjs(props.Date).format(DATE_FORMAT))).toBeInTheDocument();
  expect(screen.getByText('Max. 23 ºC')).toBeInTheDocument();
  expect(screen.getByText('Min. 12 ºC')).toBeInTheDocument();
});

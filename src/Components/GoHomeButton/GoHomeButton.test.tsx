import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import GoHomeButton from './index';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import routes from 'src/routes/constants';

test('GoHomeButton navigation from gipthy to home', () => {
  const history = createMemoryHistory();
  history.push(routes.giphy.url);

  render(
    <Router navigator={history} location={history.location}>
      <GoHomeButton />
    </Router>
  );

  expect(screen.getByTestId('goHome')).toBeInTheDocument();
  expect(history.location.pathname).toBe(routes.giphy.url);
  const iconHome = screen.getByTestId('goHome');
  fireEvent.click(iconHome);
  expect(history.location.pathname).toBe(routes.home.url);
});

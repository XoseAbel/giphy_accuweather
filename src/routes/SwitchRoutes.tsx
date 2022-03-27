import { Route, Routes } from 'react-router-dom';
import routes from './constants';
import Home from 'src/pages/Home';
import Giphy from 'src/pages/Giphy';
import Accuweather from 'src/pages/Accuweather';

function SwitchRoutes() {
  return (
    <Routes>
      <Route path={routes.home.url} element={<Home />} />
      <Route path={routes.giphy.url} element={<Giphy />} />
      <Route path={routes.accuweather.url} element={<Accuweather />} />
      <Route path='*' element={<Home />} />
    </Routes>
  );
}

export default SwitchRoutes;

import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from 'src/redux/store';
import SwitchRoutes from './routes/SwitchRoutes';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <SwitchRoutes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;

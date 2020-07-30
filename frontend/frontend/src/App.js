import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import 'antd/dist/antd.css';

import './config/ReactotronConfig';

import Routes from './routes';

import { store, persistor } from './store'

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes/>
          <ToastContainer autoClose={3000}/>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';
import { Provider } from 'react-redux';
import { persistor, stor } from 'redux/stor';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={stor}>
    <React.StrictMode>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </React.StrictMode>
  </Provider>
);

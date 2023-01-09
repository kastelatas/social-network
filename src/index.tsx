import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {setupStore} from "./store/store";
import {Provider} from "react-redux";
import {NotificationProvider} from './contexts/NotificationContext';

const store = setupStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <NotificationProvider>
      <Provider store={store}>
        <App/>
      </Provider>
    </NotificationProvider>
  </React.StrictMode>
);


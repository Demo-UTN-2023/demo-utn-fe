import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './state/store';
import { Provider } from 'react-redux';
import { RouterProvider } from "react-router-dom";
import { router } from './router';

import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

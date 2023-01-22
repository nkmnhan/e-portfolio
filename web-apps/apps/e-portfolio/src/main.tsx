import Keycloak from 'keycloak-js';
import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3333';
axios.defaults.headers.common['Authorization'] = 'Bearer ';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

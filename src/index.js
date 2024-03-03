import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Auth0Provider
    domain="dev-t2asdjl8b7j5ur7z.us.auth0.com"
    clientId="Mapb5UJm7TuPyNT4opJ9N2O3rQtNMFzp"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ContextProvider } from './Components/utils/global.context'; // Ruta correcta de tu archivo

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ContextProvider>  {/* Asegúrate de envolver toda la aplicación */}
    <App />
  </ContextProvider>,
);



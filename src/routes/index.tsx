import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import  App from './app.routs';

const Routes: React.FC = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Routes;

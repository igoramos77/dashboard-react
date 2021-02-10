import React from 'react';
import { Switch, Route } from 'react-router-dom';

//import App from './app.routs';

import SignIn from '../Pages/SigIn';

const AuthRoutes: React.FC = () => (
  <Switch>
    <Route path="/" component={SignIn} />
  </Switch>
);

export default AuthRoutes;

import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Home from '../pages/Home';
import ResetPassword from '../pages/ResetPassword';
import Profile from '../pages/Profile';
import Leads from '../pages/Leads';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/reset-password" component={ResetPassword} />

    <Route path="/profile" component={Profile} isPrivate />
    <Route path="/home" component={Home} isPrivate />
    <Route path="/leads" component={Leads} isPrivate />
  </Switch>
);

export default Routes;

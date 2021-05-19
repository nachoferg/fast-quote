import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Outreach from "./Outreach";
import UserInfo from "./UserInfo";
import FarmList from "./FarmList";
import Farm from "./Farm";
import NotFound from "./NotFound";

import PrivateRoute from "./PrivateRoute";

const Routes: FC = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <PrivateRoute path="/dashboard">
      <Dashboard />
    </PrivateRoute>
    <PrivateRoute path="/outreach">
      <Outreach />
    </PrivateRoute>
    <PrivateRoute path="/userinfo">
      <UserInfo />
    </PrivateRoute>
    <PrivateRoute path="/farmlist">
      <FarmList />
    </PrivateRoute>
    <PrivateRoute path="/farm/:farmName/:visitDate">
      <Farm />
    </PrivateRoute>
    <Route component={NotFound} />
  </Switch>
);

export default Routes;

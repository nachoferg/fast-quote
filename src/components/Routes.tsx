import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";
import UserInfo from "./UserInfo";
import Quote from "./Quote";
import QuoteList from "./QuoteList";
import NotFound from "./NotFound";

import PrivateRoute from "./PrivateRoute";

const Routes: FC = () => (
  <Switch>
    <Route exact path="/" component={Quote} />
    <PrivateRoute path="/dashboard">
      <Dashboard />
    </PrivateRoute>
    <PrivateRoute path="/userinfo">
      <UserInfo />
    </PrivateRoute>
    <PrivateRoute path="/quotelist">
      <QuoteList />
    </PrivateRoute>
    <PrivateRoute path="/:qid/:owner">
      <Quote />
    </PrivateRoute>
    <Route component={NotFound} />
  </Switch>
);

export default Routes;

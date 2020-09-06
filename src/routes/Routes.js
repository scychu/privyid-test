import React from "react";
import { Route, Switch } from "react-router-dom";
import RegisterLogin from '../views/RegisterLogin';
export default function Routes() {
    return (
      <Switch>
        <Route path="/" component={RegisterLogin} exact />
        {/* <Route component={NotFound} /> */}
      </Switch>
    );
  }
  

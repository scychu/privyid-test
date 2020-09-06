import React from "react";
import { Route, Switch } from "react-router-dom";
import RegisterLogin from '../views/RegisterLogin';
import Verification from "../views/Verification";
import Dashboard from "../views/Dashboard";
export default function Routes() {
    return (
      <Switch>
        <Route path="/" component={RegisterLogin} exact />
        <Route path="/verification" component={Verification} exact />
        <Route path="/dashboard" component={Dashboard} exact />
        {/* <Route component={NotFound} /> */}
      </Switch>
    );
  }
  

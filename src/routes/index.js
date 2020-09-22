  
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import  LoginPage  from "../page/login";
import UserRoute from "./routesUser";
export default function Routes() {
  return (
    <Router>
        <Switch>
          <Route path="/login"><LoginPage/></Route>
          <Route path='/' exact component={UserRoute}/>
        </Switch>
    </Router>
  );
}
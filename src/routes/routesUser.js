import React from "react";
import {
  Route,Redirect
} from "react-router-dom";
import  ListUsers  from "../components/ListUsers";
import {token} from  '../constant/config'
function UserRoute() {

    return (

        <Route render={props => (
          token ?
          <div>
          <Route path="/">
            <ListUsers/>
          </Route>
        </div>
          : <Redirect to="/login" />
      )} />
        
      );
}
export default UserRoute;
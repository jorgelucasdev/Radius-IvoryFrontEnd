import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.scss";

import { routes } from "./routes";

import DefaultLayoutPublic from './pages/DefaultLayoutPublic'

const Auth = false;

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !(Auth === true) ? (
        <Component {...props} routes={routes} />
      ) : (
          <Redirect
            to={{
              pathname: "/login"
            }}
          />
        )
    }
  />
);


function App() {
  return (
    <div className="App">
<<<<<<< HEAD
    <Index/>
=======
      <BrowserRouter>
        <Switch>
          <PublicRoute path="/" component={DefaultLayoutPublic} />
          {/* <ProtectedRoute path="/" component={DefaultLayout} /> */}
        </Switch>
      </BrowserRouter>
>>>>>>> esqueciSenha
    </div>
  );
}

export default App;

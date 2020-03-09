import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

import { routesPublic, routesPrivate } from "./routes";

import DefaultLayoutPublic from "./pages/DefaultLayoutPublic";
import DefaultLayoutPrivate from "./pages/DefaultLayoutPrivate";

const Auth = false;

const PublicRoute = ({ component: Component, route, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !(Auth === true) ? (
        <Component {...props} route={route} />
      ) : (
        <Redirect
          to={{
            pathname: "/"
          }}
        />
      )
    }
  />
);

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth === true ? (
        <Component {...props} routes={routesPrivate} />
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
      <BrowserRouter>
        <Switch>
          <PublicRoute
            exact
            path={routesPublic.login.path}
            component={DefaultLayoutPublic}
            route={routesPublic.login}
          />
          <PublicRoute
            exact
            path={routesPublic.esqueciSenha.path}
            component={DefaultLayoutPublic}
            route={routesPublic.esqueciSenha}
          />
          <PublicRoute
            exact
            path={routesPublic.faleConosco.path}
            component={DefaultLayoutPublic}
            route={routesPublic.faleConosco}
          />
          <ProtectedRoute path="/" component={DefaultLayoutPrivate} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

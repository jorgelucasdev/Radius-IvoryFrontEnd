import React, { Suspense } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import styles from "./index.module.scss";

function DefaultLayoutPublic(props) {
  const { routes } = props;

  console.log(routes);

  return (
    <div>
      Rota Privada
      <BrowserRouter>
        <Suspense fallback={<main>Carregando...</main>}>
          <Switch>
            {routes.map((route, index) => {
              return route.component ? (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  render={props => <route.component {...props} />}
                />
              ) : null;
            })}
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default DefaultLayoutPublic;

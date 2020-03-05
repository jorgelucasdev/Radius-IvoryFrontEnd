<<<<<<< HEAD
import React from "react";
import Autenticacao from "./pages/login/index";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/login/login";
import EsqueciSenha from "./pages/login/EsqueciSenha";
import FaleConosco from "./pages/login/faleconosco";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/esquecisenha/" component={EsqueciSenha} />
      <Route path="/faleconosco/" component={FaleConosco} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
=======
import React, { lazy } from "react";

const Login = lazy(() => import("./pages/login/login"));
const EsqueciSenha = lazy(() => import("./pages/login/EsqueciSenha"));
const FaleConosco = lazy(() => import("./pages/login/faleconosco"));

export const routes = [
    { path: "/", exact: true, component: Login },
    { path: "/esquecisenha", exact: true, component: EsqueciSenha },
    { path: "/faleconosco", exact: true, component: FaleConosco },

    // {
    //   path: "",
    //   exact: true,
    //   component: Error404
    // }
];
>>>>>>> esqueciSenha

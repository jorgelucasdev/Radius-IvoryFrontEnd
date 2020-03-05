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

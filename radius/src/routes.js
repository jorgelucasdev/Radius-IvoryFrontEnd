import React, { lazy } from "react";

// rotas públicas
const Login = lazy(() => import("./pages/login/login"));
const EsqueciSenha = lazy(() => import("./pages/login/EsqueciSenha"));
const FaleConosco = lazy(() => import("./pages/login/faleconosco"));

// rotas privadas
const Home = lazy(() => import("./pages/home"));
const ListagemClientes = lazy(() => import("./pages/Cadastro/ListagemClientes"));
const CadastroClientes = lazy(() => import("./pages/Cadastro/CadastroClientes"));
const CadastroUsuarios = lazy(() => import("./pages/Cadastro/CadastroUsuarios"));
const ListagemUsuarios = lazy(() => import("./pages/Cadastro/ListagemUsuarios"));

export const routesPublic = {
  login: { path: "/login", component: Login },
  esqueciSenha: { path: "/esquecisenha", component: EsqueciSenha },
  faleConosco: { path: "/faleconosco", component: FaleConosco }
};

const Error404 = props => <div>Erro 404</div>;

export const routesPrivate = [
  { path: "/", exact: true, component: Home },
  { path: "/Cadastro/ListagemClientes", exact: true, component: ListagemClientes},
  { path: "/Cadastro/CadastroClientes", exact: true, component: CadastroClientes},
  { path: "/Cadastro/CadastroUsuarios", exact: true, component: CadastroUsuarios},
  { path: "/Cadastro/ListagemUsuarios", exact: true, component: ListagemUsuarios},
  {
    path: "",
    exact: true,
    component: Error404
  }
];

import React, { lazy } from "react";

// rotas públicas
const Login = lazy(() => import("./pages/login/login"));
const EsqueciSenha = lazy(() => import("./pages/login/EsqueciSenha"));
const FaleConosco = lazy(() => import("./pages/login/faleconosco"));

// rotas privadas
const Home = lazy(() => import("./pages/home"));
const ListagemClientes = lazy(() => import("./pages/Cadastro/ListagemClientes"));
const CadastroClientes = lazy(() => import("./pages/Cadastro/CadastroClientes"));
const ListagemUsuarios = lazy(() => import("./pages/Cadastro/ListagemUsuarios"));
const CadastroUsuarios = lazy(() => import("./pages/Cadastro/CadastroUsuarios"));
const ListagemChamados = lazy(() => import("./pages/Chamados/ListagemChamados"));
const CadastroChamadas = lazy(() => import("./pages/Cadastro/CadastroChamadas"));
const ListagemFuncionarios = lazy(() => import("./pages/Cadastro/ListagemFuncionarios"));
const CadastroFuncionarios = lazy(() => import("./pages/Cadastro/CadastroFuncionarios"));
const ListagemCatalogo = lazy(() => import("./pages/Cadastro/ListagemCatalogo"));
const ListagemProjetos = lazy(() => import("./pages/Cadastro/ListagemProjetos"));
const CadastroProjetos = lazy(() => import("./pages/Cadastro/CadastroProjetos"));

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
  { path: "/Cadastro/ListagemUsuarios", exact: true, component: ListagemUsuarios},
  { path: "/Cadastro/CadastroUsuarios", exact: true, component: CadastroUsuarios},
  { path: "/Cadastro/CadastroProjetos", exact: true, component: CadastroProjetos},
  { path: "/Cadastro/CadastroChamadas", exact: true, component: CadastroChamadas},
  {
    path: "",
    exact: true,
    component: Error404
  }
];

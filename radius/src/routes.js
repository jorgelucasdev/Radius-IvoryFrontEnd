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
const CadastroChamadas = lazy(() => import("./pages/Cadastro/CadastroChamadas"));
const ListagemFuncionarios = lazy(() => import("./pages/Cadastro/ListagemFuncionarios"));
const ListagemCatalogo = lazy(() => import("./pages/Cadastro/ListagemCatalogo"));
const ListagemChamados = lazy(() => import("./pages/Chamados/ListagemChamados"));
const CadastroFuncionarios = lazy(() => import("./pages/Cadastro/CadastroFuncionarios"));
const CadastroCatalogos = lazy(() => import("./pages/Cadastro/CadastroCatalogos"));
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
  { path: "/Cadastro/ListagemFuncionarios", exact: true, component: ListagemFuncionarios},
  { path: "/Cadastro/ListagemProjetos", exact: true, component: ListagemProjetos},
  { path: "/Cadastro/ListagemCatalogo", exact: true, component: ListagemCatalogo},
  { path: "/Chamados/ListagemChamados", exact: true, component: ListagemChamados},
  { path: "/Cadastro/CadastroFuncionarios", exact: true, component: CadastroFuncionarios},
  { path: "/Cadastro/CadastroCatalogos", exact: true, component: CadastroCatalogos},
  { path: "/Cadastro/CadastroProjetos", exact: true, component: CadastroProjetos},
  { path: "/Cadastro/CadastroChamadas", exact: true, component: CadastroChamadas},
  {
    path: "",
    exact: true,
    component: Error404
  }
];

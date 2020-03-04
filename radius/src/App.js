import React from "react";
import "./App.scss";
import Index from "./pages/login/index";
import Autenticacao from "./pages/login/";
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <Index />
      <Routes />
    </div>
  );
}

export default App;

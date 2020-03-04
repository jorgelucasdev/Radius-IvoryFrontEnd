import React from "react";
import "./App.scss";
import Autenticacao from "./pages/login/index";
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <Autenticacao></Autenticacao>
    </div>
  );
}

export default App;

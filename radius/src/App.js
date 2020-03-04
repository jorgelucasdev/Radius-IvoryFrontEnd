import React from "react";
import "./App.scss";
import Autenticacao from "./pages/login";
import Home from "./pages/home";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Home />
      {/* <Autenticacao></Autenticacao> */}
    </div>
  );
}

export default App;

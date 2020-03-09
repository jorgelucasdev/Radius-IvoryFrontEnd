import React from "react";
import "./App.scss";
import Autenticacao from "./pages/login";
import Main from "./pages/main";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Main />
      {/* <Autenticacao></Autenticacao> */}
    </div>
  );
}

export default App;

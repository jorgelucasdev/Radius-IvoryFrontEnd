import React, { useState } from "react";
import styles from "./CadastroClientes.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import "styled-components";
import "./AuxStyles.css";
<<<<<<< Updated upstream
import NovoUsuario from './NovoUsuario';
=======
import ListagemUsuarios from "./ListagemUsuarios";

>>>>>>> Stashed changes
const CadastroUsuarios = props => {
  
  return (
    <div className={styles.principal}>
      <h1>Home > Cadastro > Usuário</h1>
<<<<<<< Updated upstream
        <NovoUsuario/>
=======
      <ListagemUsuarios />
>>>>>>> Stashed changes
    </div>
  );
};

export default CadastroUsuarios;
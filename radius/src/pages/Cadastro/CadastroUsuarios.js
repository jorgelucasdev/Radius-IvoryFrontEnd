import React, { useState } from "react";
import styles from "./CadastroClientes.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import "styled-components";
import "./AuxStyles.css";
import NovoUsuario from './NovoUsuario';
const CadastroUsuarios = props => {
  
  return (
    <div className={styles.principal}>
      <h1>Home > Cadastro > Usuário</h1>
        <NovoUsuario/>
    </div>
  );
};

export default CadastroUsuarios;
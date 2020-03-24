import React, { useState } from "react";
import styles from "./ListagemClientes.module.scss";
import ButtonCustom from "../../components/ButtonCustom";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const ListagemClientes = () => {
  return (
    <div className={styles.principal}>
      <h1>Home > Cadastro > Clientes</h1>
      <div className={styles.conteudo}>
        <div className={styles.conteudoSection}>
          <div className={styles.filtroClientes}></div>
          <div className={styles.listaClientes}></div>
        </div>
        <div className={styles.conteudoAside}>
          <ButtonCustom
            title={"Novo Cliente"}
            icon={faPlusCircle}
            desc={"CADASTRAR CLIENTE"}
          ></ButtonCustom>
        </div>
      </div>
    </div>
  );
};

export default ListagemClientes;

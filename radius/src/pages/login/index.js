import React from "react";
import styles from "./index.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Radius from "../../assets/images/logoRadius.png";
import LogoIvory from "../../assets/images/logoIvory.png";
import Login from "./login";
import EsqueciSenha from "./EsqueciSenha";
import FaleConosco from "./faleconosco";

function Autenticacao() {
  return (
    <div className={styles.autenticacao}>
      <Container className={styles.container}>
        <div className={styles.form}>
          <img src={Radius} className={styles.imgRadius} />
          <Login />
        </div>
        <footer className={styles.footer}>
          <img src={LogoIvory} className={styles.logoFooter} />
          <p>Produto desenvolvido por IvoryIt</p>
        </footer>
      </Container>
    </div>

  );
}

export default Autenticacao;

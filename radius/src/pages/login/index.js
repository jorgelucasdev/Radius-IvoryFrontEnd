import React from "react";
import styles from "./index.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Radius from "../../assets/images/logoRadius.png";
import LogoIvory from "../../assets/images/logoIvory.png";
import Login from "./login";
import EsqueciSenha from "./EsqueciSenha";

function Autenticacao() {
  return (
<<<<<<< HEAD
    <Container className={styles.autenticacao}>
      <div className={styles.form}>
        <img src={Radius} className={styles.imgRadius} />
        <Login />
      </div>
      <footer className={styles.footer}>
        <img src={LogoIvory} className={styles.logoFooter} />
          <p>Produto desenvolvido por IvoryIt</p>      
      </footer>
    </Container>
=======
    <div className={styles.autenticacao}>
      <Container className={styles.container}>
        <div className={styles.form}>
          <img src={Radius} className={styles.imgRadius} />
          {/* <Login /> */}
          <EsqueciSenha />
        </div>
        <footer className={styles.footer}>
          <img src={LogoIvory} className={styles.logoFooter} />
          <p>Produto desenvolvido por IvoryIt</p>
        </footer>
      </Container>
    </div>

>>>>>>> esqueciSenha
  );
}

export default Autenticacao;

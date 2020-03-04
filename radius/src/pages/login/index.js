import React from "react";
import styles from "./index.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Radius from "../../assets/images/logoRadius.png";
import LogoIvory from "../../assets/images/logoIvory.png";
import Login from "./login";
import EsqueciSenha from "./EsqueciSenha";
<<<<<<< HEAD
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FaleConosco from "./faleconosco";
=======
import {faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Routes from '../../routes';
>>>>>>> login

function Autenticacao() {
  return (
    <div className={styles.autenticacao}>
      <Container className={styles.container}>
        <Col md={8} className={styles.form}>
<<<<<<< HEAD
          <Col sm={8}>
            <header className={styles.header}>
              <FontAwesomeIcon icon={faAngleLeft} className={styles.icon} />
              <img src={Radius} className={styles.imgRadius} />
            </header>
            {/* <EsqueciSenha /> */}
            {/* <Login /> */}
            <FaleConosco />
          </Col>
=======

<Col sm={8}>
  
<header className={styles.header}>
          <FontAwesomeIcon icon={faAngleLeft} className={styles.icon}/>
            <img src={Radius} className={styles.imgRadius} />
          </header>
          <Routes />

</Col>

          
>>>>>>> login
        </Col>
        <footer className={styles.footer}>
          <img src={LogoIvory} className={styles.logoFooter} />
          <p>Produto desenvolvido por IvoryIt</p>
        </footer>
      </Container>
    </div>
  );
}

export default Autenticacao;

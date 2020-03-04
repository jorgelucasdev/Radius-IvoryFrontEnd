import React from "react";
import styles from "./index.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Radius from "../../assets/images/logoRadius.png";
import LogoIvory from "../../assets/images/logoIvory.png";
import Login from "./login";
import EsqueciSenha from "./EsqueciSenha";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Routes from '../../routes';
import {Link}  from 'react-router-dom';

function Autenticacao() {
  return (
    <div className={styles.autenticacao}>
      <Container className={styles.container}>
        <Col md={8} className={styles.form}>

          <Col sm={8}>

            <header className={styles.header}>
              <a href="#"><FontAwesomeIcon icon={faAngleLeft} className={styles.icon} /></a>
              <img src={Radius} className={styles.imgRadius} />
            </header>
            <Routes/>
            {/* <EsqueciSenha /> */}
            {/* <Login /> */}

          </Col>


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

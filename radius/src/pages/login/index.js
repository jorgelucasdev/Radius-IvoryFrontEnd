import React from "react";
import styles from "./index.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Radius from "../../assets/images/logoRadius.png";
import LogoIvory from "../../assets/images/logoIvory.png";
import Login from "./login";
import EsqueciSenha from "./EsqueciSenha";
<<<<<<< HEAD
import FaleConosco from "./faleconosco";
=======
import {faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
>>>>>>> esqueciSenha

function Autenticacao() {
  return (
    <div className={styles.autenticacao}>
      <Container className={styles.container}>
<<<<<<< HEAD
        <div className={styles.form}>
          <img src={Radius} className={styles.imgRadius} />
          <Login />
        </div>
=======
        <Col md={8} className={styles.form}>

<Col sm={8}>
  
<header className={styles.header}>
          <FontAwesomeIcon icon={faAngleLeft} className={styles.icon}/>
            <img src={Radius} className={styles.imgRadius} />
          </header>
          <EsqueciSenha/>
          {/* <Login /> */}

</Col>

          
        </Col>
>>>>>>> esqueciSenha
        <footer className={styles.footer}>
          <img src={LogoIvory} className={styles.logoFooter} />
          <p>Produto desenvolvido por IvoryIt</p>
        </footer>
      </Container>
    </div>

  );
}

export default Autenticacao;

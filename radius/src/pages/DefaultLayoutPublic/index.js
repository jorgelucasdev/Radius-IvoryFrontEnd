import React, { Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import Radius from "../../assets/images/logoRadius.png";
import LogoIvory from "../../assets/images/logoIvory.png";

import styles from "./index.module.scss";

function DefaultLayoutPublic(props) {
  const { route } = props;

  console.log(props);

  return (
    <div className={styles.autenticacao}>
      <Container className={styles.container}>
        <Col md={8} className={styles.form}>
          <Col sm={8}>
            <header className={styles.header}>
              <Link to={"/login"}>
                <FontAwesomeIcon icon={faAngleLeft} className={styles.icon} />
              </Link>

              <img src={Radius} className={styles.imgRadius} />
            </header>

            <Suspense fallback={<main>Carregando...</main>}>
              {route.component ? (
                <Route
                  path={route.path}
                  exact={route.exact}
                  render={props => <route.component {...props} />}
                />
              ) : null}
            </Suspense>
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

export default DefaultLayoutPublic;

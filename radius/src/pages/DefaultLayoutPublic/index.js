import React, { Suspense, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import Radius from "../../assets/images/logoRadius.png";
import LogoIvory from "../../assets/images/logoIvory.png";

import styles from "./index.module.scss";

const DefaultLayoutPublic = props => {
  const [pathname, setPathname] = useState(props.history.location.pathname);
  const { route } = props;

  console.log(props);

  props.history.listen((location, action) => {
    // location is an object like window.location
    console.log(action, location.pathname, location.state);
    setPathname(location.pathname);
  });

  return (
    <div className={styles.autenticacao}>
      <Container className={styles.container}>
        <Col md={8} className={styles.form}>
          <Col sm={8}>
            <header className={styles.header}>
              {pathname != "/login" ? (
                <Link to={"/login"}>
                  <FontAwesomeIcon icon={faAngleLeft} className={styles.icon} />
                </Link>
              ) : null}

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
};

export default withRouter(DefaultLayoutPublic);

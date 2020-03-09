import React, { Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

import Radius from "../../assets/images/logoRadius.png";
import LogoIvory from "../../assets/images/logoIvory.png";

import styles from "./index.module.scss";

function DefaultLayoutPublic(props) {
    const { routes } = props;

    return (
        <div className={styles.autenticacao}>
            <Container className={styles.container}>
                <Col md={8} className={styles.form}>
                    <Col sm={8}>

                        <header className={styles.header}>
                            <a href="javascript:history.back()">
                                <FontAwesomeIcon icon={faAngleLeft} className={styles.icon} />
                            </a>

                            <img src={Radius} className={styles.imgRadius} />
                        </header>


                        <BrowserRouter>
                            <Suspense
                                fallback={<main>Carregando...</main>}
                            >
                                <Switch>
                                    {routes.map((route, index) => {
                                        return route.component ? (
                                            <Route
                                                key={index}
                                                path={route.path}
                                                exact={route.exact}
                                                render={props => <route.component {...props} />}
                                            />
                                        ) : null;
                                    })}
                                </Switch>
                            </Suspense>
                        </BrowserRouter>




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

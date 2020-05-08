import React, { Component, Suspense, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styles from "./index.module.scss";
import { Container, Row, Col, Nav, Navbar, NavDropdown } from "react-bootstrap";
import {
  faBars,
  faUserCircle,
  faAngleRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'styled-components';
import './AuxStyles.css';
import LogoRadius from "../../assets/images/logoRadius.png";
import LogoIvory from "../../assets/images/logoIvory.png";

function DefaultLayoutPublic(props) {
  const { routes } = props;
  const [isOpen, updateIsOpen] = useState(false);
  return (
    <div className={styles.layout}>
      <div className="relative">
        <header className={styles.cabecalho}>
          <Row className={[styles.principalCabecalho, !isOpen ? styles.active : null].join(' ')}>
            <Col className={styles.colEsquerda}>
              <div onClick={() => updateIsOpen(!isOpen)}>
                <FontAwesomeIcon icon={faBars} className={[styles.iconMenu, !isOpen ? styles.activeIcon : null].join(' ')} />
              </div>
              <div className={[styles.imgLogo, !isOpen ? styles.activeLogo : null].join(' ')}>
                <img src={LogoRadius} />
              </div>
            </Col>
            <Col className={styles.colDireita}>
              <div className={styles.divDireita}>
               
                <i className={'icon-pesquisa'}></i>
                <input type="text" placeholder="Pesquisar"></input>

                <i className={'icon-sino'}></i>
                <span>Bem vindo, João Silva</span>
                <FontAwesomeIcon
                  icon={faUserCircle}
                  className={styles.iconUser}
                />
                <i className={'icon-logoff'}></i>
              </div>
            </Col>
          </Row>
        </header>
        <nav className={[styles.sidebar, !isOpen ? styles.active : null].join(' ')}>
          <ul>
            <li><a href="#">Home</a></li>
            <li>
              <a href="#">Chamados <FontAwesomeIcon icon={faAngleRight} className={styles.iconSeta}/></a>

              <ul>
                <li><a href="#">Novo</a></li>
                <li><a href="#">Consulta</a></li>
              </ul>
            </li>
            <li>
              <a href="#">Cadastro <FontAwesomeIcon icon={faAngleRight} className={styles.iconSeta}/></a>
              <ul>
                <li><a href="#">Sistema</a></li>
                <li><a href="#">Cliente</a></li>
                <li><a href="#">Usuário</a></li>
                <li><a href="#">Funcionário</a></li>
              </ul>
            </li>
            <li><a href="#">Gerenciamentos</a></li>
            <li><a href="#">Gráficos</a></li>
            <li><a href="#">Base De Conhecimento</a></li>
          </ul>
        </nav>
        <main className={[styles.principal, !isOpen ? styles.active : null].join(' ')}>
          <BrowserRouter>
            <Suspense fallback={<main>Carregando...</main>}>
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
        </main>
      </div>
      <footer className={styles.rodape}>
        <Container className={["flex"]}>
          <Col className={["flex", styles.colRodape]}>
            <img src={LogoIvory} />
            <span>Produto desenvolvido por Ivory It</span>
          </Col>
        </Container>
      </footer>
    </div>
  );
}

export default DefaultLayoutPublic;

import React, { Component, Suspense } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import styles from "./index.module.scss";
import { Container, Row, Col, Nav, Navbar, NavDropdown } from "react-bootstrap";
import {
  faBars,
  faBell,
  faUserCircle,
  faSignOutAlt,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoRadius from "../../assets/images/logoRadius.png";
import LogoIvory from "../../assets/images/logoIvory.png";

function DefaultLayoutPublic(props) {
  const { routes } = props;

  return (
    <div className={styles.layout}>
      <div>
        <header className={styles.cabecalho}>
          <Container className={styles.container}>
            <Col md={10} className={styles.colPrincipal}>
              <Row>
                <Col className={styles.colEsquerda}>
                  <div>
                    <FontAwesomeIcon
                      icon={faBars}
                      className={styles.iconMenu}
                    />
                  </div>
                  <div className={styles.imgLogo}>
                    <img src={LogoRadius} />
                  </div>
                </Col>
                <Col className={styles.colDireita}>
                  <div className={styles.divDireita}>
                    <FontAwesomeIcon
                      icon={faSearch}
                      className={styles.iconPesquisa}
                    />
                    <input type="text" placeholder="Pesquisar"></input>

                    <FontAwesomeIcon
                      icon={faBell}
                      className={styles.iconSino}
                    />
                    <span>Bem vindo, João Silva</span>
                    <FontAwesomeIcon
                      icon={faUserCircle}
                      className={styles.iconUser}
                    />
                    <FontAwesomeIcon
                      icon={faSignOutAlt}
                      className={styles.iconSair}
                    />
                  </div>
                </Col>
              </Row>
            </Col>
          </Container>
        </header>
        <Navbar expand="lg" className="flex-column">
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="#">Home</Nav.Link>
              <NavDropdown
                title="Chamados"
                id="basic-nav-dropdown"
                className="dropright"
              >
                <NavDropdown.Item href="#">Novo</NavDropdown.Item>
                <NavDropdown.Item href="#">Consulta</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Cadastro"
                id="basic-nav-dropdown"
                className="dropright"
              >
                <NavDropdown.Item href="#">Sistema</NavDropdown.Item>
                <NavDropdown.Item href="#">Cliente</NavDropdown.Item>
                <NavDropdown.Item href="#">Usuário</NavDropdown.Item>
                <NavDropdown.Item href="#">Funcionário</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Gerenciamentos</Nav.Link>
              <Nav.Link href="#">Gráficos</Nav.Link>
              <Nav.Link href="#">Base De Conhecimento</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <main className={styles.principal}>
          <Container className={styles.containerPrincipal}>
            <Col md={10} className={styles.colCentral}>
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
            </Col>
          </Container>
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

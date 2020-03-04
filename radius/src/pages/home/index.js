import React from "react";
import styles from "./index.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import {
  faBars,
  faBell,
  faUserCircle,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LogoRadius from "../../assets/images/logoRadius.png";
import LogoIvory from "../../assets/images/logoIvory.png";

function Home() {
  return (
    <div className={styles.layout}>
      <div>
        <header className={styles.cabecalho}>
          <Container>
            <Row>
              <Col className={styles.colEsquerda} md={6}>
                <div>
                  <FontAwesomeIcon icon={faBars} className={styles.iconMenu} />
                </div>
                <div className={styles.imgLogo}>
                  <img src={LogoRadius} />
                </div>
              </Col>
              <Col className={styles.colDireita} md={6}>
                <div className={styles.divDireita}>
                  <FontAwesomeIcon icon={faBell} className={styles.iconSino} />
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
          </Container>
        </header>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Chamados</Nav.Link>
          <Nav.Link href="#">Cadastro</Nav.Link>
          <Nav.Link href="#">Gerenciamentos</Nav.Link>
          <Nav.Link href="#">Gráficos</Nav.Link>
          <Nav.Link href="#">Base De Conhecimento</Nav.Link>
        </Nav>
        {/* <main className={styles.principal}>
          <p>Teste2</p>
        </main> */}
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

export default Home;

import React from "react";
import styles from "./index.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import {
  faBars,
  faBell,
  faUserCircle,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Logo from "../../assets/images/logoRadius.png";

function Home() {
  return (
    <div className={styles.layout}>
      <div>
        <header className={styles.header}>
          <Container>
            <Row>
              <Col className={styles.colLeft} md={6}>
                <div>
                  <FontAwesomeIcon icon={faBars} className={styles.iconMenu} />
                </div>
                <div className={styles.imgLogo}>
                  <img src={Logo} />
                </div>
              </Col>
              <Col className={styles.colRight} md={6}>
                <div>
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
        {/* <nav>
          <p>Teste1</p>
        </nav>
        <main>
          <p>Teste2</p>
        </main> */}
      </div>
      {/* <footer>
        <Container>
          <Col>
            <span>Produto desenvolvido por Ivory It</span>
          </Col>
        </Container>
      </footer> */}
    </div>
  );
}

export default Home;

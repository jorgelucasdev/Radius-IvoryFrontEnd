import React from "react";
import styles from "./faleconosco.module.scss";
import {
  Container,
  Row,
  Col,
  Form,
  Grid,
  FormGroup,
  Button
} from "react-bootstrap";

function FaleConosco() {
  return (
    <Container className={styles.faleconosco}>
      <Row className={styles.text}>
        <p className={styles.title}>Fale conosco</p>
      </Row>

      <Row className={styles.text}>
        <p className={styles.subtitle}>Insira seus dados nos campos abaixo.</p>
      </Row>

      <body className={styles.form}>
        <Row>
          <Col>
            <Row>
              <label className={styles.labelNome}>Nome:</label>
            </Row>
            <Row>
              <input className={styles.inputNome}></input>
            </Row>
          </Col>

          {/* <Col md={{offset: 1}}> */}
          <Col className={styles.col2}>
            <Row>
              <label className={styles.labelEmail}>Email:</label>
            </Row>
            <Row>
              <input className={styles.inputEmail}></input>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <Row>
              <label className={styles.labelNomeDaEmpresa}>
                Nome da Empresa:
              </label>
            </Row>
            <Row>
              <input className={styles.inputNomeDaEmpresa}></input>
            </Row>
          </Col>

          <Col className={styles.col2}>
            <Row>
              <label className={styles.labelAssunto}>Assunto:</label>
            </Row>
            <Row>
              <input className={styles.inputAssunto}></input>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <label className={styles.labelMensagem}>Mensagem:</label>
            </Row>
            <Row>
              <textarea className={styles.inputMensagem}></textarea>
            </Row>
          </Col>
        </Row>
        <Row>
          <button className={styles.btnEnviar}>ENVIAR</button>
        </Row>
      </body>
    </Container>
  );
}
export default FaleConosco;

import React from "react";
import styles from "./faleconosco.module.scss";
import {
  Row,
  Col,
} from "react-bootstrap";


function FaleConosco() {
  return (
    <div className={styles.faleconosco}>
      <Row className={styles.text}>
        <p className={styles.title}>Fale conosco</p>
      </Row>

      <div className={styles.form}>
        <Row>
          <Col>
            <Row>
              <label className={styles.label}>Nome:</label>
            </Row>
            <Row>
              <input type ="text" className={styles.input}></input>
            </Row>
          </Col>

          <Col>
            <Row>
              <label className={styles.label}>Email:</label>
            </Row>
            <Row>
              <input type ="text" className={styles.input}></input>
            </Row>
          </Col>
        </Row>

        <Row>
          <Col>
            <Row>
              <label className={styles.label}>
                Nome da Empresa:
              </label>
            </Row>
            <Row>
              <input type ="text" className={styles.input}></input>
            </Row>
          </Col>

          <Col className={styles.col2}>
            <Row>
              <label className={styles.label}>Assunto:</label>
            </Row>
            <Row>
              <input type ="text" className={styles.input}></input>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <Row>
              <label className={styles.label}>Mensagem:</label>
            </Row>
            <Row>
              <textarea className={styles.inputMensagem}></textarea>
            </Row>
          </Col>
        </Row>
        <Row>
          <button className={styles.btnEnviar}>ENVIAR</button>
        </Row>
      </div>
    </div>
  );
}
export default FaleConosco;

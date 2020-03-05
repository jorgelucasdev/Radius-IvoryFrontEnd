import React from "react";
import styles from "./faleconosco.module.scss";
import {
  Row,
  Col,
} from "react-bootstrap";


function FaleConosco() {
  return (
    <div className={styles.faleconosco}>
                <header className={styles.header}>
                    <p className={styles.title}>Fale conosco</p>
                    <p className={styles.subtitle}>Insira seus dados nos campos abaixo.</p>
                </header>

      <div className={styles.form}>
        <Row>
          <Col>
              <label className={styles.label}>Nome:</label>
              <input type ="text" className={styles.input}></input>
          </Col>

          {/* <Col className={styles.col2} md={{offset: 1}}> */}
          <Col className={styles.col2}>
              <label className={styles.label}>Email:</label>
              <input type ="text" className={styles.input}></input>
          </Col>
        </Row>

        <Row>
          <Col>
              <label className={styles.label}>
                Nome da Empresa:
              </label>
              <input type ="text" className={styles.input}></input>
          </Col>

          <Col className={styles.col2}>
              <label className={styles.label}>Assunto:</label>
              <input type ="text" className={styles.input}></input>
          </Col>
        </Row>
        <Row>
          <Col>

              <label className={styles.label}>Mensagem:</label>
              <textarea className={styles.inputMensagem}></textarea>
          </Col>
        </Row>
<<<<<<< Updated upstream
          <button className={styles.btnEnviar}>ENVIAR</button>
=======
        
          <button className={styles.btnEnviar}>ENVIAR</button>
        
>>>>>>> Stashed changes
      </div>
    </div>
  );
}
export default FaleConosco;

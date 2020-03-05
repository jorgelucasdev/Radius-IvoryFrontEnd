import React from "react";
import styles from "./faleconosco.module.scss";
import {
  Row,
<<<<<<< HEAD
  Col
=======
  Col,
>>>>>>> esqueciSenha
} from "react-bootstrap";


function FaleConosco() {
  return (
    <div className={styles.faleconosco}>
<<<<<<< HEAD
                <header className={styles.header}>
                    <p className={styles.title}>Fale conosco</p>
                    <p className={styles.subtitle}>Insira seus dados nos campos abaixo.</p>
                </header>
=======
      <Row className={styles.text}>
        <p className={styles.title}>Fale conosco</p>
      </Row>

      <Row className={styles.text}>
        <p className={styles.subtitle}>Insira seus dados nos campos abaixo.</p>
      </Row>
>>>>>>> esqueciSenha

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

<<<<<<< HEAD
          {/* <Col md={{offset: 1}}> */}
          <Col className={styles.col2}>
=======
          <Col>
>>>>>>> esqueciSenha
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
<<<<<<< HEAD
      </div>
=======
      </body>
>>>>>>> esqueciSenha
    </div>
  );
}
export default FaleConosco;

import React from "react";
import styles from "./faleconosco.module.scss";
import { Container, Row, Col, Form, Grid , FormGroup } from "react-bootstrap";


function FaleConosco() {
  return (
    <Container className={styles.faleconoscoContainer}>
    <div className= {styles.Header}>
      <Row className={styles.textTitle}>
        <p className={styles.title1}>Fale conosco</p>
        <p className={styles.title2}>Insira seus dados nos campor abaixo.</p>
      </Row>
      </div>
      <Form>
        <Form.Row>
          <Form.Group as={Col} md="2" controlId="formGridNome">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="nome"/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email"/>
          </Form.Group>
        </Form.Row>
      </Form>
    </Container>

  );
}
export default FaleConosco;

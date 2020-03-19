import React from "react";
import styles from "./CadastroClientes.module.scss";
import { Row, Col, Card, Button } from "react-bootstrap";

const CadastroClientes = () => {
  return (
    <div className={styles.conteudo}>
      <h1>Home > Cadastro > Clientes</h1>

      <div className={styles.conteudoPrincipal}>
        <Card className={styles.novoCliente}>
          <Card.Header as="h5" className={styles.headerNovoCliente}>
            Novo Cliente
          </Card.Header>
          <Card.Body className={styles.bodyNovoCliente}>
            <Row >
              <Col></Col>

              <Col></Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default CadastroClientes;

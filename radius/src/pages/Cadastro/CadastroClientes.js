import React, { useState } from "react";
import { useFormik } from "formik";
import styles from "./CadastroClientes.module.scss";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";
import "react-datepicker/dist/react-datepicker.css";
import "styled-components";
import "./AuxStyles.css";

const CadastroClientes = () => {
  registerLocale("pt-BR", ptBR);
  const [startDate, setStartDate] = useState(new Date());

  const formik = useFormik({
    initialValues: {
      dataCadastro: "",
      dataContrato: ""
    }
  });
  return (
    <div className={styles.conteudo}>
      <h1>Home > Cadastro > Clientes</h1>

      <div className={styles.conteudoPrincipal}>
        <Card className={styles.novoCliente}>
          <Card.Header as="h5" className={styles.headerNovoCliente}>
            Novo Cliente
          </Card.Header>
          <Card.Body className={styles.bodyNovoCliente}>
            <Row className={styles.rowInputs}>
              <Col>
                <Form>
                  <Form.Group controlId="formCNPJ">
                    <Form.Label>CNPJ:</Form.Label>
                    <Form.Control size="sm" type="text" />
                  </Form.Group>
                </Form>
              </Col>
              <Col>
                <Form>
                  <Form.Group controlId="formRazaoSocial">
                    <Form.Label>Razão Social:</Form.Label>
                    <Form.Control size="sm" type="text" />
                  </Form.Group>
                </Form>
              </Col>
            </Row>

            <Row className={styles.rowInputs}>
              <Col>
                <Form>
                  <Form.Group controlId="formNomeFantasia">
                    <Form.Label>Nome Fantasia:</Form.Label>
                    <Form.Control size="sm" type="text" />
                  </Form.Group>
                </Form>
              </Col>
              <Col>
                <Form>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control size="sm" type="text" />
                  </Form.Group>
                </Form>
              </Col>
            </Row>

            <Row className={styles.rowInputs}>
              <Col md={6}>
                <Form>
                  <Form.Group controlId="formEndereco">
                    <Form.Label>Endereço:</Form.Label>
                    <Form.Control size="sm" type="text" />
                  </Form.Group>
                </Form>
              </Col>
              <Col>
                <Form>
                  <Form.Group controlId="formCidade">
                    <Form.Label>Cidade:</Form.Label>
                    <Form.Control size="sm" type="text" />
                  </Form.Group>
                </Form>
              </Col>
              <Col>
                <Form>
                  <Form.Group controlId="formUF">
                    <Form.Label>UF:</Form.Label>
                    <Form.Control size="sm" type="text" />
                  </Form.Group>
                </Form>
              </Col>
            </Row>

            <Row className={styles.rowInputs}>
              <Col>
                <Form>
                  <Form.Group controlId="formNomeFantasia">
                    <Form.Label>CEP:</Form.Label>
                    <Form.Control size="sm" type="text" />
                  </Form.Group>
                </Form>
              </Col>
              <Col>
                <Form>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Telefone:</Form.Label>
                    <Form.Control size="sm" type="text" />
                  </Form.Group>
                </Form>
              </Col>
              <Col>
                <Form>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Data cadastro:</Form.Label>
                    <DatePicker
                      showPopperArrow={false}
                      dateFormat="dd/MM/yyyy"
                      selected={formik.values.dataCadastro}
                      locale="pt-BR"
                      name="dataCadastro"
                      onChange={date => {
                        formik.setFieldValue("dataCadastro", date);
                      }}
                      onBlur={formik.handleBlur}
                      autoComplete="off"
                      className={styles.calendario}
                    />
                    <i className={"icon-calendario"}></i>
                  </Form.Group>
                </Form>
              </Col>
              <Col>
                <Form>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Encerramento contrato:</Form.Label>
                    <DatePicker
                      showPopperArrow={false}
                      dateFormat="dd/MM/yyyy"
                      selected={formik.values.dataContrato}
                      locale="pt-BR"
                      name="dataContrato"
                      onChange={date => {
                        formik.setFieldValue("dataContrato", date);
                      }}
                      onBlur={formik.handleBlur}
                      autoComplete="off"
                      className={styles.calendario}
                    />
                    <i className={"icon-calendario"}></i>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
            <Row className={styles.rowButtons}>
              <Col>
              <span>*Todos os campos são obrigatórios</span>
              </Col>
              <Col className={styles.buttons}>
                <Button variant="secondary" className={styles.btn1}>Cancelar</Button>
                <Button variant="primary">Salvar</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default CadastroClientes;

import React, { useState } from "react";
import { useFormik } from "formik";
import styles from "./CadastroClientes.module.scss";
import { Row, Col, Card, Form } from "react-bootstrap";
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
      dataInicial: "",
      dataFinal: ""
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
            <Row>
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

            <Row>
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

            <Row>
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

            <Row>
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
                      name="dataInicial"
                      dateFormat="dd/MM/yyyy"
                      selected={formik.values.dataInicial}
                      locale="pt-BR"
                      showPopperArrow={false}
                      onChange={date => {
                        formik.setFieldValue("dataInicial", date);
                      }}
                      className={styles.data}
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
                      name="dataInicial"
                      dateFormat="dd/MM/yyyy"
                      selected={formik.values.dataInicial}
                      locale="pt-BR"
                      showPopperArrow={false}
                      onChange={date => {
                        formik.setFieldValue("dataInicial", date);
                      }}
                      className={styles.data}
                    />
                    <i className={"icon-calendario"}></i>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default CadastroClientes;

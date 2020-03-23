import React, { useState } from "react";
import { useFormik } from "formik";
import styles from "./CadastroClientes.module.scss";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import SelectBox from "../../components/SelectBox";
import Cleave from "cleave.js/react";
import CleavePhone from "cleave.js/dist/addons/cleave-phone.br";
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";
import "react-datepicker/dist/react-datepicker.css";
import "styled-components";
import "./AuxStyles.css";

const CadastroClientes = props => {
  registerLocale("pt-BR", ptBR);
  const [startDate, setStartDate] = useState(new Date());

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" }
  ];

  const formik = useFormik({
    initialValues: {
      cnpj: "",
      razaoSocial: "",
      nomeFantasia: "",
      email: "",
      endereco: "",
      cidade: "",
      uf: "",
      cep: "",
      telefone: "",
      dataCadastro: "",
      dataContrato: ""
    }
  });
  return (
    <div className={styles.principal}>
      <h1>Home > Cadastro > Clientes</h1>

      <div className={styles.conteudo}>
        <form>
          <div className={styles.conteudoSection}>
            <Card className={styles.novoCliente}>
              <Card.Header as="h5" className={styles.headerNovoCliente}>
                Novo Cliente
              </Card.Header>
              <Card.Body className={styles.bodyNovoCliente}>
                <Row className={styles.rowInputs}>
                  <Col className={styles.teste}>
                    <label for="">CNPJ:</label>
                    <input type="text" name="cnpj" id=""></input>
                  </Col>
                  <Col>
                    <label for="">Razão Social:</label>
                    <input type="text" name="razaoSocial" id=""></input>
                  </Col>
                </Row>

                <Row className={styles.rowInputs}>
                  <Col>
                    <label for="">Nome Fantasia:</label>
                    <input type="text" name="nomeFantasia" id=""></input>
                  </Col>
                  <Col>
                    <label for="">Email:</label>
                    <input type="text" name="email" id=""></input>
                  </Col>
                </Row>

                <Row className={styles.rowInputs}>
                  <Col md={6}>
                    <label for="">Endereço:</label>
                    <input type="text" name="endereco" id=""></input>
                  </Col>
                  <Col>
                    <label for="">Cidade:</label>
                    <input type="text" name="cidade" id=""></input>
                  </Col>
                  <Col>
                    <label for="">UF:</label>
                    <SelectBox
                      value={formik.values.uf}
                      name={"uf"}
                      id=""
                      placeholder={"Selecione"}
                      onChange={formik.setFieldValue}
                      onBlur={formik.setFieldTouched}
                      error={formik.errors.uf}
                      touched={formik.touched.uf}
                      styleMsgError={styles.msgError}
                      options={options}
                    />
                  </Col>
                </Row>

                <Row className={styles.rowInputs}>
                  <Col>
                    <label for="">CEP:</label>
                    <Cleave
                      name="cep"
                      id=""
                      options={{
                        blocks: [5, 3],
                        delimiter: "-",
                        numericOnly: true
                      }}
                    />
                  </Col>
                  <Col>
                    <label for="">Telefone:</label>
                    <Cleave
                      name="telefone"
                      id=""
                      options={{ phone: true, phoneRegionCode: "BR" }}
                    />
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
                    <Col>
                      <Button variant="secondary">Cancelar</Button>
                    </Col>
                    <Col>
                      <Button variant="primary">Salvar</Button>
                    </Col>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
        </form>

        <div className={styles.conteudoAside}>
          <Card className={styles.clientes}>
            <Card.Header as="h5" className={styles.headerClientes}>
              Clientes
            </Card.Header>
            <Card.Body className={styles.bodyListagemClientes}>
              <div className={styles.button}>
                <div className={styles.icon}>
                  <i className={"icon-listagemclientes"}></i>
                </div>
                <div className={styles.desc}>
                  <span>
                    LISTAGEM <br />
                    CLIENTES
                  </span>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CadastroClientes;

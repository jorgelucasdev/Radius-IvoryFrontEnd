import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
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

  const validarCampos = Yup.object().shape({
    cnpj: Yup.string()
      .nullable()
      .min(5, "O campo precisa ter um mínino de 5 caracteres")
      .required("Campo obrigatório"),
    razaoSocial: Yup.string()
      .nullable()
      .min(5, "O campo precisa ter um mínino de 5 caracteres")
      .required("Campo obrigatório"),
    nomeFantasia: Yup.string()
      .nullable()
      .min(5, "O campo precisa ter um mínino de 5 caracteres")
      .required("Campo obrigatório"),
    email: Yup.string()
      .nullable()
      .required("Campo obrigatório"),
    endereco: Yup.string()
      .nullable()
      .min(5, "O campo precisa ter um mínino de 5 caracteres")
      .required("Campo obrigatório"),
    cidade: Yup.string()
      .min(5, "O campo precisa ter um mínino de 5 caracteres")
      .required("Campo obrigatório"),
    uf: Yup.string()
      .nullable()
      .required("Campo obrigatório"),
    cep: Yup.string()
      .nullable()
      .required("Campo obrigatório"),
    telefone: Yup.string()
      .nullable()
      .required("Campo obrigatório"),
    dataCadastro: Yup.string()
      .nullable()
      .required("Campo obrigatório"),
    dataContrato: Yup.string()
      .nullable()
      .required("Campo obrigatório")
  });

  const formik = useFormik({
    enableReinitialize: true,
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
    },
    validationSchema: validarCampos,
    onSubmit: ""
  });
  return (
    <div className={styles.principal}>
      <h1>Home > Cadastro > Clientes</h1>

      <div className={styles.conteudo}>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.conteudoSection}>
            <Card className={styles.novoCliente}>
              <Card.Header as="h5" className={styles.headerNovoCliente}>
                Novo Cliente
              </Card.Header>
              <Card.Body className={styles.bodyNovoCliente}>
                <Row className={styles.rowInputs}>
                  <Col>
                    <label for="">CNPJ:</label>
                    <input
                      type="text"
                      name="cnpj"
                      id=""
                      value={formik.values.cnpj}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="off"
                    ></input>
                    {formik.errors.cnpj && formik.touched.cnpj ? (
                      <div className={styles.msgError}>
                        {formik.errors.cnpj}
                      </div>
                    ) : null}
                  </Col>
                  <Col>
                    <label for="">Razão Social:</label>
                    <input
                      type="text"
                      name="razaoSocial"
                      id=""
                      value={formik.values.razaoSocial}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="off"
                    ></input>
                    {formik.errors.razaoSocial && formik.touched.razaoSocial ? (
                      <div className={styles.msgError}>
                        {formik.errors.razaoSocial}
                      </div>
                    ) : null}
                  </Col>
                </Row>

                <Row className={styles.rowInputs}>
                  <Col>
                    <label for="">Nome Fantasia:</label>
                    <input
                      type="text"
                      name="nomeFantasia"
                      id=""
                      value={formik.values.nomeFantasia}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="off"
                    ></input>
                    {formik.errors.nomeFantasia &&
                    formik.touched.nomeFantasia ? (
                      <div className={styles.msgError}>
                        {formik.errors.nomeFantasia}
                      </div>
                    ) : null}
                  </Col>
                  <Col>
                    <label for="">Email:</label>
                    <input
                      type="text"
                      name="email"
                      id=""
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="off"
                    ></input>
                    {formik.errors.email && formik.touched.email ? (
                      <div className={styles.msgError}>
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </Col>
                </Row>

                <Row className={styles.rowInputs}>
                  <Col md={6}>
                    <label for="">Endereço:</label>
                    <input
                      type="text"
                      name="endereco"
                      id=""
                      value={formik.values.endereco}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="off"
                    ></input>
                    {formik.errors.endereco && formik.touched.endereco ? (
                      <div className={styles.msgError}>
                        {formik.errors.endereco}
                      </div>
                    ) : null}
                  </Col>
                  <Col>
                    <label for="">Cidade:</label>
                    <input
                      type="text"
                      name="cidade"
                      id=""
                      value={formik.values.cidade}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="off"
                    ></input>
                    {formik.errors.cidade && formik.touched.cidade ? (
                      <div className={styles.msgError}>
                        {formik.errors.cidade}
                      </div>
                    ) : null}
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
                      value={formik.values.cep}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="off"
                    />
                    {formik.errors.cep && formik.touched.cep ? (
                      <div className={styles.msgError}>{formik.errors.cep}</div>
                    ) : null}
                  </Col>
                  <Col>
                    <label for="">Telefone:</label>
                    <Cleave
                      name="telefone"
                      id=""
                      options={{ phone: true, phoneRegionCode: "BR" }}
                      value={formik.values.telefone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="off"
                    />
                    {formik.errors.telefone && formik.touched.telefone ? (
                      <div className={styles.msgError}>
                        {formik.errors.telefone}
                      </div>
                    ) : null}
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
                        {formik.errors.dataCadastro &&
                        formik.touched.dataCadastro ? (
                          <div className={styles.msgError}>
                            {formik.errors.dataCadastro}
                          </div>
                        ) : null}
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
                        {formik.errors.dataContrato &&
                        formik.touched.dataContrato ? (
                          <div className={styles.msgError}>
                            {formik.errors.dataContrato}
                          </div>
                        ) : null}
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>
                <Row className={styles.rowButtons}>
                  <Col>
                    <span>* Todos os campos são obrigatórios</span>
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

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./CadastroUsuarios.module.scss";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import SelectBox from "../../components/SelectBox";
import ButtonCustom from "../../components/ButtonCustom";
import Cleave from "cleave.js/react";
import CleavePhone from "cleave.js/dist/addons/cleave-phone.br";
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import "styled-components";
import "./AuxStyles.css";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const CadastroUsuarios = (props) => {
  registerLocale("pt-BR", ptBR);

  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());

  // const options = [
  //   { value: "chocolate", label: "Chocolate" },
  //   { value: "strawberry", label: "Strawberry" },
  //   { value: "vanilla", label: "Vanilla" }
  // ];
  const DropdownIndicator = (props) => {
    return <i className={[styles.arrow, "icon-setasduplas"].join(" ")}></i>;
  };

  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
    }),

    control: (_, { selectProps: { width } }) => ({}),
  };

  const StatusOptions = [
    { value: "ativo", label: "Ativo" },
    { value: "pendente", label: "Pendente" },
    { value: "cancelado", label: "Cancelado" },
    { value: "concluido", label: "Concluido" },
  ];

  const validarCampos = Yup.object().shape({
    nome: Yup.string().nullable().required("Campo obrigatório"),
    cpf: Yup.string()
      .nullable()
      .min(14, "O campo precisa ter um mínino de 11 caracteres")
      .required("Campo obrigatório"),
    cargo: Yup.string().nullable().required("Campo obrigatório"),
    setor: Yup.string().nullable().required("Campo obrigatório"),
    email: Yup.string()
      .email("Email inválido")
      .nullable()
      .required("Campo obrigatório"),
    dataInicio: Yup.string().required("Campo obrigatório"),
    dataFim: Yup.string().nullable().required("Campo obrigatório"),
    telefone: Yup.string()
      .nullable()
      .min(14, "O campo precisa ter um mínino de 8 caracteres")
      .required("Campo obrigatório"),
    celular: Yup.string()
      .nullable()
      .min(15, "O campo precisa ter um mínino de 9 caracteres")
      .required("Campo obrigatório"),
    whatsapp: Yup.string()
      .nullable()
      .min(15, "O campo precisa ter um mínino de 9 caracteres")
      .required("Campo obrigatório"),
    dataAniversario: Yup.string().nullable().required("Campo obrigatório"),
    observacoes: Yup.string().nullable().required("Campo obrigatório"),
    status: Yup.string().nullable().required("Campo obrigatório"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      nome: "",
      cpf: "",
      cargo: "",
      setor: "",
      email: "",
      dataInicio: "",
      dataFim: "",
      telefone: "",
      celular: "",
      whatsapp: "",
      dataAniversario: "",
      observacoes: "",
      status: "",
    },
    validationSchema: validarCampos,
    onSubmit: "",
  });
  return (
    <div className={styles.principal}>
      <h1>
        Cadastro > Usuário > <span>Novo Usuário</span>
      </h1>
      <div className={styles.conteudo}>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.conteudoSection}>
            <Card className={styles.novoUsuario}>
              <Card.Header as="h5" className={styles.headerNovoUsuario}>
                Novo Usuário
              </Card.Header>
              <Card.Body className={styles.bodyNovoUsuario}>
                <Row className={styles.rowInputs}>
                  <Col>
                    <label for="">Nome:</label>
                    <input
                      type="text"
                      name="nome"
                      id=""
                      value={formik.values.nome}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="off"
                    ></input>
                    {formik.errors.nome && formik.touched.nome ? (
                      <div className={styles.msgError}>
                        {formik.errors.nome}
                      </div>
                    ) : null}
                  </Col>
                  <Col>
                    <label for="">CPF:</label>
                    <Cleave
                      name="cpf"
                      id=""
                      placeholder="XXX.XXX.XXX-XX"
                      options={{
                        blocks: [3, 3, 3, 2],
                        delimiters: [".", ".", "-"],
                        numericOnly: true,
                      }}
                      value={formik.values.cpf}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="off"
                    />
                    {formik.errors.cpf && formik.touched.cpf ? (
                      <div className={styles.msgError}>{formik.errors.cpf}</div>
                    ) : null}
                  </Col>
                </Row>

                <Row className={styles.rowInputs}>
                  <Col>
                    <label for="">Cargo:</label>
                    <input
                      type="text"
                      name="cargo"
                      id=""
                      value={formik.values.cargo}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="off"
                    ></input>
                    {formik.errors.cargo && formik.touched.cargo ? (
                      <div className={styles.msgError}>
                        {formik.errors.cargo}
                      </div>
                    ) : null}
                  </Col>
                  <Col>
                    <label for="">Setor:</label>
                    <input
                      type="text"
                      name="setor"
                      id=""
                      value={formik.values.setor}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="off"
                    ></input>
                    {formik.errors.setor && formik.touched.setor ? (
                      <div className={styles.msgError}>
                        {formik.errors.setor}
                      </div>
                    ) : null}
                  </Col>
                </Row>

                <Row className={styles.rowInputs}>
                  <Col md={6}>
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
                  <Col>
                    <Form>
                      <Form.Group controlId="formEmail">
                        <Form.Label>Data de Início:</Form.Label>
                        <DatePicker
                          showPopperArrow={false}
                          dateFormat="dd/MM/yyyy"
                          selected={formik.values.dataInicio}
                          locale="pt-BR"
                          name="dataInicio"
                          onChange={(date) => {
                            formik.setFieldValue("dataInicio", date);
                          }}
                          onBlur={formik.handleBlur}
                          autoComplete="off"
                          className={styles.calendario}
                        />
                        <i className={"icon-calendario"}></i>
                        {formik.errors.dataInicio &&
                        formik.touched.dataInicio ? (
                          <div className={styles.msgError}>
                            {formik.errors.dataInicio}
                          </div>
                        ) : null}
                      </Form.Group>
                    </Form>
                  </Col>
                  <Col>
                    <Form>
                      <Form.Group controlId="dataFim">
                        <Form.Label>Data de Fim:</Form.Label>
                        <DatePicker
                          showPopperArrow={false}
                          dateFormat="dd/MM/yyyy"
                          selected={formik.values.dataFim}
                          locale="pt-BR"
                          name="dataFim"
                          onChange={(date) => {
                            formik.setFieldValue("dataFim", date);
                          }}
                          onBlur={formik.handleBlur}
                          autoComplete="off"
                          className={styles.calendario}
                        />
                        <i className={"icon-calendario"}></i>
                        {formik.errors.dataFim && formik.touched.dataFim ? (
                          <div className={styles.msgError}>
                            {formik.errors.dataFim}
                          </div>
                        ) : null}
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>

                <Row className={styles.rowInputs}>
                  <Col>
                    <label for="">Telefone:</label>
                    <Cleave
                      name="telefone"
                      id=""
                      placeholder="(XX) XXXX-XXXX"
                      options={{
                        blocks: [0, 2, 4, 4],
                        delimiters: ["(", ") ", "-"],
                        numericOnly: true,
                      }}
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
                    <label for="">Celular:</label>
                    <Cleave
                      name="celular"
                      id=""
                      placeholder="(XX) 9XXXX-XXXX"
                      options={{
                        blocks: [0, 2, 5, 4],
                        delimiters: ["(", ") ", "-"],
                        numericOnly: true,
                      }}
                      value={formik.values.celular}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="off"
                    />
                    {formik.errors.celular && formik.touched.celular ? (
                      <div className={styles.msgError}>
                        {formik.errors.celular}
                      </div>
                    ) : null}
                  </Col>
                  <Col>
                    <label for="">WhatsApp:</label>
                    <Cleave
                      name="whatsapp"
                      id=""
                      options={{
                        blocks: [0, 2, 4, 4],
                        delimiters: ["(", ") 9", "-"],
                        numericOnly: true,
                      }}
                      value={formik.values.whatsapp}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="off"
                      placeholder="(XX) 9XXXX-XXXX"
                    />
                    {formik.errors.whatsapp && formik.touched.whatsapp ? (
                      <div className={styles.msgError}>
                        {formik.errors.whatsapp}
                      </div>
                    ) : null}
                  </Col>
                  <Col>
                    <Form>
                      <Form.Group controlId="formEmail">
                        <Form.Label>Data de Aniversário:</Form.Label>
                        <DatePicker
                          showPopperArrow={false}
                          dateFormat="dd/MM/yyyy"
                          selected={formik.values.dataAniversario}
                          locale="pt-BR"
                          name="dataAniversario"
                          onChange={(date) => {
                            formik.setFieldValue("dataAniversario", date);
                          }}
                          onBlur={formik.handleBlur}
                          autoComplete="off"
                          className={styles.calendario}
                        />
                        <i className={"icon-calendario"}></i>
                        {formik.errors.dataAniversario &&
                        formik.touched.dataAniversario ? (
                          <div className={styles.msgError}>
                            {formik.errors.dataAniversario}
                          </div>
                        ) : null}
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>

                <Row className={styles.rowInputs}>
                  <Col>
                    <label for="">Observações:</label>
                    <input
                      type="text"
                      name="observacoes"
                      id=""
                      value={formik.values.observacoes}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="off"
                    ></input>
                    {formik.errors.observacoes && formik.touched.observacoes ? (
                      <div className={styles.msgError}>
                        {formik.errors.nome}
                      </div>
                    ) : null}
                  </Col>
                </Row>

                <Row className={styles.rowInputs}>
                  <Col>
                    <label for="">Status:</label>
                    {/* <Select placeholder="Selecione" classNamePrefix={'select'}
                                options={StatusOptions} styles={customStyles}
                                components={{ DropdownIndicator }} className={styles.select}
                            /> */}
                    <SelectBox
                      value={formik.values.status}
                      name={"status"}
                      id=""
                      placeholder={"Selecione"}
                      onChange={formik.setFieldValue}
                      onBlur={formik.setFieldTouched}
                      error={formik.errors.status}
                      touched={formik.touched.status}
                      styleMsgError={styles.msgError}
                      options={StatusOptions}
                      components={{ DropdownIndicator }}
                    />
                  </Col>
                  <Col className={styles.buttons}>
                    <Button variant="secondary">CANCELAR</Button>
                    <Button variant="primary">SALVAR</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
        </form>

        <div className={styles.conteudoAside}>
          <ButtonCustom
            title={"Usuários"}
            icon={faUserFriends}
            desc={"LISTAGEM USUÁRIOS"}
            onClick={() => history.push("/Cadastro/ListagemUsuarios")}
          ></ButtonCustom>
        </div>
      </div>
    </div>
  );
};

export default CadastroUsuarios;

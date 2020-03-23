import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from './NovoUsuario.module.scss'
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import SelectBox from "../../components/SelectBox";
import Cleave from "cleave.js/react";
import CleavePhone from "cleave.js/dist/addons/cleave-phone.br";
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";
import "react-datepicker/dist/react-datepicker.css";
import "styled-components";
import "./AuxStyles.css";

const CadastroUsuarios = props => {
  registerLocale("pt-BR", ptBR);
  const [startDate, setStartDate] = useState(new Date());

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" }
  ];

  const validarCampos = Yup.object().shape({
    nome: Yup.string()
      .nullable()
      .min(5, "O campo precisa ter um mínino de 5 caracteres")
      .required("Campo obrigatório"),
    cpf: Yup.string()
      .nullable()
      .min(5, "O campo precisa ter um mínino de 5 caracteres")
      .required("Campo obrigatório"),
    cargo: Yup.string()
      .nullable()
      .min(5, "O campo precisa ter um mínino de 5 caracteres")
      .required("Campo obrigatório"),
    setor: Yup.string()
      .nullable()
      .required("Campo obrigatório"),
    email: Yup.string()
      .nullable()
      .min(5, "O campo precisa ter um mínino de 5 caracteres")
      .required("Campo obrigatório"),
    dataInicio: Yup.string()
      .min(5, "O campo precisa ter um mínino de 5 caracteres")
      .required("Campo obrigatório"),
    dataFim: Yup.string()
      .nullable()
      .required("Campo obrigatório"),
    telefone: Yup.string()
      .nullable()
      .required("Campo obrigatório"),
    celular: Yup.string()
      .nullable()
      .required("Campo obrigatório"),
    whatsapp: Yup.string()
      .nullable()
      .required("Campo obrigatório"),
    dataAniversario: Yup.string()
      .nullable()
      .required("Campo obrigatório")
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
      dataAniversario: ""
    },
    validationSchema: validarCampos,
    onSubmit: ""
  });
  return (
    <div className={styles.principal}>

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
                    <input
                      type="text"
                      name="cpf"
                      id=""
                      value={formik.values.cpf}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="off"
                    ></input>
                    {formik.errors.cpf && formik.touched.cpf ? (
                      <div className={styles.msgError}>
                        {formik.errors.cpf}
                      </div>
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
                    {formik.errors.cargo &&
                    formik.touched.cargo ? (
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
                    <label for="">Data de Início:</label>
                    <input
                      type="text"
                      name="dataInicio"
                      id=""
                      value={formik.values.dataInicio}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="off"
                    ></input>
                    {formik.errors.dataInicio && formik.touched.dataInicio ? (
                      <div className={styles.msgError}>
                        {formik.errors.dataInicio}
                      </div>
                    ) : null}
                  </Col>
                  <Col>
                    <label for="">Data de Fim:</label>
                    <SelectBox
                      value={formik.values.dataFim}
                      name={"dataFim"}
                      id=""
                      placeholder={"Selecione"}
                      onChange={formik.setFieldValue}
                      onBlur={formik.setFieldTouched}
                      error={formik.errors.dataFim}
                      touched={formik.touched.dataFim}
                      styleMsgError={styles.msgError}
                      options={options}
                    />
                  </Col>
                </Row>

                <Row className={styles.rowInputs}>
                  <Col>
                    <label for="">Telefone:</label>
                    <Cleave
                      name="telefone"
                      id=""
                      options={{
                        blocks: [5, 3],
                        delimiter: "-",
                        numericOnly: true
                      }}
                      value={formik.values.telefone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="off"
                    />
                    {formik.errors.telefone && formik.touched.telefone ? (
                      <div className={styles.msgError}>{formik.errors.telefone}</div>
                    ) : null}
                  </Col>
                  <Col>
                    <label for="">Celular:</label>
                    <Cleave
                      name="celular"
                      id=""
                      options={{ phone: true, phoneRegionCode: "BR" }}
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
                    <Form>
                      <Form.Group controlId="formEmail">
                        <Form.Label>WhatsApp:</Form.Label>
                        <DatePicker
                          showPopperArrow={false}
                          dateFormat="dd/MM/yyyy"
                          selected={formik.values.whatsapp}
                          locale="pt-BR"
                          name="whatsapp"
                          onChange={date => {
                            formik.setFieldValue("whatsapp", date);
                          }}
                          onBlur={formik.handleBlur}
                          autoComplete="off"
                          className={styles.calendario}
                        />
                        <i className={"icon-calendario"}></i>
                        {formik.errors.whatsapp &&
                        formik.touched.whatsapp ? (
                          <div className={styles.msgError}>
                            {formik.errors.whatsapp}
                          </div>
                        ) : null}
                      </Form.Group>
                    </Form>
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
                          onChange={date => {
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
          <Card className={styles.usuarios}>
            <Card.Header as="h5" className={styles.headerUsuarios}>
              Usuarios
            </Card.Header>
            <Card.Body className={styles.bodyListagemUsuarios}>
              <div className={styles.button}>
                <div className={styles.icon}>
                  <i className={"icon-listagemclientes"}></i>
                </div>
                <div className={styles.desc}>
                  <span>
                    LISTAGEM <br />
                    USUÁRIOS
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

export default CadastroUsuarios;

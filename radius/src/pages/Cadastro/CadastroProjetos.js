import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./CadastroProjetos.module.scss";
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
  const DropdownIndicator = (props) => {
    return <i className={[styles.arrow, "icon-setasduplas"].join(" ")}></i>;
  };

  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
    }),

    control: (_, { selectProps: { width } }) => ({}),
  };

  const Empresas = [
    { value: "VLI", label: "VLI" },
    { value: "Unilever", label: "Unilever" },
    { value: "3MW", label: "3MW" },
    { value: "Eletronuclear", label: "Eletronuclear" },
  ];

  const validarCampos = Yup.object().shape({
    empresa: Yup.string().nullable().required("Campo obrigatório"),
    cnpj: Yup.string()
      .nullable()
      .min(18, "O campo precisa ter um mínino de 14 caracteres")
      .required("Campo obrigatório"),
    cidade: Yup.string().nullable().required("Campo obrigatório"),
    uf: Yup.string().nullable().required("Campo obrigatório"),
    responsavel: Yup.string().nullable().required("Campo obrigatório"),
    setorResponsavel: Yup.string().nullable().required("Campo obrigatório"),
    telefoneResponsavel: Yup.string()
      .nullable()
      .min(14, "O campo precisa ter um mínino de 8 caracteres")
      .required("Campo obrigatório"),
    emailResponsavel: Yup.string()
      .email("Email inválido")
      .nullable()
      .required("Campo obrigatório"),
    corresponsavel: Yup.string().nullable().required("Campo obrigatório"),
    setorCorresponsavel: Yup.string().nullable().required("Campo obrigatório"),
    telefoneCorresponsavel: Yup.string()
      .nullable()
      .min(14, "O campo precisa ter um mínino de 8 caracteres")
      .required("Campo obrigatório"),
    nome: Yup.string().nullable().required("Campo obrigatório"),
    segmento: Yup.string().nullable().required("Campo obrigatório"),
    dataInicio: Yup.string().required("Campo obrigatório"),
    dataFim: Yup.string().nullable().required("Campo obrigatório"),
    apresentacao: Yup.string().nullable().required("Campo obrigatório"),
    descricao: Yup.string().nullable().required("Campo obrigatório"),
    justificativa: Yup.string().nullable().required("Campo obrigatório"),
    observacaoGeral: Yup.string().nullable().required("Campo obrigatório"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      empresa: "",
      cnpj: "",
      cidade: "",
      uf: "",
      responsavel: "",
      setorResponsavel: "",
      telefoneResponsavel: "",
      emailResponsavel: "",
      corresponsavel: "",
      setorCorresponsavel: "",
      telefoneCorresponsavel: "",
      nome: "",
      segmento: "",
      dataInicio: "",
      dataFim: "",
      apresentacao: "",
      descricao: "",
      justificativa: "",
      observacaoGeral: "",
    },
    validationSchema: validarCampos,
    onSubmit: "",
  });
  return (
    <div className={styles.principal}>
      <h1>
        Cadastro > Projeto > <span>Novo Projeto</span>
      </h1>
      <div className={styles.conteudo}>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.conteudoSection}>
            <Card className={styles.novoUsuario}>
              <Card.Header as="h5" className={styles.headerNovoUsuario}>
                Novo Projeto
              </Card.Header>
              <Card.Body className={styles.bodyNovoUsuario}>
                <Row className={styles.rowInputs}>
                  <Col>
                    <label for="">Empresas:</label>
                    <SelectBox
                      value={formik.values.empresa}
                      name={"empresa"}
                      id=""
                      placeholder={"Selecione"}
                      onChange={formik.setFieldValue}
                      onBlur={formik.setFieldTouched}
                      error={formik.errors.empresa}
                      touched={formik.touched.empresa}
                      styleMsgError={styles.msgError}
                      options={Empresas}
                    />
                  </Col>
                </Row>
                <Row className={styles.rowInputs}>
                  <Col>
                    <label for="">CNPJ:</label>
                    <Cleave
                      name="cnpj"
                      id=""
                      placeholder="XX.XXX.XXX/XXXX-XX"
                      options={{
                        blocks: [2, 3, 3, 3, 2],
                        delimiters: [".", ".", "/", "-"],
                        numericOnly: true,
                      }}
                      value={formik.values.cnpj}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="off"
                    />
                    {formik.errors.cnpj && formik.touched.cnpj ? (
                      <div className={styles.msgError}>
                        {formik.errors.cnpj}
                      </div>
                    ) : null}
                  </Col>
                </Row>

                <Row className={styles.rowInputs}>
                  <Col>
                    <label for="">Cidade:</label>
                    <input
                      type="text"
                      name="cidade"
                      id=""
                      value={formik.values.cidade}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="on"
                    ></input>
                    {formik.errors.cidade && formik.touched.cidade ? (
                      <div className={styles.msgError}>
                        {formik.errors.cidade}
                      </div>
                    ) : null}
                  </Col>
                  <Col>
                    <label for="">UF:</label>
                    <input
                      type="text"
                      name="uf"
                      id=""
                      value={formik.values.uf}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="on"
                    ></input>
                    {formik.errors.uf && formik.touched.uf ? (
                      <div className={styles.msgError}>{formik.errors.uf}</div>
                    ) : null}
                  </Col>
                </Row>
                <br></br>
                <Row className={styles.rowInputs}>
                  <Col md={6}>
                    <label for="">Responsável:</label>
                    <input
                      type="text"
                      name="responsavel"
                      id=""
                      value={formik.values.responsavel}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="off"
                    ></input>
                    {formik.errors.responsavel && formik.touched.responsavel ? (
                      <div className={styles.msgError}>
                        {formik.errors.responsavel}
                      </div>
                    ) : null}
                  </Col>
                  <Col>
                    <label for="">Setor:</label>
                    <input
                      type="text"
                      name="setorResponsavel"
                      id=""
                      value={formik.values.setorResponsavel}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="off"
                    ></input>
                    {formik.errors.setorResponsavel &&
                    formik.touched.setorResponsavel ? (
                      <div className={styles.msgError}>
                        {formik.errors.setorResponsavel}
                      </div>
                    ) : null}
                  </Col>
                  <Col>
                    <label for="">Telefone:</label>
                    <Cleave
                      name="telefoneResponsavel"
                      id=""
                      placeholder="(XX) XXXX-XXXX"
                      options={{
                        blocks: [0, 2, 4, 4],
                        delimiters: ["(", ") ", "-"],
                        numericOnly: true,
                      }}
                      value={formik.values.telefoneResponsavel}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="off"
                    />
                    {formik.errors.telefoneResponsavel &&
                    formik.touched.telefoneResponsavel ? (
                      <div className={styles.msgError}>
                        {formik.errors.telefoneResponsavel}
                      </div>
                    ) : null}
                  </Col>
                </Row>

                <Row className={styles.rowInputs}>
                  <Col>
                    <label for="">Email do responsável:</label>
                    <input
                      type="text"
                      name="emailResponsavel"
                      id=""
                      value={formik.values.emailResponsavel}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="off"
                    ></input>
                    {formik.errors.emailResponsavel &&
                    formik.touched.emailResponsavel ? (
                      <div className={styles.msgError}>
                        {formik.errors.emailResponsavel}
                      </div>
                    ) : null}
                  </Col>
                </Row>

                <Row className={styles.rowInputs}>
                  <Col md={6}>
                    <label for="">Corresponsável:</label>
                    <input
                      type="text"
                      name="corresponsavel"
                      id=""
                      value={formik.values.corresponsavel}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="off"
                    ></input>
                    {formik.errors.corresponsavel &&
                    formik.touched.corresponsavel ? (
                      <div className={styles.msgError}>
                        {formik.errors.corresponsavel}
                      </div>
                    ) : null}
                  </Col>
                  <Col>
                    <label for="">Setor:</label>
                    <input
                      type="text"
                      name="setorCorresponsavel"
                      id=""
                      value={formik.values.setorCorresponsavel}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="off"
                    ></input>
                    {formik.errors.setorCorresponsavel &&
                    formik.touched.setorCorresponsavel ? (
                      <div className={styles.msgError}>
                        {formik.errors.setorCorresponsavel}
                      </div>
                    ) : null}
                  </Col>
                  <Col>
                    <label for="">Telefone:</label>
                    <Cleave
                      name="telefoneCorresponsavel"
                      id=""
                      placeholder="(XX) XXXX-XXXX"
                      options={{
                        blocks: [0, 2, 4, 4],
                        delimiters: ["(", ") ", "-"],
                        numericOnly: true,
                      }}
                      value={formik.values.telefoneCorresponsavel}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="off"
                    />
                    {formik.errors.telefoneCorresponsavel &&
                    formik.touched.telefoneCorresponsavel ? (
                      <div className={styles.msgError}>
                        {formik.errors.telefoneCorresponsavel}
                      </div>
                    ) : null}
                  </Col>
                </Row>
                
                <Row className={styles.rowInputs}>
                  <Col>
                    <label for="">Nome do projeto:</label>
                    <input
                      type="text"
                      name="nome"
                      id=""
                      value={formik.values.nome}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="on"
                    ></input>
                    {formik.errors.nome && formik.touched.nome ? (
                      <div className={styles.msgError}>
                        {formik.errors.nome}
                      </div>
                    ) : null}
                  </Col>
                  <Col>
                    <label for="">Segmento:</label>
                    <input
                      type="text"
                      name="segmento"
                      id=""
                      value={formik.values.segmento}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="on"
                    ></input>
                    {formik.errors.segmento && formik.touched.segmento ? (
                      <div className={styles.msgError}>
                        {formik.errors.segmento}
                      </div>
                    ) : null}
                  </Col>
                </Row>

                <Row className={styles.rowInputs}>
                  <Col>
                    <Form>
                      <Form.Group controlId="formData">
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
                      <Form.Group controlId="formDataFim">
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
                    <label for="">Apresentação do projeto:</label>
                    <input
                      type="text"
                      name="apresentacao"
                      id=""
                      // className={styles.textbox}
                      value={formik.values.apresentacao}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="off"
                    ></input>
                    {formik.errors.apresentacao &&
                    formik.touched.apresentacao ? (
                      <div className={styles.msgError}>
                        {formik.errors.apresentacao}
                      </div>
                    ) : null}
                  </Col>
                </Row>

                <Row className={styles.rowInputs}>
                  <Col>
                    <label for="">Descrição:</label>
                    <input
                      type="text"
                      name="descricao"
                      id=""
                      value={formik.values.descricao}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="off"
                    ></input>
                    {formik.errors.descricao && formik.touched.descricao ? (
                      <div className={styles.msgError}>
                        {formik.errors.descricao}
                      </div>
                    ) : null}
                  </Col>
                </Row>

                <Row className={styles.rowInputs}>
                  <Col>
                    <label for="">Justificativa:</label>
                    <input
                      type="text"
                      name="justificativa"
                      id=""
                      value={formik.values.justificativa}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="off"
                    ></input>
                    {formik.errors.justificativa &&
                    formik.touched.justificativa ? (
                      <div className={styles.msgError}>
                        {formik.errors.justificativa}
                      </div>
                    ) : null}
                  </Col>
                </Row>

                <Row className={styles.rowInputs}>
                  <Col>
                    <label for="">Observações gerais:</label>
                    <input
                      type="text"
                      name="observacaoGeral"
                      id=""
                      value={formik.values.observacaoGeral}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="off"
                    ></input>
                    {formik.errors.observacaoGeral &&
                    formik.touched.observacaoGeral ? (
                      <div className={styles.msgError}>
                        {formik.errors.observacaoGeral}
                      </div>
                    ) : null}
                  </Col>
                </Row>
                <br></br>
                <Row className={styles.rowInputs}>
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
            title={"Projetos"}
            icon={faUserFriends}
            desc={"LISTAGEM PROJETOS"}
            onClick={() => history.push("/Cadastro/ListagemProjetos")}
          ></ButtonCustom>
        </div>
      </div>
    </div>
  );
};

export default CadastroUsuarios;

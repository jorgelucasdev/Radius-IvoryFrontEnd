import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./CadastroCatalogos.module.scss";
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

const CadastroCatalogos = props => {
  registerLocale("pt-BR", ptBR);

  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());


  const DropdownIndicator = props => {
    return <i className={[styles.arrow, "icon-setasduplas"].join(" ")}></i>;
  };

  const customStyles = {
    menu: (provided, state) => ({
      ...provided,
    }),
  
    control: (_, { selectProps: { width }}) => ({
        
    })
}

  const StatusOptions = [
    { value: "baixa", label: "Baixa" },
    { value: "media", label: "Média" },
    { value: "alta", label: "Alta" }
  ];

  const validarCampos = Yup.object().shape({
    id: Yup.string()
      .nullable()
      .required("Campo obrigatório"),
    descricao: Yup.string()
      .nullable()
      .required("Campo obrigatório"),
    prioridade: Yup.string()
      .nullable()
      .required("Campo obrigatório"),
    tempoDeExecucao: Yup.string()
      .nullable()
      .required("Campo obrigatório"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      id: "",
      descricao: "",
      prioridade: "",
      tempoDeExecucao: ""
      
    },
    validationSchema: validarCampos,
    onSubmit: ""
  });
  return (
    <div className={styles.principal}>
       <h1>
        Cadastro > Opções de Catálogo > <span>Nova Opção de Catálogo</span>
      </h1>
      <div className={styles.conteudo}>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.conteudoSection}>
            <Card className={styles.novoCatalogo}>
              <Card.Header as="h5" className={styles.headerNovoCatalogo}>
                Nova Opção de Catálogo
              </Card.Header>
              <Card.Body className={styles.bodyNovoCatalogo}>
                <Row className={styles.rowInputs}>
                  <Col>
                    <label for="">ID:</label>
                    <input
                      type="text"
                      name="id"
                      id=""
                      value={formik.values.id}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="off"
                    ></input>
                    {formik.errors.id && formik.touched.id ? (
                      <div className={styles.msgError}>
                        {formik.errors.id}
                      </div>
                    ) : null}
                  </Col>
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
                    <label for="">Prioridade:</label>
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
                      options={StatusOptions}
                      components={{ DropdownIndicator }}
                    />
                    {/* <Select
                    placeholder="Selecione" classNamePrefix={'select'}
                    options={StatusOptions} styles={customStyles}
                    components={{ DropdownIndicator }} className={styles.select}
                      value={formik.values.prioridade}
                      name={"prioridade"}
                      id=""
                      placeholder={"Selecione"}
                      onChange={formik.setFieldValue}
                      onBlur={formik.setFieldTouched}
                      error={formik.errors.prioridade}
                      touched={formik.touched.prioridade}
                      styleMsgError={styles.msgError}
                     
                      styles={customStyles}
                      classNamePrefix={'select'}
                      components={{ DropdownIndicator }}
                    /> */}
                    {formik.errors.prioridade && formik.touched.prioridade ? (
                      <div className={styles.msgError}>
                        {formik.errors.prioridade}
                      </div>
                    ) : null}
                  </Col>
                  <Col>
                    <label for="">Tempo de execução:</label>
                    <input
                      type="text"
                      name="tempoDeExecucao"
                      id=""
                      value={formik.values.tempoDeExecucao}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      autoComplete="off"
                    ></input>
                    {formik.errors.tempoDeExecucao && formik.touched.tempoDeExecucao ? (
                      <div className={styles.msgError}>
                        {formik.errors.tempoDeExecucao}
                      </div>
                    ) : null}
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
                        {formik.errors.id}
                      </div>
                    ) : null}
                  </Col>
                </Row>

                <Row className={styles.rowButtons}>
                 
                  <Col>{/* <span>* Todos os campos são obrigatórios</span> */}</Col>

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
            title={"Catálogos"}
            icon={faUserFriends}
            desc={"OPÇÕES DE CATÁLOGO"}
            onClick={() => history.push("/Cadastro/ListagemCatalogo")}
          ></ButtonCustom>
        </div>
      </div>
    </div>
  );
};

export default CadastroCatalogos;

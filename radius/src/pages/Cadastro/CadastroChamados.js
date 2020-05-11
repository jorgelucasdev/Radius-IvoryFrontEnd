import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./CadastroChamados.module.scss";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import SelectBox from "../../components/SelectBox";
import ButtonCustom from "../../components/ButtonCustom";
import Cleave from "cleave.js/react";
import CleavePhone from "cleave.js/dist/addons/cleave-phone.br";
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";
import "react-datepicker/dist/react-datepicker.css";
import "styled-components";
import "./AuxStyles.css";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const CadastroClientes = props => {
  registerLocale("pt-BR", ptBR);

  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" }
  ];

  const projetosOptions = [
    { value: "projeto 1", label: "projeto 1" },
    { value: "projeto 2", label: "projeto 2" },
    { value: "projeto 3", label: "projeto 3" }
  ];

  const catalogoOptions = [
    { value: "catalogo 1", label: "catalogo 1" },
    { value: "catalogo 2", label: "catalogo 2" },
    { value: "catalogo 3", label: "catalogo 3" }
  ];
  const Empresas = [
    { value: "VLI", label: "VLI" },
    { value: "Unilever", label: "Unilever" },
    { value: "3MW", label: "3MW" },
    { value: "Eletronuclear", label: "Eletronuclear" },
  ];
  
  const validarCampos = Yup.object().shape({
    empresa: Yup.string()
      .nullable()
      .required("Campo obrigatório"),
    razaoSocial: Yup.string()
      .nullable()
      .min(5, "O campo precisa ter um mínino de 5 caracteres")
      .required("Campo obrigatório"),
      nomeProjeto: Yup.string()
      .nullable()
      .required("Campo obrigatório"),
      catalogo: Yup.string()
      .nullable()
      .required("Campo obrigatório"),
      descricao: Yup.string()
      .nullable()
      .required("Campo obrigatório"),

  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      empresa: "",
      razaoSocial: "",
      nomeProjeto: "",
      catalogo: "",
      descricao: "",
    },
    validationSchema: validarCampos,
    onSubmit: ""
  });
  return (
    <div className={styles.principal}>
      <h1>
        Home > Chamados > <span>Novo Chamado</span>
      </h1>

      <div className={styles.conteudo}>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.conteudoSection}>
            <Card className={styles.novoCliente}>
              <Card.Header as="h5" className={styles.header}>
                Novo Chamado
              </Card.Header>
              <Card.Body className={styles.body}>
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
                    <label for="">Razão social:</label>
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
                  </Row>
                <Row className={styles.rowInputs}>
                <Col>
                    <label for="">Nome do projeto:</label>
                    <SelectBox
                      value={formik.values.nomeProjeto}
                      name={"nomeProjeto"}
                      id=""
                      placeholder={"Selecione"}
                      onChange={formik.setFieldValue}
                      onBlur={formik.setFieldTouched}
                      error={formik.errors.nomeProjeto}
                      touched={formik.touched.nomeProjeto}
                      styleMsgError={styles.msgError}
                      options={projetosOptions}
                    />
                  </Col>
                </Row>
                <Row className={styles.rowInputs}>
                <Col md={12}>
                    <label for="">Catálogo:</label>
                    <SelectBox
                      value={formik.values.catalogo}
                      name={"catalogo"}
                      id=""
                      placeholder={"Selecione"}
                      onChange={formik.setFieldValue}
                      onBlur={formik.setFieldTouched}
                      error={formik.errors.catalogo}
                      touched={formik.touched.catalogo}
                      styleMsgError={styles.msgError}
                      options={catalogoOptions}
                    />
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
                      <Button
                        variant="primary"
                        className={styles.addFile}
                        onClick={() =>
                          history.push("#")
                        }
                      >
                        Adicionar Fotos
                      </Button>
                      </Col>  
                </Row>

                <Row className={styles.rowButtons}>
                  <Col>
                    <span>* Todos os campos são obrigatórios</span>
                  </Col>
                  <Col className={styles.buttons}>
                    <div>
                      <Button
                        variant="secondary"
                        onClick={() =>
                          history.push("/Cadastro/ListagemChamados")
                        }
                      >
                        CANCELAR
                      </Button>
                    </div>
                    <div className={styles.btnSalvar}>
                      <Button variant="primary">SALVAR</Button>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>
        </form>
        <div className={styles.conteudoAside}>
          <ButtonCustom
            title={"Chamados"}
            icon={faUserFriends}
            desc={"LISTAGEM CHAMADOS"}
            onClick={() => history.push("../Chamados/ListagemChamados")}
          ></ButtonCustom>
        </div>
      </div>
    </div>
  );
};

export default CadastroClientes;

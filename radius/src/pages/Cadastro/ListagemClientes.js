import React, { useState } from "react";
import styles from "./ListagemClientes.module.scss";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";
import "react-datepicker/dist/react-datepicker.css";
import "styled-components";
import "./AuxStyles.css";
import { useFormik } from "formik";
import ButtonCustom from "../../components/ButtonCustom";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const ListagemClientes = () => {
  registerLocale("pt-BR", ptBR);
  const history = useHistory();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      dataCadastro: "",
      dataEncerramento: ""
    }
  });

  return (
    <div className={styles.principal}>
      <h1>Cadastro > <span>Clientes</span></h1>

      <div className={styles.conteudo}>
        <div className={styles.conteudoAside}>
          <ButtonCustom
            title={"Novo Cliente"}
            icon={faPlusCircle}
            desc={"CADASTRAR CLIENTE"}
            onClick={() => history.push("/Cadastro/CadastroClientes")}
          ></ButtonCustom>
        </div>

        <div className={styles.conteudoSection}>
          <div className={styles.filtroClientes}>
            <Card className={styles.filtro}>
              <Card.Header as="h5" className={styles.header}>
                Buscar Clientes
              </Card.Header>
              <Card.Body className={styles.body}>
                <Row className={styles.rowInputs}>
                  <Col>
                    <label for="">Nome Cliente:</label>
                    <input
                      type="text"
                      name="nomeCliente"
                      id=""
                      autoComplete="off"
                    ></input>
                  </Col>
                  <Col>
                    <label>Data Cadastro:</label>
                    <DatePicker
                      showPopperArrow={false}
                      dateFormat="dd/MM/yyyy"
                      selected={formik.values.dataCadastro}
                      locale="pt-BR"
                      name="dataCadastro"
                      onChange={date => {
                        formik.setFieldValue("dataCadastro", date);
                      }}
                      autoComplete="off"
                      className={styles.calendario}
                    />
                    <i className={"icon-calendario"}></i>
                  </Col>
                  <Col>
                    <label>Data Encerramento:</label>
                    <DatePicker
                      showPopperArrow={false}
                      dateFormat="dd/MM/yyyy"
                      selected={formik.values.dataEncerramento}
                      locale="pt-BR"
                      name="dataEncerramento"
                      onChange={date => {
                        formik.setFieldValue("dataEncerramento", date);
                      }}
                      autoComplete="off"
                      className={styles.calendario}
                    />
                    <i className={"icon-calendario"}></i>
                  </Col>

                  <Col>
                    <Button variant="primary">FILTRAR</Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </div>

          <div className={styles.listaClientes}></div>
        </div>
      </div>
    </div>
  );
};

export default ListagemClientes;

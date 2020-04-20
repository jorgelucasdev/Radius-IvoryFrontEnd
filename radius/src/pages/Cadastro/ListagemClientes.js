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
import Table from '../../components/Table';
import Pagination from "../../components/Pagination";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const ListagemClientes = () => {
  registerLocale("pt-BR", ptBR);
  const history = useHistory();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      dataCadastro: "",
      dataEncerramento: "",
    },
  });

  const data = React.useMemo(() => [
    {
      nomeFantasia: "Ivory",
      email: "ivory@ivory.com.br",
      dataCadastro: "00/00/0000",
      status: "Ativo",
      iconEditar: (
        <button className={styles.btnEditar}>
          <i className={"icon-editar"}></i>
        </button>
      ),
      iconExcluir: (
        <button className={styles.btnExcluir}>
          <i className={"icon-excluir"}></i>
        </button>
      ),
    },
    {
      nomeFantasia: "VLI",
      email: "vli@vli.com.br",
      dataCadastro: "01/01/0001",
      status: "Cancelado",
      iconEditar: (
        <button className={styles.btnEditar}>
          <i className={"icon-editar"}></i>
        </button>
      ),
      iconExcluir: (
        <button className={styles.btnExcluir}>
          <i className={"icon-excluir"}></i>
        </button>
      ),
    },
    {
      nomeFantasia: "Unilever",
      email: "unilever@unilever.com.br",
      dataCadastro: "02/02/0002",
      status: "Ativo",
      iconEditar: (
        <button className={styles.btnEditar}>
          <i className={"icon-editar"}></i>
        </button>
      ),
      iconExcluir: (
        <button className={styles.btnExcluir}>
          <i className={"icon-excluir"}></i>
        </button>
      ),
    },
    {
      nomeFantasia: "Ale",
      email: "ale@ale.com.br",
      dataCadastro: "03/03/0003",
      status: "Ativo",
      iconEditar: (
        <button className={styles.btnEditar}>
          <i className={"icon-editar"}></i>
        </button>
      ),
      iconExcluir: (
        <button className={styles.btnExcluir}>
          <i className={"icon-excluir"}></i>
        </button>
      ),
    },
    {
      nomeFantasia: "Prefeitura de Betim",
      email: "prfBetim@prfBetim.com.br",
      dataCadastro: "04/04/0004",
      status: "Ativo",
      iconEditar: (
        <button className={styles.btnEditar}>
          <i className={"icon-editar"}></i>
        </button>
      ),
      iconExcluir: (
        <button className={styles.btnExcluir}>
          <i className={"icon-excluir"}></i>
        </button>
      ),
    },
    {
      nomeFantasia: "3MW",
      email: "3mw@3mw.com.br",
      dataCadastro: "05/05/0005",
      status: "Pendente",
      iconEditar: (
        <button className={styles.btnEditar}>
          <i className={"icon-editar"}></i>
        </button>
      ),
      iconExcluir: (
        <button className={styles.btnExcluir}>
          <i className={"icon-excluir"}></i>
        </button>
      ),
    },
  ]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Nome Fantasia",
        accessor: "nomeFantasia",
        sortType: "basic",
      },
      {
        Header: "E-mail",
        accessor: "email",
        sortType: "basic",
      },
      {
        Header: "Data Cadastro",
        accessor: "dataCadastro",
        sortType: "basic",
      },
      {
        Header: "Status",
        accessor: "status",
        sortType: "basic",
      },
      {
        Header: "",
        accessor: "iconEditar",
      },
      {
        Header: "",
        accessor: "iconExcluir",
      },
    ],
    []
  );

  return (
    <div className={styles.principal}>
      <h1>
        Cadastro > <span>Clientes</span>
      </h1>

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
                      type="search"
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
                      onChange={(date) => {
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
                      onChange={(date) => {
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

          <div className={styles.listaClientes}>
            <p className={styles.header}>Clientes</p>
            <div className={styles.tabela}>
              <Table columns={columns} data={data} />
            </div>
          </div>

          <div>
            <Pagination></Pagination>
          </div>

          <div className={styles.btnVoltar}>
            <Button variant="primary" onClick={() => history.push("/")}>
              VOLTAR
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListagemClientes;

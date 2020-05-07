import React, { useState } from "react";
import styles from "./ListagemClientes.module.scss";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import { useTable, useSortBy } from "react-table";
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";
import "react-datepicker/dist/react-datepicker.css";
import "styled-components";
import "./AuxStyles.css";
import { useFormik } from "formik";
import ButtonCustom from "../../components/ButtonCustom";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

function Table({ data, columns }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable(
    {
      columns,
      data
    },
    useSortBy
  );

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => {
              {
                /* console.log(column); */
              }
              return !["email"].includes(column.id) ? (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}

                  <span className={styles.setas}>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <i
                          className={[styles.setaCima, "icon-setacima"].join(
                            " "
                          )}
                        />
                      ) : (
                        <i
                          className={[styles.setaBaixo, "icon-setabaixo"].join(
                            " "
                          )}
                        />
                      )
                    ) : (
                      <i className={"icon-setasduplas"} />
                    )}
                  </span>
                </th>
              ) : (
                <th>{column.render("Header")}</th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

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

  const data = React.useMemo(() => [
    {
      nomeFantasia: "Ivory",
      email: "ivory@ivory.com.br",
      dataCadastro: "00/00/0000",
      status: "Ativo"
    },
    {
      nomeFantasia: "VLI",
      email: "vli@vli.com.br",
      dataCadastro: "01/01/0001",
      status: "Cancelado"
    },
    {
      nomeFantasia: "Unilever",
      email: "unilever@unilever.com.br",
      dataCadastro: "02/02/0002",
      status: "Ativo"
    },
    {
      nomeFantasia: "Ale",
      email: "ale@ale.com.br",
      dataCadastro: "03/03/0003",
      status: "Ativo"
    },
    {
      nomeFantasia: "Prefeitura de Betim",
      email: "prfBetim@prfBetim.com.br",
      dataCadastro: "04/04/0004",
      status: "Ativo"
    },
    {
      nomeFantasia: "3MW",
      email: "3mw@3mw.com.br",
      dataCadastro: "05/05/0005",
      status: "Pendente"
    }
  ]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Nome Fantasia",
        accessor: "nomeFantasia"
      },
      {
        Header: "E-mail",
        accessor: "email"
      },
      {
        Header: "Data Cadastro",
        accessor: "dataCadastro",
        sortType: "basic"
      },
      {
        Header: "Status",
        accessor: "status",
        sortType: "basic"
      }
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
          <Card className={styles.busca}>
              <Card.Header as="h5" className={styles.headerBusca}>Buscar Clientes</Card.Header>
              <Card.Body className={styles.bodyBusca}>

                <Row className={styles.rowBusca}>

                  <Col xs={12} sm={6} md={6} lg xl className={styles.info}>
                    <label>Nome de Cliente</label>
                    <input className={styles.input} />
                  </Col>

                  <Col xs={12} sm={6} md={6} lg xl className={styles.infoData}>
                    <label className={styles.labelData}>Data Cadastro</label>
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
                    <i className={[styles.calendar, 'icon-calendario'].join(' ')}></i>
                  </Col>

                  <Col xs={12} sm={6} md={6} lg xl className={styles.infoData}>
                    <label className={styles.labelData}>Data Encerramento</label>
                    <DatePicker
                      name="dataFinal"
                      dateFormat="dd/MM/yyyy"
                      selected={formik.values.dataFinal}
                      locale="pt-BR"
                      showPopperArrow={false}
                      onChange={date => {
                        formik.setFieldValue("dataFinal", date);
                      }}
                      className={styles.data}
                    />
                    <i className={[styles.calendar, 'icon-calendario'].join(' ')}></i>
                  </Col>
                  <Col xs={12} sm={12} md={12} lg={12} xl className={styles.infoBtn}>
                    <Button variant="primary" className={styles.btnFiltrar}>FILTRAR</Button>
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

          <div className={styles.btnVoltar}>
            <Button
              variant="primary"
              onClick={() => history.push("/")}
            >
              VOLTAR
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListagemClientes;

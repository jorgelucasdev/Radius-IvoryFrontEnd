import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./ListagemChamados.module.scss";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import SelectBox from "../../components/SelectBox";
import Cleave from "cleave.js/react";
import CleavePhone from "cleave.js/dist/addons/cleave-phone.br";
import DatePicker, { registerLocale } from "react-datepicker";
import ButtonCustom from "../../components/ButtonCustom";
import ptBR from "date-fns/locale/pt-BR";
import { useTable, useSortBy } from "react-table";
import "react-datepicker/dist/react-datepicker.css";
import "styled-components";
import "./AuxStyles.css";
import Select from "react-select";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

const ListagemChamados = props => {

  const history = useHistory();

  const data = React.useMemo(() => [
    {
      codigoChamado: "-",
      nomeEmpresa: "-",
      nomeProjeto: "-",
      dataInicio: "-",
      dataFim: "-",
      responsavel: "-",
      status: "-",
      iconDetalhes: (
        <button className={styles.btnEditar}>
          <i className={"icon-editar"}></i>
        </button>
      )
    },
    {
      codigoChamado: "-",
      nomeEmpresa: "-",
      nomeProjeto: "-",
      dataInicio: "-",
      dataFim: "-",
      responsavel: "-",
      status: "-",
      iconDetalhes: (
        <button className={styles.btnEditar}>
          <i className={"icon-editar"}></i>
        </button>
      )
    },
    {
      codigoChamado: "-",
      nomeEmpresa: "-",
      nomeProjeto: "-",
      dataInicio: "-",
      dataFim: "-",
      responsavel: "-",
      status: "-",
      iconDetalhes: (
        <button className={styles.btnEditar}>
          <i className={"icon-editar"}></i>
        </button>
      )
    },
    {
      codigoChamado: "-",
      nomeEmpresa: "-",
      nomeProjeto: "-",
      dataInicio: "-",
      dataFim: "-",
      responsavel: "-",
      status: "-",
      iconDetalhes: (
        <button className={styles.btnEditar}>
          <i className={"icon-editar"}></i>
        </button>
      )
    },
    {
      codigoChamado: "-",
      nomeEmpresa: "-",
      nomeProjeto: "-",
      dataInicio: "-",
      dataFim: "-",
      responsavel: "-",
      status: "-",
      iconDetalhes: (
        <button className={styles.btnEditar}>
          <i className={"icon-editar"}></i>
        </button>
      )
    },
  ]);

  const StatusOptions = [
    { value: "ativo", label: "Ativo" },
    { value: "pendente", label: "Pendente" },
    { value: "cancelado", label: "Cancelado" },
    { value: "concluido", label: "Concluido" }
  ];

  const DropdownIndicator = props => {
    return <i className={[styles.arrow, "icon-setasduplas"].join(" ")}></i>;
  };

  const customStyles = {
    menu: (provided, state) => ({
      ...provided
    }),

    control: (_, { selectProps: { width } }) => ({})
  };

  const formik = useFormik({
    initialValues: {
      dataInicial: "",
      dataFinal: ""
    }
  });

  const columns = React.useMemo(
    () => [
      {
        Header: "Código do Chamado",
        accessor: "codigoChamado",
        sortType: "basic"
      },
      {
        Header: "Nome da Empresa",
        accessor: "nomeEmpresa",
        sortType: "basic"
      },
      {
        Header: "Nome do Projeto",
        accessor: "nomeProjeto",
        sortType: "basic"
      },
      {
        Header: "Data de Início do Chamado",
        accessor: "dataInicio",
        sortType: "basic"
      },
      {
        Header: "Data de Fim do Projeto",
        accessor: "dataFim",
        sortType: "basic"
      },
      {
        Header: "Responsável",
        accessor: "responsavel",
        sortType: "basic"
      },
      {
        Header: "Status",
        accessor: "status",
      },
      {
        Header: "",
        accessor: "iconDetalhes"
      }
    ],
    []
  );

  return (
    <div>
      {/*Div provisoria*/}
      <h1>Home > <span>Chamados</span></h1>
      <div className={styles.conteudo}>
        <div className={styles.conteudoAside}>
          <ButtonCustom
            title={"Novo Chamado"} 
            icon={faPlusCircle}
            desc={"CADASTRAR CHAMADO"}
            onClick={() => history.push("#")}
          ></ButtonCustom>
        </div>

        <div className={styles.conteudoSection}>
          {/* FiltroUsuarios */}
          <div className={styles.conteudoFiltros}>
            <Card className={styles.busca}>
              <Card.Header as="h5" className={styles.headerBusca}>Buscar Chamados</Card.Header>
              <Card.Body className={styles.bodyBusca}>

                <Row className={styles.rowBusca}>

                  <Col xs={12} sm={6} md={6} lg={6} xl={6} className={styles.info}>
                    <label>Empresa</label>
                    <input className={styles.input} />
                  </Col>

                  <Col xs={12} sm={6} md={6} lg={6} xl={6} className={styles.info}>
                    <label>CNPJ</label>
                    <input className={styles.input} />
                  </Col>

                  <Col xs={12} sm={6} md={6} lg={4} xl={4} className={styles.info}>
                    <label>Nome do Projeto</label>
                    <input className={styles.input} />
                  </Col>

                  <Col xs={12} sm={6} md={6} lg={4} xl={4} className={styles.infoData}>
                    <label className={styles.labelData}>Período de Inclusão</label>
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

                  <Col xs={12} sm={12} md={12} lg={4} xl={4} className={styles.infoData}>
                    <label className={styles.labelData}>Período de Encerramento</label>
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


          {/* listaUsuarios */}
          <Card className={styles.listaUsuarios}>
            <Card.Header as="h5" className={styles.headerLista}>
              Chamados
            </Card.Header>
            <Card.Body className={styles.bodyListaUsuarios}>
              <Table columns={columns} data={data} />
            </Card.Body>
          </Card>

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
    </div> //Div provisoria
  );
};

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
              return !["iconDetalhes"].includes(column.id) ? (
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

export default ListagemChamados;

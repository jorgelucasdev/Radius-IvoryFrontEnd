import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./ListagemCatalogo.module.scss";
import { Row, Col, Card, Form, Button, Table } from "react-bootstrap";
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

const ListagemCatalogo = props => {

  const history = useHistory();

  const data = React.useMemo(() => [
    {
      id: "-",
      descricao: "-",
      prioridade: "-",
      tempo: "-",
      iconEditar: (
        <button className={styles.btnEditar}>
          <i className={"icon-editar"}></i>
        </button>
      )
    },
    {
      id: "-",
      descricao: "-",
      prioridade: "-",
      tempo: "-",
      iconEditar: (
        <button className={styles.btnEditar}>
          <i className={"icon-editar"}></i>
        </button>
      )
    },
    {
      id: "-",
      descricao: "-",
      prioridade: "-",
      tempo: "-",
      iconEditar: (
        <button className={styles.btnEditar}>
          <i className={"icon-editar"}></i>
        </button>
      )
    },
    {
      id: "-",
      descricao: "-",
      prioridade: "-",
      tempo: "-",
      iconEditar: (
        <button className={styles.btnEditar}>
          <i className={"icon-editar"}></i>
        </button>
      )
    },
    {
      id: "-",
      descricao: "-",
      prioridade: "-",
      tempo: "-",
      iconEditar: (
        <button className={styles.btnEditar}>
          <i className={"icon-editar"}></i>
        </button>
      )
    },
  ]);

  const StatusOptions = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
    { value: "3", label: "3" },
    { value: "4", label: "4" }
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
        Header: "ID",
        accessor: "id",
        sortType: "basic"
      },
      {
        Header: "Descrição",
        accessor: "descricao",
        sortType: "basic"
      },
      {
        Header: "Prioridade",
        accessor: "prioridade",
        sortType: "basic"
      },
      {
        Header: "Tempo",
        accessor: "tempo",
        sortType: "basic"
      },
      {
        Header: "",
        accessor: "iconEditar"
      }
    ],
    []
  );

  return (
    <div>
      {/*Div provisoria*/}
      <h1>Home > Cadastro > <span>Opções de Catálogo</span></h1>
      <div className={styles.conteudo}>
        <div className={styles.conteudoAside}>
          <ButtonCustom
            title={"Nova Opção de Catálogo"} 
            icon={faPlusCircle}
            desc={"CADASTRAR NOVA OPÇÃO"}
            onClick={() => history.push("/Cadastro/CadastroCatalogos")}
          ></ButtonCustom>
        </div>

        <div className={styles.conteudoSection}>
          {/* FiltroUsuarios */}
          <div className={styles.conteudoFiltros}>
            <Card className={styles.busca}>
              <Card.Header as="h5" className={styles.headerBusca}>Buscar Opções de Catálogo</Card.Header>
              <Card.Body className={styles.bodyBusca}>

                <Row className={styles.rowBusca}>

                  <Col xs={12} sm={6} md={6} lg xl className={styles.info}>
                    <label>Tempo</label>
                    <input className={styles.input} />
                  </Col>

                  <Col xs={12} sm={6} md={6} lg xl className={styles.info}>
                    <label>Prioridade</label>
                    <Select placeholder="" classNamePrefix={'select'}
                      options={StatusOptions} styles={customStyles}
                      components={{ DropdownIndicator }}
                    />
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
              Opções de Catálogo
            </Card.Header>
            <Card.Body className={styles.bodyListaUsuarios}>
              <Tabela columns={columns} data={data} />
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

function Tabela({ data, columns }) {
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
    <Table borderless responsive {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => {
              {
                /* console.log(column); */
              }
              return !["iconEditar"].includes(column.id) ? (
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
    </Table>
  );
}

export default ListagemCatalogo;


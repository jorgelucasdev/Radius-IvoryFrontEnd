import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import styles from "./ListagemUsuarios.module.scss";
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import SelectBox from "../../components/SelectBox";
import Cleave from "cleave.js/react";
import CleavePhone from "cleave.js/dist/addons/cleave-phone.br";
import DatePicker, { registerLocale } from "react-datepicker";
import ptBR from "date-fns/locale/pt-BR";
import { useTable, useSortBy } from "react-table";
import "react-datepicker/dist/react-datepicker.css";
import "styled-components";
import "./AuxStyles.css";

const ListagemUsuarios = props => {
  const data = React.useMemo(() => [
    {
      nome: "-",
      email: "-",
      dataInicio: "-",
      dataFim: "-",
      status: "-",
      iconEditar: (
        <button className={styles.btnEditar}>
          <i className={"icon-editar"}></i>
        </button>
      )
    },
    {
      nome: "-",
      email: "-",
      dataInicio: "-",
      dataFim: "-",
      status: "-",
      iconEditar: (
        <button className={styles.btnEditar}>
          <i className={"icon-editar"}></i>
        </button>
      )
    },
    {
      nome: "-",
      email: "-",
      dataInicio: "-",
      dataFim: "-",
      status: "-",
      iconEditar: (
        <button className={styles.btnEditar}>
          <i className={"icon-editar"}></i>
        </button>
      )
    },
    {
      nome: "-",
      email: "-",
      dataInicio: "-",
      dataFim: "-",
      status: "-",
      iconEditar: (
        <button className={styles.btnEditar}>
          <i className={"icon-editar"}></i>
        </button>
      )
    },
    {
      nome: "-",
      email: "-",
      dataInicio: "-",
      dataFim: "-",
      status: "-",
      iconEditar: (
        <button className={styles.btnEditar}>
          <i className={"icon-editar"}></i>
        </button>
      )
    }
  ]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Nome",
        accessor: "nome",
        sortType: "basic"
      },
      {
        Header: "E-mail",
        accessor: "email",
        sortType: "basic"
      },
      {
        Header: "Data de Início",
        accessor: "dataInicio",
        sortType: "basic"
      },
      {
        Header: "Data de Fim",
        accessor: "dataFim",
        sortType: "basic"
      },
      {
        Header: "Status",
        accessor: "status"
      },
      {
        Header: "",
        accessor: "iconEditar"
      }
    ],
    []
  );

  return (
    <div>{/*Div provisoria*/}
      <h1>Home > Cadastro > Usuário</h1>
      <div className={styles.conteudo}>
        <div className={styles.conteudoAside}>
          <Card className={styles.usuarios}>
            <Card.Header as="h5" className={styles.headerUsuarios}>
              Novo Usuário
            </Card.Header>
            <Card.Body className={styles.bodyCadastroUsuarios}>
              <a href="/Cadastro/CadastroUsuarios" className={styles.button}>
                <div className={styles.icon}>
                  <i className={"icon-novochamado"}></i>
                </div>
                <div className={styles.desc}>
                  <span>
                    CADASTRAR <br />
                    USUÁRIO
                  </span>
                </div>
              </a>
            </Card.Body>
          </Card>
        </div>

        <div className={styles.conteudoSection}>
          <Card className={styles.listaUsuarios}>
            <Card.Header as="h5" className={styles.headerLista}>
              Usuários
            </Card.Header>
            <Card.Body className={styles.bodyListaUsuarios}>
              <Table columns={columns} data={data} />
            </Card.Body>
          </Card>
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
    </table>
  );
}

export default ListagemUsuarios;

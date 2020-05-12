import React from "react";
import { useTable, useSortBy } from "react-table";
import styles from "./UltimosChamados.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSort,
  faCaretUp,
  faCaretDown
} from "@fortawesome/free-solid-svg-icons";

export default function UltimosChamados() {
  const data = React.useMemo(() => [
    {
      chamado: "#16.008",
      projeto: "Trem Turístico",
      empresa: "VLI",
      solicitante: "Paulo Santos",
      status: "Ativo",
      grupo: "Grupo 01",
      atendente: "Eventon Angêlo",
      datacriacao: "12/02/2020"
    },
    {
      chamado: "#32.001",
      projeto: "Digital CD",
      empresa: "Unilever",
      solicitante: "Ana Lista",
      status: "Pendente",
      grupo: "Grupo 02",
      atendente: "Aldilane Santos",
      datacriacao: "10/01/2020"
    },
    {
      chamado: "#28.090",
      projeto: "Eurofarma",
      empresa: "3MW",
      solicitante: "Ana Roberto Silva",
      status: "Concluido",
      grupo: "Grupo 03",
      atendente: "Humberto M.",
      datacriacao: "18/12/2019"
    },
    {
      chamado: "#16.008",
      projeto: "SOU VLI",
      empresa: "VLI",
      solicitante: "Paula Schrodinger",
      status: "Cancelado",
      grupo: "Grupo 04",
      atendente: "-",
      datacriacao: "12/02/2020"
    },
    {
      chamado: "#16.0051",
      projeto: "Feedback",
      empresa: "VLI",
      solicitante: "Paulo Santos",
      status: "Ativo",
      grupo: "Grupo 05",
      atendente: "Vinícius Araújo",
      datacriacao: "12/02/2020"
    }
  ]);

  const columns = React.useMemo(
    () => [
      {
        Header: "Chamado",
        accessor: "chamado"
      },
      {
        Header: "Projeto",
        accessor: "projeto"
      },
      {
        Header: "Empresa",
        accessor: "empresa",
        sortType: "basic"
      },
      {
        Header: "Solicitante",
        accessor: "solicitante",
        sortType: "basic"
      },
      {
        Header: "Status",
        accessor: "status"
      },
      {
        Header: "Grupo",
        accessor: "grupo",
        sortType: "basic"
      },
      {
        Header: "Atendente",
        accessor: "atendente",
        sortType: "basic"
      },
      {
        Header: "Data criação",
        accessor: "datacriacao",
        sortType: "basic"
      }
    ],
    []
  );
  return (
    <div className={styles.colPrincipal}>
      <p className={styles.header}>Últimos Chamados</p>
      <div className={styles.content}>
        <Table columns={columns} data={data} />
      </div>
    </div>
  );
}
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
              {/* console.log(column); */}
              return !["chamado"].includes(column.id) ? (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span className={styles.setas}>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <i className={[styles.setaCima, 'icon-setacima'].join(' ')}/>
                      ) : (
                        <i className={[styles.setaBaixo, 'icon-setabaixo'].join(' ')}/>
                      )
                    ) : (
                      <i className={'icon-setasduplas'}/>
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
                return ["status"].includes(cell.column.id) ? (
                  <td className={`styles.${cell.value}`}>{cell.render("Cell")}</td>
                ) : (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

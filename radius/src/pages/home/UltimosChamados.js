import React from 'react';
import { useTable, useSortBy } from 'react-table';
import styles from './index.module.scss';


export default function UltimosChamados(){
    
    const data = React.useMemo(
        () => [
        
        {
          chamado: '#16.008',
          projeto: 'Trem Turístico',
          empresa: 'VLI',
          solicitante: 'Paulo Santos',
          status: 'Ativo',
          grupo:'Grupo 01',
          atendente: 'Eventon Angêlo',
          datacriacao: '12/02/2020' 
        }
    , 
    {
        chamado: '#32.001',
        projeto: 'Digital CD',
        empresa: 'Unilever',
        solicitante: 'Ana Lista',
        status: 'Pendente',
        grupo:'Grupo 02',
        atendente: 'Aldilane Santos',
        datacriacao: '10/01/2020' 
      }]
    )
    
    const columns = React.useMemo(
        () => [
            {
                Header: 'Chamado',
                accessor: 'chamado',
            },
            {
                Header: 'Projeto',
                accessor: 'projeto',
            },
            {
                Header: 'Empresa',
                accessor: 'empresa',
            sortType: 'basic'
            },
            {
                Header: 'Solicitante',
                accessor: 'solicitante',
            sortType: 'basic'
            },
            {
                Header: 'Status',
                accessor: 'status',
            },
            {
                Header: 'Grupo',
                accessor: 'grupo',
            sortType: 'basic'
            },
            {
                Header: 'Atendente',
                accessor: 'atendente',
            sortType: 'basic'
            },
            {
                Header: 'Data criação',
                accessor: 'datacriacao',
            sortType: 'basic'
            }   
        ],
        []
    )
    return (
        <div className={styles.colPrincipal}>
            <p className={styles.header}>Ultimos Chamados</p>
            <div className={styles.content}>
                <Table columns={columns} data={data} />
            </div>
        </div>


      )
}
function  Table({data,
    columns,}) {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
      {
        columns,
        data,
      },
      useSortBy
    )
  
    return (
      <table {...getTableProps()}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr className={'#'} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                    
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    <span>
                    {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                    </span>
                    </th>
                ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map(
                (row, i) => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                    {row.cells.map(cell => {
                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}
                    </tr>
                )}
            )}
            </tbody>
      </table>
    )
  }
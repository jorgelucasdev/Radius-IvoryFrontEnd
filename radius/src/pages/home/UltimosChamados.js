import React from 'react';
import { useTable, useSortBy } from 'react-table';
import styles from './index.module.scss';


export default function UltimosChamados(){
    
    const data = React.useMemo(
        () => [
        
        {
          firstName: 'Jean',
          lastName: 'Araujo',
          age: 24,
          visits: 30,
          progress:90,
          status:'single'
           
              
        }
    , 
        {
          firstName: 'Maria',
          lastName: 'Paiva',
          age: 50,
          visits: 20,
          progress:80,
          status:'single'
           
              
        }]
    )
    
    const columns = React.useMemo(
        () => [
            {
                Header: 'First Name',
                accessor: 'firstName',
            },
            {
                Header: 'Last Name',
                accessor: 'lastName',
            },
            {
                Header: 'Age',
                accessor: 'age',
            sortType: 'basic'
            },
            {
                Header: 'Visits',
                accessor: 'visits',
            sortType: 'basic'
            },
            {
                Header: 'Status',
                accessor: 'status',
            },
            {
                Header: 'Profile Progress',
                accessor: 'progress',
            sortType: 'basic'
            },   
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
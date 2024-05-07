import { useTable, usePagination } from 'react-table';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from '../../button/button.component';
import './trans-table.styles.scss'

const TransTable = () => {

    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/transactions/')
            .then(response => {
                setTransactions(response.data);
                console.log(response.data)
            })
            .catch(error => console.error('Error fetching data: ', error));
    }, []);

    // Define columns for the table
    const columns = React.useMemo(() => [
        { Header: '#', accessor: 'col1' },
        { Header: 'Symbol', accessor: 'col2' },
        { Header: 'Bought Date', accessor: 'col3' },
        { Header: 'Bought Price', accessor: 'col4' },
        { Header: 'Sold Date', accessor: 'col5' },
        { Header: 'Sold Price', accessor: 'col6' },
        { Header: 'Profit', accessor: 'col7' },
    ],[]);

    // Example data
    const data = React.useMemo(() => 
        transactions.map((transaction, i) => ({
            col1: `${transactions.length-i}`,  // Assuming transaction[0] is the first element for Column 1
            col2: transaction.stock_symbol,  // Second element for Column 2, and so on...
            col3: transaction.buying_day,
            col4: transaction.buying_price,
            col5: transaction.selling_date,
            col6: transaction.selling_price,
            col7: transaction.profit,
        }))
    , [transactions]);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page,
        canNextPage,
        canPreviousPage,
        nextPage,
        previousPage,
        setPageSize,
        // state: { pageIndex },
    } = useTable({ 
        columns, data, initialState: { pageIndex: 0, pageSize: 5 } }, usePagination);

    React.useEffect(() => {
        setPageSize(5); // Set the number of rows per page
    }, [setPageSize]);

    // Render the UI for your table
    return (
        <div className='trans'>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()} style={{ 'backgroundColor': 'lightgray' }}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row, rowIndex) => {
                        prepareRow(row);
                        // Determine the background color for each row
                        const backgroundColor = row.cells[6].value > 0 ? 'lightgreen' : 'rgb(255, 100, 120)';
                        // console.log(row.cells[6].value)
                        return (
                            <tr {...row.getRowProps()} style={{ backgroundColor }}>
                                {row.cells.map(cell => (
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className='b-container'>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {'Prev'}
                </button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    {'Next'}
                </button>
            </div>
        </div>
    );
}

export default TransTable;

import React from 'react';
import { useTable } from 'react-table';
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";
import './product-table.styles.scss'

const ProductTable = () => {
    // Define columns for the table
    const columns = React.useMemo(
        () => [
            {
                Header: '',
                accessor: 'feature', // accessor is the "key" in the data
            },
            {
                Header: 'Basic',
                accessor: 'product1',
            },
            {
                Header: 'Pro',
                accessor: 'product2',
            },
        ],[]);

    // Data for the table
    const data = React.useMemo(
        () => [
            {
                feature: <p>Recieve <span>A List of Stocks</span>(Daily)</p>,
                product1: <FaRegCheckCircle />,
                product2: <FaRegCheckCircle />,
            },
            {
                feature: <p>Recieve <span>Notification</span> when I buy or cell stocks</p>,
                product1: <FaRegTimesCircle />,
                product2: <FaRegCheckCircle />,
            },
            {
                feature: <p>View my <span>Live Holding</span></p>,
                product1: <FaRegTimesCircle />,
                product2: <FaRegCheckCircle />,
            },
        ],[]);

    // Create a table instance
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    // Render the UI for your table
    return (
        <div className='product'>
            <table {...getTableProps()}>

                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>

                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>

            </table>
        </div>
        
    );
}

export default ProductTable;

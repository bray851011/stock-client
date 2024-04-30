import React from 'react';
import { useTable, usePagination } from 'react-table';

const TransTable = () => {
  // Define columns for the table
  const columns = React.useMemo(
    () => [
      { Header: 'Column 1', accessor: 'col1' },
      { Header: 'Column 2', accessor: 'col2' },
      { Header: 'Column 3', accessor: 'col3' },
      { Header: 'Column 4', accessor: 'col4' },
      { Header: 'Column 5', accessor: 'col5' },
      { Header: 'Column 6', accessor: 'col6' },
      { Header: 'Column 7', accessor: 'col7' },
    ],
    []
  );

  // Example data
  const data = React.useMemo(
    () => new Array(20).fill(undefined).map((_, i) => ({
      col1: `Row ${i + 1} Col 1`,
      col2: `Row ${i + 1} Col 2`,
      col3: `Row ${i + 1} Col 3`,
      col4: `Row ${i + 1} Col 4`,
      col5: `Row ${i + 1} Col 5`,
      col6: `Row ${i + 1} Col 6`,
      col7: `Row ${i + 1} Col 7`,
    })),
    []
  );

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
        state: { pageIndex },
    } = useTable({ 
        columns, data, initialState: { pageIndex: 0, pageSize: 5 } }, usePagination);

  React.useEffect(() => {
    setPageSize(5); // Set the number of rows per page
  }, [setPageSize]);

  // Render the UI for your table
    return (
        <div>
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
                {page.map(row => {
                    prepareRow(row);
                    return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => (
                        <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        ))}
                    </tr>
                    );
                })}
                </tbody>
            </table>
            <div>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                {'Previous'}
                </button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                {'Next'}
                </button>
            </div>
        </div>
    );
}

export default TransTable;

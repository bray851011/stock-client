import React, { useEffect, useState } from 'react';
import axios from 'axios';

import BarChart from '../../components/barchart/barchart.component';
import './performance.styles.scss'

const Performance = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/transactions/')
            .then(response => {
                setTransactions(response.data);
                console.log(response.data)
            })
            .catch(error => console.error('Error fetching data: ', error));
    }, []);
    
    

    return (
        <div className='performance'>
            <ul>
                <BarChart />
                {transactions.map(transaction => (
                    <li key={transaction.id}>{transaction.stock_symbol}</li>
                ))}
            </ul>
        </div>
    )
}

export default Performance;
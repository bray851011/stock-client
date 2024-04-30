import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CountUp from 'react-countup';
import LineChart from '../../components/linechart/linechart.component';
import BarChart from '../../components/barchart/barchart.component';
import TransactionCard from '../../components/transaction-card/transaction-card.component';
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
        <div>
            <section className='performance-section1'>
                <div className='upside'>
                    <div className='container'>
                        <div style={{ fontSize: '40px' }}> OVERALL PROFIT</div>
                        <div className='profit'>+<CountUp end={100.02} decimals={2} duration={1.5} /></div>
                    </div>
                </div>

                <div className='downside'>
                    <div className='container'>
                        <div className='left'>
                            <h1>Overall Performance</h1>
                            <div className='chart-container'>
                                <LineChart />
                            </div>
                        </div>
                        <div className='v-line'></div>
                        <div className='right'>
                            <h1>Monthly Performance</h1>
                            <div className='chart-container'>
                                <BarChart />
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
                
            <section className='performance-section2'>
                <h1>Transactions</h1>

                <h3 style={{ color: 'red'}}>NOTICE: $10,000 was spent on each transaction</h3>

                <div>
                    <div className='title'>
                        <div>
                            <h3>#</h3>
                        </div>
                        <div>
                            <h4>Symbol</h4>
                        </div>
                        <div>
                            <h4>Bought Date & Price</h4>
                        </div>
                        <div>
                            <h4>Sold Date & Price</h4>
                        </div>
                        <div>
                            <h4>Profit</h4>
                        </div>
                    </div>

                    {transactions.map((item, index) => (
                        <div>
                            <TransactionCard 
                                key={transactions.length - index} 
                                id={transactions.length - index} 
                                symbol={item.stock_symbol} 
                                buyDate={item.buying_day}
                                buyPrice={item.buying_price}
                                sellDate={item.selling_date}
                                sellPrice={item.selling_price}
                                profit={item.profit}
                            />
                        </div>  
                    ))}
                </div>  
            </section>
        </div>
    )
}

export default Performance;
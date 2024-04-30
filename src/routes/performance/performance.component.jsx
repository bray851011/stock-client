import React from 'react';
import CountUp from 'react-countup';
import LineChart from '../../components/linechart/linechart.component';
import BarChart from '../../components/barchart/barchart.component';
import './performance.styles.scss'
import TransTable from '../../components/table/trans-table/trans-table.component';

const Performance = () => {

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

                <TransTable />

            </section>
        </div>
    )
}

export default Performance;
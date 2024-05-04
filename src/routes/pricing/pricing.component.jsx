import CountUp from 'react-countup';

import './pricing.styles.scss'
import ProductTable from '../../components/table/product-table/product-table.component';

const Pricing = () => {

    return (
        <div className='pricing'>
            <div className='upside'>
                <div className='left'>
                    <h1>Basic Version</h1>
                    <div className='h-line'></div>
                    <div className='centered'>
                        <h2>$<CountUp end={5.99} decimals={2} duration={1.5} /></h2>
                        <h1>$<CountUp end={3.99} decimals={2} duration={1.5} /></h1>
                        <p> /month</p>
                    </div>
                </div>
                
                <div className='v-line'></div>

                <div className='right'>
                    <h1>Pro Version</h1>
                    <div className='h-line'></div>
                    <div className='centered'>
                        <h2>$<CountUp end={9.99} decimals={2} duration={1.5} /></h2>
                        <h1>$<CountUp end={7.99} decimals={2} duration={1.5} /></h1>
                        <p> /month</p>
                    </div>  
                </div>
            </div>

            <div className='downside'>
                <div className='container'>
                    <ProductTable />
                </div>
            </div>
        </div>
    )
}

export default Pricing;
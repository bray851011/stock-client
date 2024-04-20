import CountUp from 'react-countup';
import Button from '../../components/button/button.component';

import './pricing.styles.scss'

const Pricing = () => {

    return (
        <div className='pricing'>
            <div className='container'>
                <div className='left'>
                    <div className='centered'>
                        <h1>$<CountUp end={3.99} decimals={2} duration={1.5} /></h1>
                        <p> /month</p>
                    </div>
                    <div className='h-line'></div>
                    <ul>
                        <li>Recieve daily notificaiton</li>
                    </ul>
                    <div className='centered'>
                        <Button>Subscribe</Button>
                    </div>  
                </div>

                <div className='v-line'></div>

                <div className='right'>
                    <div className='centered'>
                        <h1>$<CountUp end={7.99} decimals={2} duration={1.5} /></h1>
                        <p> /month</p>
                    </div>
                    <div className='h-line'></div>
                    <ul>
                        <li>Recieve daily notificaiton</li>
                        <li className='li2'>Recieve notification when I bought or sell stocks</li>
                        <li id='li3'>Able to view my live holding</li>
                    </ul>
                    <div className='centered'>
                        <Button>Subscribe</Button>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Pricing;
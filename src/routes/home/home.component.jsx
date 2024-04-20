import CountUp from 'react-countup';

import { AiOutlineStock } from "react-icons/ai";
import './home.styles.scss'

const Home = () => {
    return (
        <div>
            <section className='section1'>

                <div className='upside'>
                    <div className='container'>
                        <div className='header'>
                            <AiOutlineStock style={{ color: 'lightgray', fontSize: '100px' }}/>
                            <h1>THE STOCK SPOTTER</h1>
                        </div>
                        <h3>An AI-POWERED Algorithm</h3>
                        <p>Let AI picks the right stocks for you</p>

                    </div>
                </div>

                <div className='downside'>
                    <div className='container'>
                        <div className='left'>
                            <div style={{ fontSize: '48px' }}>PROFIT</div>
                            <div style={{ fontSize: '48px' }}>$<CountUp end={100.02} decimals={2} duration={1.5} /></div>
                        </div>
                        <div className='v-line'></div>
                        <div className='right'>
                            <div style={{ fontSize: '48px' }}>ACTIVE USERS</div>
                            <div style={{ fontSize: '48px' }}><CountUp end={13} duration={2} /></div>
                        </div>
                    </div>
                </div>
                
            </section>
                
            <section className='section2'>
                
            </section>
        </div>
    )
}

export default Home;
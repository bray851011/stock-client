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
                            <AiOutlineStock className='logo-icon'/>
                            <h1>THE STOCK SPOTTER</h1>
                        </div>
                        <h3>An AI-POWERED Algorithm</h3>
                        <p>Let AI picks the right stocks for you</p>
                    </div>
                </div>

                <div className='downside'>
                    <div className='container'>
                        <div className='left'>
                            <div className='text'>PROFIT</div>
                            <div className='text'>$<CountUp end={100.02} decimals={2} duration={1.5} /></div>
                        </div>
                        <div className='v-line'></div>
                        <div className='h-line'></div>
                        <div className='right'>
                            <div className='text'>ACTIVE USERS</div>
                            <div className='text'><CountUp end={13} duration={2} /></div>
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
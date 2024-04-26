

import './transaction-card.styles.scss'

const TransactionCard = (props) => {
    const backgroundColor = props.profit >= 0 ? 'lightgreen' : 'rgb(255, 182, 193)';

    return (
        <div className='card' style={{ backgroundColor: backgroundColor}}>
            <div>
                <h4>{props.id}</h4>
            </div>
            <div>
                <h3>{props.symbol}</h3>       
            </div>
            <div>
                <h3>{props.buyDate}</h3>    
                <h3>{props.buyPrice}</h3>    
            </div>
            <div>
                <h3>{props.sellDate}</h3> 
                <h3>{props.sellPrice}</h3>  
            </div>
            <div>
                <h3>{props.profit}</h3>  
            </div>
        </div>
    )
}

export default TransactionCard;
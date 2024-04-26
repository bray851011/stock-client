import { useState, useEffect } from 'react';
import axios from 'axios';

import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const BarChart = () => { 
  const [transaction, setTransactions] = useState([]);

  useEffect(() => {
      const url = `http://127.0.0.1:8000/monthly_profit/`;
      console.log(url)
      axios.get(url)
        .then((response) => {
          setTransactions(response.data);
        })
        .catch((error) => {
          console.log(error)
        });
  }, [])

    const data = {
      labels: transaction[0],
      datasets: [
        {
          label: 'profit',
          data: transaction[1],
          borderColor:'gray',
          backgroundColor: function(context) {
            const value = context.dataset.data[context.dataIndex];
            return value < 0 ? 'rgba(255, 99, 132, 0.8)' : 'lightgreen';
          },
          borderWidth: 2,
          borderRadius: 10,
          borderSkipped: false,
        }
      ]
    };
    return (
        <div>
            <Bar className='line' data={data}  /> 
        </div>
    )
}

export default BarChart;
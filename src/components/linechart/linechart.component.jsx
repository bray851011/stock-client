import { useState, useEffect } from 'react';
import axios from 'axios';

import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const LineChart = () => {
    const [transaction, setTransactions] = useState([]);

    useEffect(() => {
        const url = `http://127.0.0.1:8000/cumulative-profits/`;
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
          backgroundColor: 'lightgreen',
          borderWidth: 2,
          borderRadius: 10,
          borderSkipped: false,
        }
      ]
    };

    const options = {
        scales: {
          y: {
            ticks: {
              // Use the formatTime function to format Y-axis tick labels
            },
          }
        },
        animations: {
          y: {
            easing: 'easeInOutElastic',
            from: (ctx) => {
              if (ctx.type === 'data') {
                if (ctx.mode === 'default' && !ctx.dropped) {
                  ctx.dropped = true;
                  return 0;
                }
              }
            }
          },
              radius: {
                duration: 400,
                easing: 'linear',
                loop: (context) => context.active
              }
            },
            hoverRadius: 8,
            hoverBackgroundColor: 'blue',
            interaction: {
              mode: 'nearest',
              intersect: false,
              axis: 'x'
            },
            plugins: {
              tooltip: {
                enabled: true
              }
            } 
            
    };

    return (
        <div>
            <Line className='line' data={data}  options={options}/> 
        </div>
    )
}

export default LineChart;
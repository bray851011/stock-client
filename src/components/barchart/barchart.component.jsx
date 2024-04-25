import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const BarChart = () => {
    
    const labels = [1,2];
    const data = {
      labels: labels,
      datasets: [
        {
          label: 'profit',
          data: [133,-234],
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
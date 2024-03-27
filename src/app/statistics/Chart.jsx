import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  
export default function Cchart(){
    const labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'thursday', 'Friday', 'Saturday'];
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart',
          },
        },
      };

      const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: JSON.parse(localStorage.getItem('sampdata') || '[]'),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          }
        ],
      };

    return(
        <>
            <Bar options={options} data={data} />
        </>
    )
}
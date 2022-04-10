import React, { useEffect, useRef, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Chart, Line } from 'react-chartjs-2'
import { CircularProgress } from '@chakra-ui/react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)
export const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
export const options = {
    scales: {
      x: {
        title: {
          text: 'x',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          text: 'y',
        },
      },
    },
    plugins: {
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true,
          },
          mode: 'xy',
        },
        limits: {
          y: { min: -150, max: 150 },
          x: { min: -150, max: 150 },
        },
      },
    },
  }

function createGradient(ctx, area) {
    const colorStart = "#FE6100"
    const colorEnd = "#FFEE00"
  
    const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
  
    gradient.addColorStop(0, colorStart);
    gradient.addColorStop(1, colorEnd);
  
    return gradient;
  }



function LineGraph(props) {

    const chartRef = useRef(null)
    const [chartData, setChartData] = useState({
        datasets: [],
      });

    

    useEffect(() => {
        const chart = chartRef.current;
    
        if (!chart) {
          return;
        }
    
        const chartData = {
          ...data,
          datasets: data.datasets.map(dataset => ({
            ...dataset,
            borderColor: createGradient(chart.ctx, chart.chartArea),
          })),
        };
    
        setChartData(chartData);
      }, []);

    if(props.data == null){
        return <CircularProgress isIndeterminate color='green.300' mx='auto'/>
    }

    const data = {
        labels: props.data.labels,
        datasets: [
            {
                label: 'доступность сервиса',
                data: props.data.data,
            }
        ]
    }

    debugger

    
    return (
        <div>
            <Chart 
                ref={chartRef}
                type='line'
                // options={{
                //     responsive: true,
                //     plugins: {
                //         title: {
                //             display: true,
                //             text: props.data.title
                //         },
                //     },
                //     interaction: {
                //         mode: 'index',
                //         intersect: false
                //     },
                //     scales: {
                //         x: {
                //             display: true,
                //             title: {
                //                 display: false,
                //                 text: 'Month'
                //             }
                //         },
                //         y: {
                //             display: false,
                //             title: {
                //                 display: true,
                //                 text: 'Value'
                //             }
                //         }
                //     }
                // }}
                data={chartData}
            />
        </div>
    );
}

export default LineGraph;
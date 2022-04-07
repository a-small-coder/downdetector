import React from 'react';
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
import { Line } from 'react-chartjs-2'
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

function LineGraph(props) {

    if(props.data == null){
        return <CircularProgress isIndeterminate color='green.300' mx='auto'/>
    }

    const data = {
        labels: props.data.labels,
        datasets: [
            {
                label: 'доступность сервиса',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: props.data.data,
                fill: true,
            }
        ]
    }
    return (
        <div>
            <Line
                options={{
                    responsive: true,
                    plugins: {
                        title: {
                            display: true,
                            text: props.data.title
                        },
                    },
                    interaction: {
                        mode: 'index',
                        intersect: false
                    },
                    scales: {
                        x: {
                            display: true,
                            title: {
                                display: false,
                                text: 'Month'
                            }
                        },
                        y: {
                            display: false,
                            title: {
                                display: true,
                                text: 'Value'
                            }
                        }
                    }
                }}
                data={data}
            />
        </div>
    );
}

export default LineGraph;
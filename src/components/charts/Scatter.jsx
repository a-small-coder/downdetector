import { forwardRef } from 'react'
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js'
import zoomPlugin from 'chartjs-plugin-zoom'
import { Scatter } from 'react-chartjs-2'

// Helper function
import { random } from '../../utils/support_functions'

ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  zoomPlugin
)

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

export const data = {
  datasets: [
    {
      label: 'A dataset',
      data: Array.from({ length: 100 }, () => ({
        x: random(-100, 100),
        y: random(-100, 100),
      })),
      backgroundColor: '#FC8181',
    },
    {
      label: 'B dataset',
      data: Array.from({ length: 100 }, () => ({
        x: random(-100, 100),
        y: random(-100, 100),
      })),
      backgroundColor: '#68D391',
    },
    {
      label: 'C dataset',
      data: Array.from({ length: 100 }, () => ({
        x: random(-100, 100),
        y: random(-100, 100),
      })),
      backgroundColor: '#76E4F7',
    },
  ],
}

/**
 * Scatter chart with random data
 * @param ref ref: link to dom element
 */
const ScatterGraph = forwardRef((props, ref) => {
  return <Scatter {...props} ref={ref} options={options} data={data} />
})

export default ScatterGraph

import React from 'react';
import { Bar } from 'react-chartjs-2';

import { textToDataSet } from '../utils';

const Histogram = ({ text, title = {} }) => (
  <div>
    <Bar data={textToDataSet(text)}
      options={{
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            display: true,
            ticks: {
              // Callback is used to make sure all ticks are integers
              // without setting a fixed step size which will ruin
              // automatic skipping of ticks.
              callback: (value) => (Math.floor(value) === value ? value : null),
              suggestedMin: 0
            },
            type: 'linear'
          }]
        },
        title
      }} />
  </div>
);

export default Histogram;

import React, { Component, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from 'react-chartjs-2';

import './assets/stylesheets/style.css';

// webpack hard-codes process.env.BACKEND_PORT in the build
const BACKEND_PORT = process.env.BACKEND_PORT;

// replace baseUrl with a custom IP if backend runs on a different server, e.g. try pannu01: "95.216.207.125"
const baseUrl = "95.216.207.125";

const backendUrl = `http://${baseUrl}:${BACKEND_PORT}`;

// options for a chart
const options = {
  maintainAspectRatio: false,
}

// fetch sensor data from backend
const getData = async () => {

  // the format in which data is passed to a chart
  const data = {
    datasets: [
      {
        label: 'Temperature (°C)',
        data: [],
        borderColor: 'rgb(220, 0, 0)',
      },
      {
        label: 'Humidity (%RH)',
        data: [],
        borderColor: 'rgb(75, 192, 192)',
      }
    ],
    labels: []
  }

  const res = await fetch(`${backendUrl}/api/events`);
  const { results } = await res.json();

  /*shorter_results = results;
  shorter_results.reverse();
  shorter_results.splice(1000);
  shorter_results.reverse();*/

  results.splice(0, results.lenght - 1000);


  // add the fetched data into the data structure above
  shorter_results.forEach(datapoint => {
    data.datasets[0].data.push(datapoint.temperature);
    data.datasets[1].data.push(datapoint.humidity);
    data.labels.push(datapoint.createdAt);
  });


  return data;
}

const App = () => {
  const [data, setData] = useState();

  // useEffect will be run only on the first render
  useEffect(async () => {
    // here we get the data from the backend...
    const chartData = await getData();
    console.log(chartData);
    // ...and store it for later use
    setData(chartData);
  }, []);

  // display loading text until we have fetched the data
  if (!data) {
    return <div>Loading</div>
  }

  return (
    <div className='chart'>
      <Line data={data} opotions={options} />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

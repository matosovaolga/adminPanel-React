import React, { Component } from 'react';
import './chart.scss';
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
  Tooltip,
  Legend
);



export default class Chart extends Component {

	render() {
			
		return (
			<div className="chart widget">
			<h3 className="chartTitle">{this.props.title}</h3>
				 <Bar  options={this.props.dataKey} data={this.props.data} />
			</div>
		);
	}
}

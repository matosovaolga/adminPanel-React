import './chart.scss';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { ChartProps } from './Chart.props';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Tooltip,
	Legend
);


export default function Chart({ title, data, dataKey }: ChartProps): JSX.Element {


	return (
		<div className="chart widget">
			<h3 className="chartTitle">{title}</h3>
			<Bar
				options={dataKey}
				data={data}
			/>
		</div>
	);
}

import styles from './Home.module.scss';
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import { userData, userOptions } from '../../dummyData';
import { WidgetSm } from '../../components/widgetSm/WidgetSm';
import { WidgetLg } from '../../components/widgetLg/WidgetLg';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	BarElement,
	Tooltip,
	Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Htag } from '../../components/Htag/Htag';
import { Widget } from '../../components/Widget/Widget';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Tooltip,
	Legend
);
const userAnalyticsTitle = 'User Analytics';


export default function Home(): JSX.Element {


	return (
		<div className={styles.home}>
			<FeaturedInfo />
			<Widget>
				<div className={styles.chart}>
					<Htag tag="h3">{userAnalyticsTitle}</Htag>
					<Bar
						options={userOptions}
						data={userData}
					/>
				</div>
			</Widget>
			<div className={styles.homeWidgets}>
				<WidgetSm />
				<WidgetLg />
			</div>
		</div>
	);
}

import styles from './Home.module.scss';
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo';
import { userData, userOptions } from '../../dummyData';
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
import { NewUsers } from '../../components/NewUsers/NewUsers';

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
			<Widget size="full">
				<Htag tag="h3">{userAnalyticsTitle}</Htag>
				<Bar
					options={userOptions}
					data={userData}
				/>
			</Widget>
			<div className={styles.homeWidgets}>
				<Widget size="sm">
					<Htag tag="h3">New Join Members</Htag>
					<NewUsers />
				</Widget>
				<Widget size="m">
					<Htag tag="h3">Latest transactions</Htag>
					<WidgetLg />
				</Widget>
			</div>
		</div>
	);
}

import { ArrowDownwardOutlined, ArrowUpwardOutlined } from '@mui/icons-material';
import { Htag } from '../..';
import styles from './FeatureItem.module.scss';
import { FeatureItemProps } from './FeatureItem.props';
import cn from 'classnames';
export default function FeaturedItem(data: FeatureItemProps): JSX.Element {
	return (
		<div>
			<Htag tag="h3">{data.title}</Htag>
			<div className={styles.container}>
				<span className={styles.money}>${data.money}</span>
				<span className={styles.rate}>{data.rate}
					{
						data.rate < 0 ? <ArrowDownwardOutlined className={cn(styles.icon, styles.negative)} /> : <ArrowUpwardOutlined className={cn(styles.icon)} />
					}
				</span>
			</div>
			<span className={styles.sub}>Compared to last month</span>
		</div>
	);
}
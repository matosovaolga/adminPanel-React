import { ArrowDownwardOutlined, ArrowUpwardOutlined } from '@mui/icons-material';
import { Htag } from '../../Htag/Htag';
import styles from './FeatureItem.module.scss';
import { FeatureItemProps } from './FeatureItem.props';

export default function FeaturedItem(data: FeatureItemProps): JSX.Element {
	return (
		<>
			<Htag tag="h3">{data.title}</Htag>
			<div className={styles.container}>
				<span className={styles.money}>${data.money}</span>
				<span className={styles.rate}>{data.rate}
					<ArrowDownwardOutlined className={styles.icon} />
				</span>
			</div>
			<span className={styles.sub}>Compared to last month</span>
		</>
	);
}
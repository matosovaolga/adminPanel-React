import styles from './FeaturedInfo.module.scss';
import { Widget } from '../Widget/Widget';
import FeaturedItem from './FeatureItem/FeatureItem';
import { FeatureItemProps } from './FeatureItem/FeatureItem.props';

const featureData: FeatureItemProps[] = [
	{
		"money": 2.415,
		"title": "Revanue",
		"rate": -11.4
	},
	{
		"money": 4.415,
		"title": "Sales",
		"rate": -1.4
	},
	{
		"money": 2.225,
		"title": "Cost",
		"rate": 2.4
	}
];

export default function FeaturedInfo(): JSX.Element {

	return (
		<div className={styles.featured}>
			<>
				{
					featureData.map(m => (
						<Widget size="sm" key={m.title} className={styles.hasHoverEffect}>
							<FeaturedItem {...m}></FeaturedItem>
						</Widget>
					))
				}
			</>
		</div >
	);
}

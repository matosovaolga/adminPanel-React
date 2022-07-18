import React from 'react';

import styles from './widgetLg.module.scss';
import { userRows } from '../../dummyData';
import { Button } from '../Button/Button';


export function WidgetLg(): JSX.Element {
	return (
		<table className={styles.table}>
			<tbody>
				<tr >
					<th className={styles.th}>
						Customer
					</th>
					<th className={styles.th}>
						Date
					</th>
					<th className={styles.th}>
						Amount
					</th>
					<th className={styles.th}>
						Status
					</th>
				</tr>
				{
					userRows.filter(item => item.id < 5).map((item) => (
						<tr key={item.id}>
							<td className={styles.user}>
								<img src={item.avatar} alt="" className={styles.img} />
								<span className={styles.name}>{item.username}</span>
							</td>
							<td className={styles.date}>
								{item.birthday}
							</td>
							<td className={styles.amount}>
								{item.transaction}
							</td>
							<td>
								<Button type={item.transactionStatus || 'default'}>{item.transactionStatus}</Button>
							</td>
						</tr>
					))}
			</tbody>
		</table>
	);
}

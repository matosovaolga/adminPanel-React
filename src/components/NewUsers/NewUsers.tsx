import React from 'react';
import './NewUsers.props';
import styles from "./NewUsers.module.scss";
import { VisibilityOutlined } from '@mui/icons-material';
import { Button } from '../Button/Button';
import { userRows } from '../../dummyData';



export function NewUsers(): JSX.Element {

	return (
		<>
			<ul className={styles.userList}>
				{
					userRows.filter(item => item.mark == 'new').map((item) => (
						<li key={item.id} className={styles.listItem}>
							<div className={styles.user}>
								<img className={styles.img} src={item.avatar} alt="" />
								<div className={styles.usernames}>
									<span className={styles.name}>{item.username}</span>
									<span className={styles.position}>{item.position}</span>
								</div>

							</div>
							<Button type="default">
								<VisibilityOutlined className={styles.btnIcon} />
								Display
							</Button>
						</li>

					))
				}

			</ul>
		</>
	);
}

import styles from './TopBar.module.scss';
import { TopBarProps } from "./TopBar.props";
import { Language, Menu, NotificationsNone, Settings } from '@mui/icons-material';
import { AvatarComponent, IButton } from '..';
import { useState } from 'react';



export const TopBar = ({ messages, ...props }: TopBarProps): JSX.Element => {
	const [numberM, setNumberM] = useState(messages);
	return (
		<header className={styles.topbar} {...props}>

			<div className="topLeft" >
				<IButton><Menu /></IButton>
			</div>
			<div className={styles.topRight}>

				<IButton apperance='hoverBackground' className={styles.topbarIconContainer}>
					<NotificationsNone />
					<span className={styles.topbarIconBag}>{numberM}</span>
				</IButton>
				<IButton apperance='hoverBackground' className={styles.topbarIconContainer}>
					<Language />
					<span className={styles.topbarIconBag}>2</span>
				</IButton>
				<IButton apperance='hoverBackground' className={styles.topbarIconContainer}>
					<Settings />
				</IButton>
				<div className={styles.userInfo}>
					<AvatarComponent src='https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg' />
					<div className={styles.nameInfo}>
						<span className={styles.name}>Anna Naman</span>
						<span className={styles.position}>Founder</span>
					</div>


				</div>
			</div>
		</header>

	);
};
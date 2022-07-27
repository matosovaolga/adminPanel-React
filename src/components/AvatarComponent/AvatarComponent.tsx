
import { AvatarComponentProps } from "./AvatarComponent.props";
import styles from './AvatarComponent.module.scss';
import cn from 'classnames';

export const AvatarComponent = ({ src }: AvatarComponentProps): JSX.Element => {
	return (
		<img src={src} alt="" className={cn(styles.avatar)} />
		// <img src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg" alt="" className={cn(styles.avatar)} />

	);
};
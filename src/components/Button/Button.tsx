
import { ButtonProps } from "./Button.props";
import styles from './Button.module.scss';
import cn from 'classnames';

export const Button = ({ type, children }: ButtonProps): JSX.Element => {

	return (
		<button
			className={cn(styles.btn, {
				[styles.default]: type == 'default',
				[styles.approved]: type == 'approved',
				[styles.active]: type == 'active',
				[styles.declined]: type == 'declined',
				[styles.pending]: type == 'pending'
			})}
		>{children}</button>
	);
}
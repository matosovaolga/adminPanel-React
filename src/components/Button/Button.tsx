
import { ButtonProps } from "./Button.props";
import styles from './Button.module.scss';
import cn from 'classnames';

export const Button = ({ appearence, children, className, ...props }: ButtonProps): JSX.Element => {

	return (
		<button
			className={cn(styles.btn, className, {
				[styles.default]: appearence == 'default',
				[styles.approved]: appearence == 'approved',
				[styles.active]: appearence == 'active',
				[styles.declined]: appearence == 'declined',
				[styles.pending]: appearence == 'pending'
			})}
			{...props}
		> {children}</button >
	);
};
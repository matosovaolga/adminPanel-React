import React from "react";
import { IButtonProps } from "./IButton.props";
import styles from './IButton.module.scss';
import cn from 'classnames';

export const IButton = ({ children, apperance, className, ...props }: IButtonProps): JSX.Element => {
	return (
		<button className={cn(className, styles.iButton, {
			[styles.hasHover]: apperance == 'hoverBackground',
			[styles.budge]: apperance == 'budge'
		})} {...props}>{children}</button>
	);
};
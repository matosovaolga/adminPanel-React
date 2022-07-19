import React from "react";
import { WidgetProps } from "./Widget.props";
import styles from './Widget.module.scss';
import cn from "classnames";


export const Widget = ({ size, children, className, ...props }: WidgetProps): JSX.Element => {
	return (
		<div className={
			cn(styles.widget, className, {
				[styles.lg]: size == 'lg',
				[styles.sm]: size == 'sm',
				[styles.m]: size == 'm',
				[styles.full]: size == 'full'
			})} {...props}> {children}</div >);
};
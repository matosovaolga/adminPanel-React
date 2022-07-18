import React from "react";
import { WidgetProps } from "./Widget.props";
import styles from './Widget.module.scss';
import cn from "classnames";


export const Widget = ({ size, children }: WidgetProps): JSX.Element => {
	return (
		<div className={
			cn(styles.widget, {
				[styles.lg]: size == 'lg',
				[styles.sm]: size == 'sm',
				[styles.m]: size == 'm',
				[styles.full]: size == 'full'
			})}> {children}</div >);
};
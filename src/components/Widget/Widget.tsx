import React from "react";
import { WidgetProps } from "./Widget.props";
import styles from './Widget.module.scss';


export const Widget = ({ children }: WidgetProps): JSX.Element => {
	return (<div className={styles.widget}> {children}</div >);
}
import { ReactNode } from "react";

export interface WidgetProps {
	children: ReactNode;
	size: 'sm' | 'm' | 'lg' | 'full';
}
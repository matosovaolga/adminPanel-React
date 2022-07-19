import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface WidgetProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
	size: 'sm' | 'm' | 'lg' | 'full';
}
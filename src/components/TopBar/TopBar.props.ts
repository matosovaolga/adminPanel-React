import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface TopBarProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadElement>, HTMLHeadElement> {
	messages: number;
}
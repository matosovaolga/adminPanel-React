import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {

}

export enum TopLevelCategory {
	Dashboard,
	QuickMenu,
	Notifications,
	Staff
}

export interface FirstLevelMenuItem {
	route: string;
	name: string;
	id: TopLevelCategory;
}
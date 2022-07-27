import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";
import { IUserData } from "../../interfaces/user.interface";

export interface EditUserProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	userData?: IUserData
}

export interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}
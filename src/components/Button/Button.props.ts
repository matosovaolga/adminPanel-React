import { ReactNode } from "react";

export interface ButtonProps {
	type: 'default' | 'approved' | 'declined' | 'active' | 'pending';
	children?: ReactNode;
}
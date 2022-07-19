import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	appearence: 'default' | 'approved' | 'declined' | 'active' | 'pending';
	children?: ReactNode;
}
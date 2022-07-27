import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	children: ReactNode;
	apperance?: 'hoverBackground' | 'budge';
}
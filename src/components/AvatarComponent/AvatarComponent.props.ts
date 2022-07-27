import { DetailedHTMLProps, ImgHTMLAttributes } from "react";


export interface AvatarComponentProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
	src?: string
}
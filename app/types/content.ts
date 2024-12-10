import { CSSProperties, ReactNode } from "react";

export interface ContentBox {
	image: string;
	title: string;
	description: string;
	body: string;
	gif: string;
}

export interface PostItNoteProps {
	children?: ReactNode;
	color?: string;
	style?: CSSProperties;
	className?: string;
}

export interface CardData {
	title: string;
	description: string;
}

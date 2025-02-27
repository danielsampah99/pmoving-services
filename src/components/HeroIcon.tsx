import { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";

export type HeroIconType = ForwardRefExoticComponent<
	Omit<SVGProps<SVGSVGElement>, "ref"> & {
		title?: string;
		titleId?: string;
	} & RefAttributes<SVGSVGElement>
>;

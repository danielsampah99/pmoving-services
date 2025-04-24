import { LucideIcon } from "lucide-react";
import type { ForwardRefExoticComponent, RefAttributes, SVGProps } from "react";
import { FlatIcon } from "./icons/flaticon";

export type HeroIconType = ForwardRefExoticComponent<
	Omit<SVGProps<SVGSVGElement>, "ref"> & {
		title?: string;
		titleId?: string;
	} & RefAttributes<SVGSVGElement>
>;

export type IconType = HeroIconType | LucideIcon | FlatIcon;

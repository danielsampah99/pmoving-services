import {
	BuildingOfficeIcon,
	HomeModernIcon,
	TruckIcon,
	CubeTransparentIcon,
	HomeIcon,
} from "@heroicons/react/24/outline";

import type { IconType } from "@/components/HeroIcon";
import { MapIcon, PlayCircleIcon } from "@heroicons/react/20/solid";
import {
	BoxesIcon,
	Building2Icon,
	BuildingIcon,
	PackageIcon,
	UsersIcon,
} from "lucide-react";
import { CorporateIcon } from "@/components/icons/corporate-icon";

export type Service = {
	id: number;
	name: string;
	description: string;
	href: string;
	icon: IconType;
	subServices: ChildMenu[];
};

export type CallToAction = Pick<Service, "name" | "href" | "icon">;

export type ChildMenu = Pick<Service, "name" | "href">;

export const services: Service[] = [
	{
		id: 1,
		name: "Local Moving",
		description: "Reliable moving within the same city",
		href: "/services/local-moving",
		icon: HomeModernIcon,
		subServices: [
			{
				name: "Residential Movers",
				href: "/services/local-moving/residential-movers",
			},
			{
				name: "Household Goods",
				href: "/services/local-moving/household",
			},
			{
				name: "Pack & Unpack",
				href: "/services/local-moving/pack-and-unpack",
			},
			{
				name: "Apartment Movers",
				href: "/services/local-moving/apartment-movers",
			},

			{
				name: "Condo Movers",
				href: "/services/local-moving/condo-movers",
			},
			{
				name: "HOA Movers",
				href: "/services/local-moving/hoa-movers",
			},
		],
	},
	{
		id: 2,
		name: "Commercial Moving",
		description: "Office and business relocation services",
		href: "/services/commercial-moving",
		icon: BuildingOfficeIcon,
		subServices: [
			{
				name: "Office Movers",
				href: "/services/commercial-moving/office-movers",
			},
			{
				name: "Corporate Relocation",
				href: "/services/commercial-moving/corporate-relocation",
			},
			{
				name: "Retail Relocation",
				href: "/services/commercial-moving/retail-relocation",
			},
			{
				name: "Warehouse Industrial",
				href: "/services/commercial-moving/warehouse-industrial",
			},
			{
				name: "Small Business Movers",
				href: "/services/commercial-moving/small-business-movers",
			},
		],
	},
	{
		id: 3,
		name: "Long Distance Moving",
		description: "Safe and secure cross-country moving",
		href: "/services/long-distance-moving",
		icon: TruckIcon,
		subServices: [
			{
				name: "Long Distance Residential",
				href: "/services/long-distance-moving/long-distance-residential",
			},
			{
				name: "Long Distance Commercial",
				href: "/services/long-distance-moving/long-distance-commercial",
			},
			{
				name: "Interstate Moving Specialists",
				href: "/services/long-distance-moving/interstate-moving-specialists",
			},
			{
				name: "Employee Relocation",
				href: "/services/long-distance-moving/employee-relocation",
			},
		],
	},
	{
		id: 4,
		name: "Specialty Moving",
		description: "High-value items that require extra care",
		href: "/services/specialty-moving",
		icon: CubeTransparentIcon,
		subServices: [
			{
				name: "Antique Furniture",
				href: "/services/specialty-moving/antique-furniture",
			},
			{
				name: "Furniture Moving",
				href: "/services/specialty-moving/furniture-moving",
			},
			{
				name: "Gun Safe Moving",
				href: "/services/specialty-moving/gun-and-safe-moving",
			},
			{
				name: "Moving Labor",
				href: "/services/specialty-moving/labor-only",
			},
			{
				name: "Loading & Unloading",
				href: "/services/specialty-moving/load-and-unloading",
			},
		],
	},
];

export const callsToAction: CallToAction[] = [
	{ name: "Gallery", href: "/gallery", icon: PlayCircleIcon },
	{ name: "Find us", href: "/#our-locations", icon: MapIcon },
];
export type RelatedServices = {
	name: string;
	description: string;
	href: string;
	icon: IconType;
};

export const localMovingServices: RelatedServices[] = [
	{
		name: "Residential Movers",
		description: "Professional relocation services for homes and apartments",
		icon: HomeIcon,
		href: "/services/local-moving/residential-movers",
	},
	{
		name: "Household Goods",
		description: "Safe transportation of personal belongings and furniture",
		icon: PackageIcon,
		href: "/services/local-moving/household",
	},
	{
		name: "Pack & Unpack",
		description: "Full-service packing and unpacking solutions",
		icon: BoxesIcon,
		href: "/services/local-moving/pack-and-unpack",
	},
	{
		name: "Apartment Movers",
		description: "Expert moves for apartment complexes and high-rises",
		icon: BuildingIcon,
		href: "/services/local-moving/apartment-movers",
	},
	{
		name: "Condo Movers",
		description: "Specialized moving services for condominiums",
		icon: Building2Icon,
		href: "/services/local-moving/condo-movers",
	},
	{
		name: "HOA Movers",
		description: "Coordinated moves for HOA-managed properties",
		icon: UsersIcon,
		href: "/services/local-moving/hoa-movers",
	},
];

export const commercialMovingServices: RelatedServices[] = [
	{
		name: "corporate Relocation",
		description: "Seamless transition for your enterprise, zero downtime",
		icon: CorporateIcon,
		href: "/services/commercial-moving/corporate-relocation",
	},
	{
		name: "Office Movers",
		description: "Your workspace, relocated with precision and care",
		icon: CorporateIcon,
		href: "/services/commercial-moving/office-movers",
	},
	{
		name: "Retail Relocation",
		description: "Keep business flowing while we handle your store move",
		icon: CorporateIcon,
		href: "/services/commercial-moving/retail-relocation",
	},
	{
		name: "Small Business Movers",
		description: "Big moving solutions tailored for small businesses",
		icon: CorporateIcon,
		href: "/services/commercial-moving/small-business-movers",
	},
	{
		name: "Warehouse Industrial Movers",
		description: "Heavy-duty logistics for your industrial space",
		icon: CorporateIcon,
		href: "/services/commercial-moving/warehouse-industrial",
	},
];

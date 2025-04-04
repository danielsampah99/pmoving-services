"use client";

import Link from "next/link";
import { type FC, useState } from "react";
import {
	TruckIcon,
	MapIcon,
	UsersIcon,
	DatabaseIcon,
	HomeIcon,
	BuildingIcon,
	Building2Icon,
	ShoppingBagIcon,
	PianoIcon,
	GlobeIcon,
	TrashIcon,
	type LucideIcon,
	PackageIcon,
} from "lucide-react";
import { HeroIconType } from "./HeroIcon";
import { FlatIcon } from "./flaticons";
import { SafeIcon } from "./icons/safe-icon";
import { StorageIcon } from "./icons/storage-icon";
import { cn } from "@/utils";
import { LogisticsIcon } from "./icons/logistics-icon";

export interface ServiceCardData {
	id: number,
	title: string;
	description: string;
	icon: LucideIcon | HeroIconType | FlatIcon;
	href: string;
}

export const serviceCardData: ServiceCardData[] = [
	{
		id: 1,
		title: "Local Moving",
		description:
			"Professional and reliable local moving services tailored to your needs. We handle your belongings with utmost care.",
		href: "/services/local-moving",
		icon: TruckIcon,
	},
	{
		id: 2,
		title: "Packing Services",
		description:
			"Expert solutions to ensure your items are safely prepared for transport",
		href: "/services/packing-services",
		icon: PackageIcon,
	},
	{
		id: 3,
		title: "Long Distance Moving",
		description:
			"Seamless long-distance moving services with careful planning and execution.",
		href: "/services/long-distance-moving",
		icon: MapIcon,
	},
	{
		id: 4,
		title: "Moving Labor",
		description:
			"Skilled moving professionals ready to handle heavy lifting and careful transportation of your belongings.",
		href: "services/moving-labor",
		icon: UsersIcon,
	},
	{
		id: 5,
		title: "Storage Services",
		description:
			"Secure, climate-controlled storage solutions for both short-term and long-term needs.",
		href: "/services/storage-services",
		icon: StorageIcon,
	},
	{
		id: 6,
		title: "Residential Moving",
		description:
			"Professional moving services tailored to your needs. We handle your belongings with utmost care.",
		href: "/services/residential-moving",
		icon: HomeIcon,
	},
	{
		id: 7,
		title: "Corporate Moving",
		description:
			"Expert packing solutions to ensure your items are safely prepared for transport using premium materials for maximum protection.",
		href: "/services/corporate-moving",
		icon: BuildingIcon,
	},
	{
		id: 8,
		title: "Apartment Moving",
		description:
			"Seamless moving with careful planning and execution for the best relocation experience.",
		href: "/services/apartment-moving",
		icon: Building2Icon,
	},
	{
		id: 9,
		title: "Packing Supplies",
		description:
			"Skilled moving professionals ready to handle heavy lifting and careful transportation of your belongings.",
		href: "/services/packing-supplies",
		icon: ShoppingBagIcon,
	},
	{
		id: 10,
		title: "Safes & Gun safes",
		description:
			"Secure, climate-controlled storage solutions for both short-term and long-term needs.",
		href: "/services/safes-and-gun-safes",
		icon: SafeIcon,
	},
	{
		id: 11,
		title: "Pianos",
		description:
			"Professional piano moving services, ensuring safe and secure transport.",
		href: "/services/piano-moving",
		icon: PianoIcon,
	},
	{
		id: 12,
		title: "Junk Removal",
		description:
			"Efficient and responsible junk removal services to declutter your space.",
		href: "/services/junk-removal",
		icon: TrashIcon,
	},
	{
		id: 13,
		title: "International Move",
		description:
			"Comprehensive international moving services for a smooth relocation experience.",
		href: "/services/international-moving",
		icon: GlobeIcon,
	},
	{
		id: 14,
		title: "Logistics Services",
		description:
			"Reliable logistics solutions for businesses and individuals, tailored to your specific needs.",
		href: "/services/logistics-services",
		icon: LogisticsIcon,
	},
];

export const ServiceCard: FC<{ service: ServiceCardData; index: number }> = ({
	service,
	index,
}) => {
	const [isFlipped, setIsFlipped] = useState(false);

	const isFlatIcon = [5, 10, 14].includes(service.id)

	return (
		<div
			className="opacity-100 animate-ease-in"
			style={{ animationDelay: `${index * 100}ms` }}
		>
			<Link href={service.href}>
				<div
					className="relative h-32 sm:h-48 w-full cursor-pointer"
					onMouseEnter={() => setIsFlipped(true)}
					onMouseLeave={() => setIsFlipped(false)}
					style={{ perspective: "1000px" }}
				>
					<div
						className="relative size-full transition-all duration-500 max-sm:p-2"
						style={{
							transformStyle: "preserve-3d",
							transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
						}}
					>
						{/* front of card */}
						<div
							className="absolute w-full h-full rounded-lg bg-gradient-to-br from-white via-gray-50 to-slate-100 shadow-md flex flex-col items-center justify-center p-2 md:p-6"
							style={{ backfaceVisibility: "hidden" }}
						>
							<div className="text-teal-900">
								<service.icon className={cn("size-7 sm:size-12", !isFlatIcon && 'stroke-yellow-400 fill-white')} />
							</div>
							<h3 className="text-xl max-sm:text-base font-medium mt-4 text-center">
								{service.title}
							</h3>
						</div>

						{/* Back of card */}
						<div
							className="absolute w-full h-full rounded-lg bg-moving-gray shadow-md"
							style={{
								backfaceVisibility: "hidden",
								transform: "rotateY(180deg)",
							}}
						>
							<div className="flex h-full overflow-y-auto flex-col justify-center p-6">
								<h3 className="text-xl font-semibold mb-3 text-white">
									{service.title}
								</h3>
								<p className="text-sm text-ellipsis opacity-90 text-gray-200">
									{service.description}
								</p>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

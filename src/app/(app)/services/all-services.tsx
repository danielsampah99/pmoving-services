"use client";

import { HeroIconType } from "@/components/HeroIcon";
import { FlatIcon } from "@/components/icons/flaticon";
import { LucideIcon } from "lucide-react";
import { motion } from "motion/react";
import type { ServiceCardData } from "@/components/ServiceCard";
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
	PackageIcon,
	LampDeskIcon,
} from "lucide-react";
import { SafeIcon } from "@/components/icons/safe-icon";
import { cn } from "@/utils";
import { LogisticsIcon } from "@/components/icons/logistics-icon";

export type AllServicesType = ServiceCardData & {
	image?: string;
};

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const cardVariants = {
	hidden: {
		opacity: 0,
		y: 20,
	},
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
};

export const services: AllServicesType[] = [
	{
		id: 1,
		title: "Local Moving",
		description:
			"Professional and reliable local moving services tailored to your needs. We handle your belongings with utmost care.",
		href: "/services/local-moving",
		icon: TruckIcon,
		image: "/api/media/file/Deshun%20Unloading.jpg",
	},
	{
		id: 2,
		title: "Packing Services",
		description:
			"Expert solutions to ensure your items are safely prepared for transport",
		href: "/services/local-moving/pack-and-unpack",
		icon: PackageIcon,
		image: "/api/media/file/new%20truck.jpg",
	},
	{
		id: 3,
		title: "Long Distance Moving",
		description:
			"Seamless long-distance moving services with careful planning and execution.",
		href: "/services/long-distance-moving",
		icon: MapIcon,
		image: "/long-distance-moving.webp",
	},
	{
		id: 4,
		title: "Moving Labor",
		description:
			"Skilled moving professionals ready to handle heavy lifting and careful transportation of your belongings.",
		href: "/services/specialty-moving/labor-only",
		icon: UsersIcon,
		image: "/api/media/file/Unloading%2BABF%2BPods-1920w.webp",
	},
	{
		id: 5,
		title: "Storage Services",
		description:
			"Secure, climate-controlled storage solutions for both short-term and long-term needs.",
		href: "/services/storage-services",
		icon: DatabaseIcon,
		image: "/storage-services.webp",
	},
	{
		id: 6,
		title: "Residential Moving",
		description:
			"Professional moving services tailored to your needs. We handle your belongings with utmost care.",
		href: "/services/local-moving/residential-movers",
		icon: HomeIcon,
		image: "/residential-moving.webp",
	},
	{
		id: 7,
		title: "Corporate Moving",
		description:
			"Expert packing solutions to ensure your items are safely prepared for transport using premium materials for maximum protection.",
		href: "/services/commercial-moving/corporate-relocation",
		icon: BuildingIcon,
		image: "/api/media/file/pirnter-office-desk-joined.webp",
	},
	{
		id: 8,
		title: "Apartment Moving",
		description:
			"Seamless moving with careful planning and execution for the best relocation experience.",
		href: "/services/local-moving/apartment-movers",
		icon: Building2Icon,
		image: "/apartment-moving.webp",
	},
	{
		id: 9,
		title: "Packing Supplies",
		description:
			"Skilled moving professionals ready to handle heavy lifting and careful transportation of your belongings.",
		href: "/services/packing-supplies",
		icon: ShoppingBagIcon,
		image: "/api/media/file/packing-supplies.webp",
	},
	{
		id: 10,
		title: "Safes & Gun safes",
		description:
			"Secure, climate-controlled storage solutions for both short-term and long-term needs.",
		href: "/services/specialty-moving/gun-and-safe-moving",
		icon: SafeIcon,
		image: "/api/media/file/gun-safe.webp",
	},
	{
		id: 11,
		title: "Pianos",
		description:
			"Professional piano moving services, ensuring safe and secure transport.",
		href: "/services/piano-moving",
		icon: PianoIcon,
		image: "/piano-moving.webp",
	},
	{
		id: 12,
		title: "Junk Removal",
		description:
			"Efficient and responsible junk removal services to declutter your space.",
		href: "/services/junk-removal",
		icon: TrashIcon,
		image: "/api/media/file/disassemble-treadmill.webp",
	},
	{
		id: 13,
		title: "International Move",
		description:
			"Comprehensive international moving services for a smooth relocation experience.",
		href: "/services/international-moving",
		icon: GlobeIcon,
		image: "/long-distance-moving.webp",
	},
	{
		id: 14,
		title: "Logistics Services",
		description:
			"Reliable logistics solutions for businesses and individuals, tailored to your specific needs.",
		href: "/services/logistics-services",
		icon: LogisticsIcon,
		image: "/api/media/file/logistics-services.webp",
	},
	{
		id: 15,
		title: "Specialty Moving",
		description:
			"Expert handling of valuable, fragile, and unique items requiring specialized care and equipment.",
		href: "/services/specialty-moving",
		icon: LampDeskIcon,
		image: "/api/media/file/specialty-moving-statues.webp",
	},
];

export const AllServices = () => {
	return (
		<section className="py-20">
			<div className="container mx-auto px-4">
				<motion.div
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					{services.map((service) => {
						const IconComponent = service.icon;
						return (
							<motion.div
								key={service.id}
								variants={cardVariants}
								whileHover={{
									y: -10,
									transition: { duration: 0.2 },
								}}
								whileTap={{ scale: 0.95 }}
							>
								<Link href={service.href}>
									<div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 cursor-pointer h-full">
										{/* Service Image */}
										<div className="relative h-48 overflow-hidden">
											<motion.img
												src={service.image}
												alt={service.title}
												className="w-full h-full object-cover"
												whileHover={{ scale: 1.05 }}
												transition={{ duration: 0.3 }}
											/>
											<div
												className={`absolute top-4 left-4 bg-moving-gray p-1.5 rounded-full`}
											>
												<IconComponent className="size-4 text-white group-hover:animate-fill-backwards" />
											</div>
										</div>

										{/* Service Content */}
										<div className="p-6">
											<h3 className="text-xl font-bold text-gray-900 mb-3">
												{service.title}
											</h3>
											<p className="text-gray-500 text-sm leading-relaxed mb-4">
												{service.description}
											</p>
											<motion.div
												className="flex items-center text-moving-yellow font-semibold"
												whileHover={{ x: 5 }}
												transition={{ duration: 0.2 }}
											>
												Learn More &rarr;
											</motion.div>
										</div>
									</div>
								</Link>
							</motion.div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
};

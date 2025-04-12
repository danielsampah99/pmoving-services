"use client";

import {
	Popover,
	PopoverBackdrop,
	PopoverButton,
	PopoverPanel,
	Menu,
	MenuButton,
	MenuItem,
	MenuItems,
} from "@headlessui/react";
import {
	BuildingOfficeIcon,
	HomeModernIcon,
	TruckIcon,
	CubeTransparentIcon,
} from "@heroicons/react/24/outline";
import {
	ChevronDownIcon,
	PlayCircleIcon,
	MapIcon,
} from "@heroicons/react/20/solid";
import type { FC } from "react";
import type { HeroIconType } from "./HeroIcon";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";

export type Service = {
	id: number;
	name: string;
	description: string;
	href: string;
	icon: HeroIconType | LucideIcon;
	subServices: ChildMenu[];
};

export type CallToAction = {
	name: string;
	href: string;
	icon: HeroIconType | LucideIcon;
};

export type ChildMenu = {
	name: string;
	href: string;
};

export const services: Service[] = [
	{
		id: 0,
		name: "Local Moving",
		description: "Reliable moving within the same city",
		href: "/local-moving#",
		icon: HomeModernIcon,
		subServices: [
			{ name: "Residential Movers", href: "local-moving/residential-movers#" },
			{ name: "Household Goods", href: "local-moving/household-goods#" },
			{ name: "Pack & Unpack", href: "#" },
			{ name: "Apartment Movers", href: "#" },
			{ name: "Condo Movers", href: "#" },
			{ name: "HOA Movers", href: "#" },
		],
	},
	{
		id: 1,
		name: "Commercial Moving",
		description: "Office and business relocation services",
		href: "/commercial-moving#",
		icon: BuildingOfficeIcon,
		subServices: [
			{ name: "Office Movers", href: "#" },
			{ name: "Corporate Relocation", href: "#" },
			{ name: "Retail Relocation", href: "#" },
			{ name: "Warehouse Industrial", href: "#" },
			{ name: "Small Business Movers", href: "#" },
		],
	},
	{
		id: 2,
		name: "Long Distance Moving",
		description: "Safe and secure cross-country moving",
		href: "/long-distance-moving#",
		icon: TruckIcon,
		subServices: [
			{ name: "Long Distance Residential", href: "#" },
			{ name: "Long Distance Commercial", href: "#" },
			{ name: "Interstate Moving Specialists", href: "#" },
			{ name: "Employee Relocation", href: "#" },
		],
	},
	{
		id: 3,
		name: "Specialty Moving",
		description: "High-value items that require extra care",
		href: "/specialty-moving#",
		icon: CubeTransparentIcon,
		subServices: [
			{ name: "Antique Furniture", href: "#" },
			{ name: "Furtniture Moving", href: "#" },
			{ name: "Gun Safe Moving", href: "#" },
			{ name: "Moving Labor", href: "#" },
			{ name: "Loading & Unloading", href: "#" },
		],
	},
];

export const callsToAction: CallToAction[] = [
	{ name: "Gallery", href: "/gallery", icon: PlayCircleIcon },
	{ name: "Find us", href: "#", icon: MapIcon },
];

export const Services: FC = () => {
	return (
		<Popover className="relative">
			<PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-white">
				Moving Services
				<ChevronDownIcon
					aria-hidden="true"
					className="size-5 flex-none text-white"
				/>
			</PopoverButton>

			<PopoverBackdrop className="fixed inset-0 bg-black/15" />
			<PopoverPanel
				transition
				className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
			>
				<div className="p-4 z-10 w-full">
					{services.map((service) => (
						<ServiceWithSubMenu key={service.id} service={service} />
					))}
				</div>
				<div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
					{callsToAction.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className="group flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
						>
							<item.icon
								aria-hidden="true"
								className="group-hover:fill-gray-700 size-5 flex-none text-gray-400"
							/>
							{item.name}
						</Link>
					))}
				</div>
			</PopoverPanel>
		</Popover>
	);
};

const ServiceWithSubMenu: FC<{ service: Service }> = ({ service }) => {
	return (
		<Menu as="div" className="relative w-full inline-block text-left">
			<MenuButton className="group w-full text-left relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 data-hover:bg-gray-100 data-active:bg-gray-100">
				<Link
					href={service.href}
					className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white"
				>
					<service.icon
						aria-hidden="true"
						className="size-6 stroke-gray-600 group-hover:stroke-yellow-500 group-data-active:stroke-yellow-600 "
					/>
				</Link>
				<div className="flex-grow">
					<span className="block font-semibold text-gray-900">
						{service.name}
						<span className="absolute inset-0" />
					</span>
					<p className="mt-1 text-gray-600">{service.description}</p>
				</div>
			</MenuButton>

			<MenuItems
				transition={true}
				anchor="right start"
				className="absolute right-0 z-[100] mt-2 w-fit origin-top-right rounded-xl p-1 bg-white shadow-lg ring-1 ring-gray-300 ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
			>
				<div className="py-1">
					{service.subServices.map(({ name, href }) => (
						<MenuItem key={name}>
							<Link
								href={href}
								className="block rounded-xl capitalize px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
							>
								{name}
							</Link>
						</MenuItem>
					))}
				</div>
			</MenuItems>
		</Menu>
	);
};

"use client";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import type { FC } from "react";
import Link from "next/link";
import { callsToAction, type Service, services } from "@/data/services";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuPortal,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from "./Dropdown";

export const Services: FC = () => {
	return (
		<div className="relative isolate flex items-start gap-x-0.5">
			<Link
				href={"/services"}
				className="text-white font-semibold underline-bounce"
			>
				Moving Services
			</Link>
			<DropdownMenu>
				<DropdownMenuTrigger className="flex items-center gap-x-1 text-sm/6 font-semibold text-white hover:bg-moving-gray/10 focus-visible:bg-moving-gray/10 focus-visible:outline-none">
					<ChevronDownIcon
						aria-hidden="true"
						className="size-5 flex-none text-white"
					/>
				</DropdownMenuTrigger>

				{/* <div className="fixed inset-0 bg-black/15" /> */}
				<DropdownMenuContent className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white ring-1 shadow-lg ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in">
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
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
};

const ServiceWithSubMenu: FC<{ service: Service }> = ({ service }) => {
	return (
		<DropdownMenuSub>
			<DropdownMenuSubTrigger className="group w-full text-left relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-100 active:bg-gray-100 focus-visible:outline-none">
				<div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
					<service.icon
						aria-hidden="true"
						className="size-6 stroke-gray-600 group-hover:stroke-yellow-500 group-active:stroke-yellow-600 "
					/>
				</div>

				<div className="flex-grow">
					<span className="block font-semibold text-gray-900">
						{service.name}
						<span className="absolute inset-0" />
					</span>
					<p className="mt-1 text-gray-600">{service.description}</p>
				</div>
			</DropdownMenuSubTrigger>

			<DropdownMenuPortal>
				<DropdownMenuSubContent className="ml-4 bg-white rounded-xl border border-gray-200 border-solid shadow-lg">
					{service.subServices.map(({ name, href }) => (
						<DropdownMenuItem
							key={name}
							className="hover:text-gray-900 hover:font-semibold hover:bg-gray-50"
						>
							<a
								href={href}
								className="block rounded-xl capitalize px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
							>
								{name}
							</a>
						</DropdownMenuItem>
					))}
				</DropdownMenuSubContent>
			</DropdownMenuPortal>
		</DropdownMenuSub>
	);
};

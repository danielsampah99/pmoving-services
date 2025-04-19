"use client";

import type { ServiceAreaType } from "@/types";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import type { FC } from "react";

export type MoverLink = {
	href: string;
	linkText: string;
	city: string;
	state: string;
	subLinks?: MoverLink[];
};

export const ServiceArea: FC<{ links: ServiceAreaType[] }> = ({ links }) => {
	return (
		<div className="z-[99]">
			<Menu>
				<div className="inline-flex items-center gap-2 bg-transparent text-sm/6 font-semibold text-gray-100 hover:text-white focus:text-white">
					<Link
						href="/service-areas"
						className=""
						style={{ scrollBehavior: "smooth" }}
					>
						Moving Service Areas
					</Link>
					<MenuButton className="group focus:outline-none data-[hover]:text-white-700 data-[open]:text-white data-[focus]:outline-1 data-[focus]:outline-white">
						<ChevronDownIcon className="size-5 group-data-[hover]:fill-white" />
					</MenuButton>
				</div>

				<MenuItems
					transition
					anchor="bottom"
					className="w-56 h-auto max-h-80 z-[99] overflow-y-scroll origin-top-right text-gray-700 rounded-xl border-none ring-1 shadow-sm ring-gray-200 bg-white p-1 text-sm/6 transition duration-100 ease-out [--anchor-gap:8px] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
				>
					{links.map((link) => (
						<MenuItem key={link.id}>
							<Link
								href={`/service-areas/${link["short-code"]}`}
								className="group capitalize flex w-full text-gray-700 hover:bg-gray-100 hover:text-gray-900 items-center gap-2 rounded-xl truncate py-1.5 px-3"
							>
								{link.title?.toLowerCase() ?? ""}
								<span className="ml-auto hidden font-sans text-sm text-gray-500 group-data-[hover]:inline group-data-[focus]:inline">
									{link["state-initials"]?.toUpperCase()}
								</span>
							</Link>
						</MenuItem>
					))}
				</MenuItems>
			</Menu>
		</div>
	);
};

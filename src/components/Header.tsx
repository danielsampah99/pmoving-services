"use client";

import { FC, useState } from "react";
import {
	Dialog,
	DialogPanel,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	PopoverGroup,
	Button,
} from "@headlessui/react";
import {
	ArrowPathIcon,
	Bars3Icon,
	ChartPieIcon,
	CursorArrowRaysIcon,
	FingerPrintIcon,
	SquaresPlusIcon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import {
	ChevronDownIcon,
	PhoneIcon,
	PlayCircleIcon,
} from "@heroicons/react/20/solid";
import {
	Facebook,
	Twitter,
	Instagram,
	Mail,
	MessageCircle,
} from "lucide-react";
import { Services } from "./Services";
import Link from "next/link";
import { moverLinks, ServiceArea } from "./ServiceAreas";
import { SunIcon } from "@heroicons/react/24/solid";

const products = [
	{
		name: "Analytics",
		description: "Get a better understanding of your traffic",
		href: "#",
		icon: ChartPieIcon,
	},
	{
		name: "Engagement",
		description: "Speak directly to your customers",
		href: "#",
		icon: CursorArrowRaysIcon,
	},
	{
		name: "Security",
		description: "Your customers’ data will be safe and secure",
		href: "#",
		icon: FingerPrintIcon,
	},
	{
		name: "Integrations",
		description: "Connect with third-party tools",
		href: "#",
		icon: SquaresPlusIcon,
	},
	{
		name: "Automations",
		description: "Build strategic funnels that will convert",
		href: "#",
		icon: ArrowPathIcon,
	},
];
const callsToAction = [
	{ name: "Watch demo", href: "#", icon: PlayCircleIcon },
	{ name: "Contact sales", href: "#", icon: PhoneIcon },
];

export const Header: FC = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<section className="bg-header mt-12 w-full z-50">
			<nav
				aria-label="Global"
				className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
			>
				<div className="flex lg:flex-1">
					<Link href="/" className="p-1.5">
						<span className="sr-only">Premium Moving Services</span>
						<img alt="" src="/logo.svg" className="h-8 w-auto" />
					</Link>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
					>
						<span className="sr-only">Open main menu</span>
						{mobileMenuOpen ? (
							<XMarkIcon aria-hidden="true" className="size-6" />
						) : (
							<Bars3Icon aria-hidden="true" className="size-6" />
						)}
					</button>
				</div>
				<PopoverGroup className="hidden z-[100] lg:flex lg:gap-x-12">
					<Services />

					<ServiceArea links={moverLinks} />

					<Link href="/blog#" className="text-sm/6 font-semibold text-white">
						Blog
					</Link>
					<Link href="/careers#" className="text-sm/6 font-semibold text-white">
						Careers
					</Link>
				</PopoverGroup>

				{/* Replace block with a lightmode, darkmode toggle */}
				<div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
					<Button type="button">
						{" "}
						<SunIcon className="size-5 fill-white" />{" "}
					</Button>
				</div>
			</nav>
			<Dialog
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
				className="lg:hidden"
			>
				<div className="fixed inset-0 z-10" />
				<DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-transform duration-300 ease-in-out transform translate-x-0">
					<div className="flex items-center justify-between">
						<a href="#" className="-m-1.5 p-1.5">
							<span className="sr-only">Your Company</span>
							<img
								alt=""
								src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
								className="h-8 w-auto"
							/>
						</a>
						<button
							type="button"
							onClick={() => setMobileMenuOpen(false)}
							className="-m-2.5 rounded-md p-2.5 text-gray-700"
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon aria-hidden="true" className="size-6" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								<Disclosure as="div" className="-mx-3">
									<DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
										Product
										<ChevronDownIcon
											aria-hidden="true"
											className="size-5 flex-none group-data-open:rotate-180"
										/>
									</DisclosureButton>
									<DisclosurePanel className="mt-2 space-y-2">
										{[...products, ...callsToAction].map((item) => (
											<DisclosureButton
												key={item.name}
												as="a"
												href={item.href}
												className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
											>
												{item.name}
											</DisclosureButton>
										))}
									</DisclosurePanel>
								</Disclosure>
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
								>
									Features
								</a>
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
								>
									Marketplace
								</a>
								<a
									href="#"
									className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
								>
									Company
								</a>
							</div>
							<div className="flex justify-start gap-4 py-6">
								<Facebook className="size-5 text-gray-900 hover:text-gray-600" />
								<Twitter className="size-5 text-gray-900 hover:text-gray-600" />
								<MessageCircle className="size-5 text-gray-900 hover:text-gray-600" />
								<Mail className="size-5 text-gray-900 hover:text-gray-600" />
								<Instagram className="size-5 text-gray-900 hover:text-gray-600" />
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</section>
	);
};

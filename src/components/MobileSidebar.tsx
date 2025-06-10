"use client";

import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { callsToAction, services } from "@/data/services";
import Link from "next/link";
import { cn } from "@/utils";
import { socialMediaLinks } from "./Banner";
import { PhoneIcon } from "@heroicons/react/24/outline";
import {
	Dialog,
	DialogPanel,
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
	Button,
} from "@headlessui/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { type FC, useState } from "react";
import type { ServiceArea } from "@/payload-types";

export interface MobileSidebarProps {
	areas: ServiceArea[];
}

export const MobileSidebar: FC<MobileSidebarProps> = ({ areas }) => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<>
			<Button
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
			</Button>
			<Dialog
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
				className="lg:hidden"
			>
				<div className="fixed inset-0 z-[999]" />
				<DialogPanel className="fixed inset-y-0 right-0 z-[9999] w-full overflow-y-auto bg-moving-gray px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-transform duration-300 ease-in-out transform translate-x-0">
					<div className="flex items-center justify-between">
						<Link href="/" className="-m-1.5 p-1.5">
							<span className="sr-only">P Moving Services</span>
							<img
								alt="Premium Moving Services Logo"
								src="/logo.svg"
								className="h-8 w-auto"
							/>
						</Link>
						<Button
							type="button"
							onClick={() => setMobileMenuOpen(false)}
							className="-m-2.5 rounded-md p-2.5 hover:bg-moving-gray/50"
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon aria-hidden="true" className="size-6 stroke-white" />
						</Button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								<Disclosure as="div" className="-mx-3">
									<DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-white hover:bg-white hover:text-gray-900">
										Moving Services
										<ChevronDownIcon
											aria-hidden="true"
											className="size-5 flex-none group-data-open:rotate-180"
										/>
									</DisclosureButton>
									<DisclosurePanel className="mt-2 space-y-2">
										{[...services, ...callsToAction].map((item, index) => (
											<DisclosureButton
												key={item.name}
												as="a"
												href={item.href}
												title={`Go to ${item.name} page`}
												className="group inline-flex items-center justify-center gap-x-1.5 rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-200 hover:bg-white/10 focus-visible:outline-none focus-visible:bg-moving-gray/80 focus:bg-moving-gray/10"
											>
												<item.icon
													aria-hidden="true"
													className={cn(
														"size-5 stroke-moving-yellow",
														index > 3 &&
															"stroke-inherit group-hover:animate-fill-both fill-moving-yellow",
														index === 2 && "hover:animate-shake",
													)}
												/>
												{index === 5 ? "Find us on the map" : item.name}
											</DisclosureButton>
										))}
									</DisclosurePanel>
								</Disclosure>
								<a
									href="/services/storage-services"
									className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:text-gray-700 hover:bg-gray-50"
								>
									Storage Services
								</a>
								<a
									href="/blogs"
									className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:text-gray-700 hover:bg-gray-50"
								>
									Blog
								</a>
								<a
									href="/#faqs"
									className="-mx-3 block scroll-smooth rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:text-gray-700 hover:bg-gray-50"
								>
									Frequently Asked Questions
								</a>
								<Link
									href="/careers"
									className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:text-gray-700 hover:bg-gray-50"
								>
									Careers
								</Link>
								<Link
									href="/contact-us"
									className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:text-gray-700 hover:bg-gray-50"
								>
									Contact Us
								</Link>

								<Disclosure as="div" className="-mx-3">
									<DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-white hover:bg-white hover:text-gray-900">
										Serivce Areas
										<ChevronDownIcon
											aria-hidden="true"
											className="size-5 flex-none group-data-[open]:rotate-180"
										/>
									</DisclosureButton>
									<DisclosurePanel className="mt-2 space-y-2">
										{areas.map((area) => (
											<DisclosureButton
												key={area.id}
												as="a"
												href={`/service-areas/${area.slug}`}
												className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-300 hover:text-gray-100 hover:bg-white/10"
											>
												<div className="group capitalize w-full inline-flex items-center justify-between">
													<span>{area.title}</span>
													<span className="hidden rounded-lg text-sm p-1 font-normal shadow-sm ring-gray-white/50 group-focus:inline group-hover:inline text-gray-200">
														{area["state-initials"].toUpperCase()}
													</span>
												</div>
											</DisclosureButton>
										))}
									</DisclosurePanel>
								</Disclosure>
							</div>
							<div className="flex justify-start w-full border-t border-solid border-gray-300 gap-4 py-6">
								{socialMediaLinks.map((link, index) => (
									<Link
										key={link.href}
										href={link.href}
										title={link.name}
										target="_blank"
										className=""
									>
										<span className="sr-only">{link.name}</span>
										<link.icon
											className={cn(
												"size-5 fill-white",
												index === 4 && "stroke-white",
											)}
											aria-hidden="true"
										/>
									</Link>
								))}
								<Link
									href="tel:651-757-5135"
									title="call us"
									target="_blank"
									className=""
								>
									<span className="sr-only">Call</span>
									<PhoneIcon
										className={cn("size-5 rotate-x-45 fill-white stroke-white")}
										aria-hidden="true"
									/>
								</Link>
							</div>
						</div>
					</div>
				</DialogPanel>
			</Dialog>
		</>
	);
};

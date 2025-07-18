import type { FC } from "react";
import { PopoverGroup } from "@headlessui/react";
import { Services } from "./Services";
import Link from "next/link";
import { MobileSidebar } from "./MobileSidebar";
import { getServiceAreas } from "@/data/service-areas";
import { ServiceArea } from "./ServiceAreas";

export const Header: FC = async () => {
	const areas = await getServiceAreas();

	return (
		<section className="bg-moving-gray sm:mt-12 md:mt-18 w-full z-50">
			<nav
				aria-label="Global"
				className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
			>
				<div className="flex lg:flex-1 md:mr-4">
					<Link href="/" className="p-1.5">
						<span className="sr-only">Premium Moving Services</span>
						<img
							alt="Premium Moving Company's Logo"
							src="/logo.svg"
							className="h-8 w-auto"
						/>
					</Link>
				</div>
				<div className="flex lg:hidden">
					<MobileSidebar areas={areas.docs} />
				</div>
				<PopoverGroup className="hidden z-[100] lg:flex lg:gap-x-12">
					<Services />
					<ServiceArea links={areas.docs} />
					<Link
						href="/blogs"
						className="text-sm/6 underline-bounce font-semibold text-white"
					>
						Blog
					</Link>
					<Link
						href="/careers"
						className="text-sm/6 underline-bounce font-semibold text-white"
					>
						Careers
					</Link>
					<Link
						href="/#faqs"
						className="text-sm/6 scroll-smooth underline-bounce -scroll-m-10 font-semibold text-white"
					>
						FAQs
					</Link>

					<Link
						href="/services/storage-services"
						className="text-sm/6 scroll-smooth -scroll-m-10 font-semibold underline-bounce text-white"
					>
						Storage
					</Link>
				</PopoverGroup>

				{/* Replace block with a lightmode, darkmode toggle */}
				<div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
					<Link
						href="/contact-us"
						className="text-sm/6 scroll-smooth underline-bounce -scroll-m-10 font-semibold text-white"
					>
						Contact Us
					</Link>
				</div>
			</nav>
		</section>
	);
};

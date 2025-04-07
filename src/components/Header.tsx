import type { FC } from "react";
import { PopoverGroup, Button } from "@headlessui/react";
import { Services } from "./Services";
import Link from "next/link";
import { SunIcon } from "@heroicons/react/24/solid";
import { MobileSidebar } from "./MobileSidebar";
import { getServiceAreas } from "@/data/service-areas";
import { ServiceArea } from "./ServiceAreas";

export const Header: FC = async () => {
	const areas = await getServiceAreas();

	return (
		<section className="bg-moving-gray sm:mt-12 w-full z-50">
			<nav
				aria-label="Global"
				className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
			>
				<div className="flex lg:flex-1">
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
					<Link href="/blog" className="text-sm/6 font-semibold text-white">
						Blog
					</Link>
					<Link href="/careers" className="text-sm/6 font-semibold text-white">
						Careers
					</Link>
					<Link
						href="/#faqs"
						className="text-sm/6 scroll-smooth -scroll-m-10 font-semibold text-white"
					>
						Frequently Asked Questions
					</Link>
				</PopoverGroup>

				{/* Replace block with a lightmode, darkmode toggle */}
				<div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
					<Button type="button">
						<SunIcon className="size-5 fill-white" />{" "}
					</Button>
				</div>
			</nav>
		</section>
	);
};

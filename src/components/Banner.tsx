"use client";

import { cn } from "@/utils";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { PhoneIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { type FC, type JSX, type SVGProps, useEffect, useState } from "react";

export const Banner: FC = () => {
	const [backgroundColor, setbackgroundColor] = useState(
		"oklch(0.967 0.003 264.542",
	);
	const [scrollPosition, setScrollPosition] = useState(0);
	const [isBgTransparent, setIsBgTransparent] = useState(false);
	const triggerStart = 258; // height of the banner is 48px + header = 80

	useEffect(() => {
		const handleTransparentScroll = () => {
			setScrollPosition(window.scrollY);

			if (scrollPosition > triggerStart) {
				setbackgroundColor("transparent");
				setIsBgTransparent(true);
			} else {
				setbackgroundColor("oklch(0.967 0.003 264.542");
				setIsBgTransparent(false);
			}
		};

		window.addEventListener("scroll", handleTransparentScroll);

		return () => window.removeEventListener("scroll", handleTransparentScroll);
	}, [scrollPosition]);

	return (
		<div
			style={{ backgroundColor }}
			className="bg-gray-100 hidden sm:fixed sm:flex items-center justify-center top-0 inset-x-0 z-[1000] backdrop-blur-xs px-4 py-2 transition-opacity duration-300"
		>
			<div className="max-w-7xl w-full flex justify-between gap-3 items-center">
				<div className="">
					<Link
						href="/free-quote"
						className={cn(
							"text-base/7 block capitalize text-shadow-gray-950 font-black hover:underline hover:scale-120 underline-offset-2 transition-all duration-300 delay-100",
							isBgTransparent &&
								"bg-moving-yellow px-2 py-1.5 rounded-lg text-white font-semibold text-base shadow-sm hover:bg-moving-yellow/50 hover:no-underline hover:text-white",
						)}
					>
						Request a quote
					</Link>
					<Link
						href="tel: 651-757-5135"
						className={cn(
							"mt-0.5 hover:underline italic hover:underline-offset-1 text-gray-700 block text-sm/6",
							isBgTransparent &&
								"hover:text-sm font-semibold hover:text-gray-900",
						)}
					>
						651-757-5135
					</Link>
				</div>
				<div className="flex gap-2 max-md:flex-wrap">
					<SocialMediaContactsMenu socialMediaLinks={socialMediaLinks} />
				</div>
			</div>
		</div>
	);
};

export type SocialMediaLink = {
	name: string;
	href: string;
	icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
};

export const socialMediaLinks: SocialMediaLink[] = [
	{
		name: "Facebook",
		href: "https://facebook.com/moveatease",
		icon: (props) => (
			<svg
				fill="currentColor"
				className="hover:fill-blue-500 stroke-white"
				viewBox="0 0 24 24"
				{...props}
			>
				<title />
				<path
					fillRule="evenodd"
					d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
					clipRule="evenodd"
				/>
			</svg>
		),
	},
	{
		name: "Instagram",
		href: "https://www.instagram.com/premiummoving16/?next=%2F",
		icon: (props) => (
			<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
				<title />
				<path
					fillRule="evenodd"
					d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
					clipRule="evenodd"
				/>
			</svg>
		),
	},
	{
		name: "X",
		href: "https://twitter.com/g1sackie",
		icon: (props) => (
			<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
				<title />
				<path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
			</svg>
		),
	},
	{
		name: "YouTube",
		href: "https://www.youtube.com/@PremiumMovingServices",
		icon: (props) => (
			<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
				<title />
				<path
					fillRule="evenodd"
					d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
					clipRule="evenodd"
				/>
			</svg>
		),
	},
	{
		name: "Whatsapp",
		href: "https://web.whatsapp.com/send?phone=6517575135",
		icon: (props) => (
			<svg
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth="1.5"
				stroke="currentColor"
				{...props}
			>
				<title />
				<path d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
			</svg>
		),
	},
	{
		name: "Email",
		href: "mailto:info@pmovingservices.com",
		icon: (props) => (
			<svg
				fill="none"
				stroke="currentColor"
				className="stroke-[1.5]"
				viewBox="0 0 24 24"
				{...props}
			>
				<title />
				<path d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
			</svg>
		),
	},
];

const SocialMediaContactsMenu: FC<{ socialMediaLinks: SocialMediaLink[] }> = ({
	socialMediaLinks,
}) => {
	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<MenuButton className="group inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-600">
					<PhoneIcon
						aria-hidden="true"
						className="rotate-270 size-6 stroke-2 fill-moving-yellow group-hover:fill-moving-yellow/50"
					/>
				</MenuButton>
			</div>

			<MenuItems
				transition
				anchor="left"
				className="absolute right-0 [--anchor-gap:4px] md:[--anchor-gap:8px] z-[100] mx-1 w-fit max-w-56 origin-top-right ring-1 ring-transparent transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
			>
				<div className="rounded-md flex flex-row items-center gap-x-1 flex-nowrap">
					{socialMediaLinks.map((link) => (
						<MenuItem key={link.name}>
							<Link
								href={link.href}
								title={link.name}
								target="_blank"
								className="rounded-full group flex items-center text-gray-600 hover:text-gray-800 p-1.5 text-sm"
							>
								<span className="sr-only">{link.name}</span>
								<link.icon className="size-5" aria-hidden="true" />
							</Link>
						</MenuItem>
					))}
				</div>
			</MenuItems>
		</Menu>
	);
};

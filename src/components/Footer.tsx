"use client";

import type { FC, SVGProps } from "react";
import { services } from "./Services";
import Link from "next/link";
import { Button } from "@headlessui/react";

const navigation = {
	solutions: [
		{ name: "Marketing", href: "#" },
		{ name: "Analytics", href: "#" },
		{ name: "Commerce", href: "#" },
		{ name: "Insights", href: "#" },
	],
	locations: [
		{ name: "Minnesota", href: "#" },
		{ name: "Wisconsin", href: "#" },
		// { name: 'Guides', href: '#' },
		// { name: 'API Status', href: '#' },
	],
	company: [
		{ name: "About", href: "/#about-us" },
		{ name: "Contact Us", href: "/contact-us" },
		{ name: "Affiliates", href: "/affiliates" },
		{ name: "Blog", href: "/blog" },
		{ name: "FAQs", href: "/#faqs" },
		{ name: "HTML Sitemap", href: "#" },
		{ name: "Referral Program", href: "#" },
		{ name: "Resources", href: "#" },
		{ name: "Privacy Policy", href: "/privacy-policy" },
		{ name: "Terms & Conditions", href: "/terms-and-conditions" },
	],
	certifications: [
		{ name: "DOT: #3047943", href: "#" },
		{ name: "HHG:#383025", href: "#" },
		{ name: "BBB Certifications", href: "#" },
	],
	social: [
		{
			name: "Facebook",
			href: "https://facebook.com/moveatease",
			icon: (props: SVGProps<SVGSVGElement>) => (
				<svg
					fill="currentColor"
					className="hover:fill-red-500 stroke-white"
					viewBox="0 0 24 24"
					{...props}
				>
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
			icon: (props: SVGProps<SVGSVGElement>) => (
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
			icon: (props: SVGProps<SVGSVGElement>) => (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
				</svg>
			),
		},
		{
			name: "YouTube",
			href: "https://www.youtube.com/@PremiumMovingServices",
			icon: (props: SVGProps<SVGSVGElement>) => (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
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
			icon: (props: SVGProps<SVGSVGElement>) => (
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
			icon: (props: SVGProps<SVGSVGElement>) => (
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
		{
			name: "Phone",
			href: "tel: 651-757-5135",
			icon: (props: SVGProps<SVGSVGElement>) => (
				<svg
					fill="none"
					stroke="currentColor"
					className="stroke-[1.5]"
					viewBox="0 0 24 24"
					{...props}
				>
					<title />
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
					/>
				</svg>
			),
		},
	],
};

export const Footer: FC = () => {
	return (
		<footer aria-labelledby="footer-heading" className="bg-moving-gray">
			<h2 id="footer-heading" className="sr-only">
				Footer
			</h2>
			<div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
				<div className="xl:grid xl:grid-cols-3 xl:gap-8">
					<img
						alt="Premium Moving Services, Logo"
						src="/logo.svg"
						className="h-7"
					/>
					<div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 className="text-sm font-semibold leading-6 text-white">
									Services
								</h3>
								<ul role="list" className="mt-6 space-y-4">
									{services.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className="text-sm leading-6 text-gray-300 hover:text-white"
											>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
							<div className="mt-10 md:mt-0">
								<h3 className="text-sm font-semibold leading-6 text-white">
									Our Offices
								</h3>
								<ul role="list" className="mt-6 space-y-4">
									{navigation.locations.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className="text-sm leading-6 text-gray-300 hover:text-white"
											>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className="md:grid md:grid-cols-2 md:gap-8">
							<div>
								<h3 className="text-sm font-semibold leading-6 text-white">
									Company
								</h3>
								<ul role="list" className="mt-6 space-y-4">
									{navigation.company.map((item) => (
										<li key={item.name}>
											<a
												href={item.href}
												className="text-sm leading-6 text-gray-200 hover:text-white"
											>
												{item.name}
											</a>
										</li>
									))}
								</ul>
							</div>
							<div className="mt-10 md:mt-0">
								<h3 className="text-sm font-semibold leading-6 text-white">
									Certifications
								</h3>
								<ul role="list" className="mt-6 space-y-4">
									{navigation.certifications.map((item) => (
										<li key={item.name}>
											<p className="text-sm leading-6 text-white">
												{item.name}
											</p>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between">
					<div>
						<h3 className="text-sm font-semibold leading-6 text-white">
							Subscribe to our newsletter
						</h3>
						<p className="mt-2 text-sm leading-6 text-gray-300">
							The latest news, articles, and resources, sent to your inbox
							weekly.
						</p>
					</div>
					<form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
						<label htmlFor="email-address" className="sr-only">
							Email address
						</label>
						<input
							id="email-address"
							name="email-address"
							type="email"
							required
							placeholder="Enter your email"
							autoComplete="email"
							className="w-full min-w-0 appearance-none rounded-md border-0 placeholder:text-moving-yellow/60 bg-white/10 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring selection:text-moving-gray selection:bg-moving-yellow focus:ring-inset focus:ring-moving-yellow sm:w-56 sm:text-sm sm:leading-6"
						/>
						<div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
							<Button
								type="submit"
								className="flex w-full items-center justify-center rounded-md bg-moving-yellow px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-moving-yellow/70 focus-visible:outline focus-visible:outline-none focus-visible:outline-moving-yellow"
							>
								Subscribe
							</Button>
						</div>
					</form>
				</div>
				<div
					id="socials"
					className="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-between"
				>
					<div className="flex space-x-6 md:order-2">
						{navigation.social.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="text-white/50 hover:text-white"
							>
								<span className="sr-only">{item.name}</span>
								<item.icon aria-hidden="true" className="size-6" />
							</a>
						))}
					</div>
					<p className="mt-8 text-xs leading-5 text-gray-200 md:order-1 md:mt-0">
						&copy; {new Date().getFullYear().toString()}{" "}
						<Link
							href="/"
							className="font-medium text-gray-50 hover:text-white"
						>
							Premium Moving Services
						</Link>
						. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

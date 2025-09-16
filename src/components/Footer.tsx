"use client";

import { services } from "@/data/services";
import Link from "next/link";
import { Button, Field, Input, Label } from "@headlessui/react";
import type { FC } from "react";
import { type FooterSocial, navigation } from "@/data/navigation";
import { subscribe } from "@/data/mailing-list";
import { MoreInfo } from "./OurLocations";

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
								<ul className="mt-6 space-y-4">
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
								<ul className="mt-6 space-y-4">
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
								<ul className="mt-6 space-y-4">
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
								<ul className="mt-6 space-y-4">
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
				<div className='pt-8 text-white sm:pt-10'>
					<MoreInfo />
				</div>
				<div className="mt-8 border-t border-white/10 pt-8 sm:mt-10 lg:mt-12 lg:flex lg:items-center lg:justify-between">
					<div>
						<h3 className="text-sm font-semibold leading-6 text-white">
							Subscribe to our newsletter
						</h3>
						<p className="mt-2 text-sm leading-6 text-gray-300">
							The latest news, articles, and resources, sent to your inbox
							weekly.
						</p>
					</div>
					<form className="mt-6 sm:flex sm:max-w-md lg:mt-0" action={subscribe}>
						<Field>
							<Label htmlFor="email-address" className="sr-only">
								Email address
							</Label>
							<Input
								id="email-address"
								name="email"
								type="email"
								required
								placeholder="Enter your email"
								autoComplete="email"
								className="w-full min-w-0 appearance-none rounded-md border-0 placeholder:text-moving-yellow/60 bg-white/10 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring selection:text-moving-gray selection:bg-moving-yellow focus:ring-inset focus:ring-moving-yellow sm:w-56 sm:text-sm sm:leading-6"
							/>
						</Field>

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
					<FooterSocials socials={navigation.socials} />
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

export const FooterSocials: FC<{ socials: FooterSocial[] }> = ({ socials }) => {
	return (
		<div className="flex space-x-6 md:order-2">
			{socials.map((item) => (
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
	);
};

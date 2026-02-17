"use client";

import { motion } from "motion/react";
import { staggerContainer, fadeInUp, cn } from "@/utils";

import { XMarkIcon, CheckIcon } from "@heroicons/react/16/solid";

type Tip = {
	name: string;
	id: "tip-mistake" | "tip-strategy";
	href: string;
	isUs: boolean;
	features: string[];
	description: string;
	heading: string;
};

const tips = [
	{
		name: "Others",
		id: "tip-mistake",
		href: "#",
		heading: "Known Mistakes",
		description: "This is where damage usually happens, not in the house.",
		features: [
			"Improper stacking leads to crushed boxes",
			"Shifting in transit due to poor weight distribution",
			"scratched furniture against metal walls",
		],
		isUs: false,
	},
	{
		name: "Premium Moving Services",
		id: "tip-strategy",
		href: "/free-quote",
		heading: "Our Strategy",
		description: "Dedicated support and infrastructure for your company.",
		features: [
			"Weight balanced from front to back",
			"Furniture padded and tied down",
			"Fragile items secured away from heavy pieces",
			"Space maximized to prevent shifting",
			"Doorways, floors, and walls protected during carries",
		],
		isUs: true,
	},
] satisfies Array<Tip>;

export const LaborUnloading = () => {
	return (
		<section className="relative isolate bg-moving-gray px-6 py-24 sm:py-32 lg:px-8">
			<div
				aria-hidden="true"
				className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
			>
				<div
					style={{
						clipPath:
							"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
					}}
					className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-moving-gray to-white"
				/>
			</div>

			<motion.div
				initial="initial"
				whileInView="animate"
				viewport={{ once: true }}
				variants={staggerContainer}
				className="mx-auto max-w-4xl text-center"
			>
				<motion.h5
					variants={fadeInUp}
					className="text-base/7 font-semibold text-gray-200"
				>
					The biggest mistakes in a DIY move happen inside the truck.
				</motion.h5>
				<motion.h2
					variants={fadeInUp}
					className="mt-2 text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl"
				>
					Loading and Unloading
				</motion.h2>
				<motion.p
					variants={fadeInUp}
					className="mx-auto mt-6 max-w-3xl text-center text-base font-medium text-pretty text-gray-300 sm:text-lg/8"
				>
					Professional movers can expertly load and unload your truck,
					maximizing space and preventing damage. Unloading is just as
					important. We place items exactly where you want them,
					saving you hours of rearranging later. Most moving labor
					services charge by the hour, and rates can vary based on
					location and job complexity.
				</motion.p>
			</motion.div>

			<motion.div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
				{tips.map((tip, tipIdx) => (
					<motion.div
						key={tip.id}
						className={cn(
							tip.isUs
								? "relative bg-moving-yellow ring-moving-dark"
								: "bg-moving-gray sm:mx-8 lg:mx-0 !ring-moving-yellow",
							tipIdx === 0
								? "lg:rounded-tr-none lg:rounded-bl-3xl"
								: "lg:rounded-tr-3xl lg:rounded-bl-none",
							"rounded-3xl p-8 ring-1 sm:p-10",
						)}
					>
						<motion.h3
							id={tip.id}
							className={cn(
								tip.isUs
									? "text-moving-dark"
									: "text-moving-yellow",
								"text-base/7 font-semibold",
							)}
						>
							{tip.name}
						</motion.h3>

						<motion.p className="mt-4 flex items-baseline gap-x-2">
							<span
								className={cn(
									tip.isUs ? "text-gray-900" : "text-white",
									"text-5xl font-semibold tracking-tight",
								)}
							>
								{tip.heading}
							</span>
						</motion.p>
						<motion.p
							className={cn(
								tip.isUs ? "text-gray-700" : "text-gray-200",
								"mt-6 text-base/7",
							)}
						>
							{tip.description}
						</motion.p>

						<motion.ul
							role="list"
							className={cn(
								tip.isUs ? "text-gray-300" : "text-gray-300",
								"mt-8 space-y-3 text-sm/6 sm:mt-10",
							)}
						>
							{tip.features.map((feature) => (
								<li
									key={feature}
									className="flex gap-x-3 items-center"
								>
									{tip.id === "tip-mistake" ? (
										<XMarkIcon
											aria-hidden="true"
											className="size-4 flex-none text-red-500"
										/>
									) : (
										<CheckIcon
											aria-hidden="true"
											className="size-4 flex-none text-moving-gray"
										/>
									)}

									<span
										className={cn(
											tip.isUs
												? "text-gray-700"
												: "text-gray-300",
										)}
									>
										{feature}
									</span>
								</li>
							))}
						</motion.ul>

						<motion.a
							href={tip.href}
							aria-describedby={tip.id}
							className={cn(
								tip.isUs
									? "bg-white/20 backdrop-blur-md text-white hover:opacity-80 focus-visible:outline-opacity-80"
									: "bg-white/10 text-white inset-ring inset-ring-white/5 hover:bg-white/20 focus-visible:outline-white/75",
								"mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10",
							)}
						>
							Get free quote
						</motion.a>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
};

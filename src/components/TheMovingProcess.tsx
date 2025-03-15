"use client";

import {
	ClipboardDocumentListIcon,
	PhoneIcon,
	TruckIcon,
} from "@heroicons/react/24/outline";
import type { HeroIconType } from "./HeroIcon";
import {
	CheckCircle2Icon,
	PackageCheckIcon,
	type LucideIcon,
} from "lucide-react";
import { useEffect, useRef, type FC } from "react";
import Link from "next/link";
import { HomeIcon } from "@heroicons/react/24/outline";
import { useAnimation, useInView, motion } from "motion/react";
import { cn } from "@/utils";

type Process = {
	stage: number;
	title: string;
	description: string;
	href: string;
	icon: HeroIconType | LucideIcon;
	color: string;
};

const processes: Process[] = [
	{
		stage: 1,
		title: "Initial Consultation",
		description:
			"We begin with a detailed consultation to understand your specific moving needs, timeline, and budget requirements.",
		icon: PhoneIcon,
		href: "#",
		color: "from-moving-gray to-gray-200",
	},
	{
		stage: 2,
		title: "Planning & Preparation",
		description:
			"Our team creates a customized moving plan, including inventory assessment, logistics coordination, and scheduling.",
		icon: ClipboardDocumentListIcon,
		color: "from-moving-gray to-gray-300",
		href: "#",
	},
	{
		stage: 3,
		title: "Professional Packing",
		description:
			"Using premium materials and techniques, we carefully pack your belongings to ensure maximum protection during transit.",
		icon: PackageCheckIcon,
		color: "from-moving-gray to-gray-400",
		href: "#",
	},
	{
		stage: 4,
		title: "Moving Day Execution",
		description:
			"Our experienced movers handle the loading, transportation, and unloading with precision and care for a seamless experience.",
		icon: TruckIcon,
		color: "from-moving-gray to-gray-500",
		href: "#",
	},
	{
		stage: 5,
		title: "Unpacking & Setup",
		description:
			"We help you settle into your new space by unpacking and arranging your belongings according to your preferences.",
		icon: HomeIcon,
		color: "from-moving-gray to-gray-600",
		href: "#",
	},
];

// 	[
// 	{
// 		name: "Free Quote",
// 		description:
// 			"Get a FREE quote from our top-rated moving company in Twin Cities. A moving specialist will help you plan your move, take your inventory, and then send you a free, no-obligation quote.",
// 		href: "#",
// 		icon: PhoneIcon,
// 	},
// 	{
// 		name: "Before you move",
// 		description:
// 			"Moving is all about planning. We can help you plan your move and we have some valuable tips and advice on how to organize your move so it goes smoothly.",
// 		href: "#",
// 		icon: InboxIcon,
// 	},
// 	{
// 		name: "Moving Day",
// 		description:
// 			"Our movers will arrive ready and on time and ready to load our moving trucks. ",
// 		href: "#",
// 		icon: TruckIcon,
// 	},
// 	{
// 		name: "After Moving",
// 		description:
// 			"After your move, we calculate how much you owe. Then we will bill you for the remaining balance.",
// 		href: "#",
// 		icon: CurrencyDollarIcon,
// 	},
// 	{
// 		name: "Leave a Review",
// 		description:
// 			"We want to hear from you and so do other customers. Feel free to leave us review, we strive to do the best job we can do and appreciate hearing from you.",
// 		href: "#",
// 		icon: StarIcon,
// 	},
// ];

export const TheMovingProcess: FC = () => {
	const movingRef = useRef(null);
	const controls = useAnimation();
	const isInView = useInView(movingRef, { once: true, amount: 0.2 });

	useEffect(() => {
		if (isInView) {
			controls.start("visible");
		}
	}, [isInView, controls]);

	return (
		<section className="py-20 bg-gradient-to-b from-white to-gray-50">
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-moving-gray to-gray-300">
						Our Seamless Moving Process
					</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						We've perfected our moving process to ensure a stress-free
						experience from start to finish.
					</p>
				</div>

				<div ref={movingRef} className="relative max-w-5xl mx-auto">
					{/* Connecting line */}
					<div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-moving-gray/20 via-moving-gray to-moving-gray/20 transform -translate-x-1/2 hidden md:block" />

					{processes.map((step, index) => (
						<motion.div
							key={step.stage}
							className={`flex flex-col md:flex-row items-center gap-8 mb-16 last:mb-0 ${index % 2 === 1 ? "md:flex-row-reverse" : ""
								}`}
							initial="hidden"
							animate={controls}
							variants={{
								hidden: { opacity: 0, y: 50 },
								visible: {
									opacity: 1,
									y: 0,
									transition: {
										duration: 0.6,
										delay: index * 0.2,
									},
								},
							}}
						>
							{/* Number circle */}
							<div className="relative z-10">
								<div
									className={cn(
										"size-8 sm:size-16 rounded-full bg-gradient-to-br flex items-center justify-center text-white text-base sm:text-3xl font-bold shadow-lg",
										step.color,
									)}
								>
									{step.stage}
								</div>
							</div>

							{/* Content card */}
							<Link
								href={step.href}
								className="bg-white rounded-2xl shadow-xl p-4 sm:p-8 flex-1 relative overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
							>
								<div className="absolute inset-0 bg-gradient-to-r from-moving-gray/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

								<div className="flex items-start gap-6">
									<div
										className={cn(
											"p-2 sm:p-3 rounded-xl bg-gradient-to-br text-white shadow-md",
											step.color,
										)}
									>
										<step.icon className="size-5" aria-hidden="true" />
									</div>

									<div className="flex-1">
										<h3 className="text-lg sm:text-2xl font-bold mb-3">
											{step.title}
										</h3>
										<p className="text-gray-600 text-sm sm:text-base">
											{step.description}
										</p>
									</div>
								</div>

								{/* Decorative elements */}
								<div className="absolute -bottom-10 -right-10 sm:-bottom-6 sm:-right-6 sm:size-24 size-20 rounded-full bg-moving-yellow/20 z-0" />
								<div className="absolute -top-10 -left-10 size-20 sm:size-32 rounded-full bg-moving-gray/10 z-0" />
							</Link>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

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
	description: string[];
	id: string;
	icon: HeroIconType | LucideIcon;
	color: string;
};

const processes: Process[] = [
	{
		stage: 1,
		title: "Make a Checklist",
		description: [
			"Plan week by week",
			"Go through every room of your house/apartment and determine what you’d like to keep and what you can get rid of. Have a garage sale, donate useful items.",
			"Formulate a plan to personally transport your personal belongings to your new home like jewelry and other valuable pieces if possible.",
		],
		icon: PhoneIcon,
		id: "stage-1",
		color: "from-moving-gray to-gray-200",
	},
	{
		stage: 2,
		title: "Get Packing Supplies",
		description: [
			"Purchase or get free boxes of all sort (small, medium, large, and wardrobe). Specialty boxes are also a good investment to transport (dishes, electronics, office files and wall art) etc.",
			"Get plenty of tape.  Also shrink and bubble wrap and mattress bags if necessary.",
		],
		icon: ClipboardDocumentListIcon,
		color: "from-moving-yellow to-gray-yellow",
		id: "stage-2",
	},
	{
		stage: 3,
		title: "Boxing it all up",
		description: [
			"Pay close attention when packing",
			"Label all boxes",
			"Pack heavy items like books, tools, canned goods and knick-knacks in small boxes.",
			"For medium boxes, pack smaller household items, games, shoes, coffee makers, pots and pans.",
			"Pack bulky, light items into large boxes: lampshades, blankets, pillows, stereo speaker, towels and linens.",
		],
		icon: PackageCheckIcon,
		color: "from-moving-gray to-gray-400",
		id: "stage-3",
	},
	{
		stage: 4,
		title: "Loading",
		description: [
			`Properly loading a moving truck is crucial for ensuring that your belongings are secure during transport,
			with strategies like distributing weight evenly, using protective padding and stacking boxes efficiently to prevent damage`,
		],
		icon: TruckIcon,
		color: "from-moving-yellow to-gray-yellow",
		id: "stage-4",
	},
	{
		stage: 5,
		title: "Unloading",
		description: [
			"Always be present or have someone available to direct the movers into your new place.",
			"Do a walk through with the movers. ",
			"Plan a designated landing spot for big furniture beforehand.",
			"After the truck is completely empty, do a final walk through.",
		],
		icon: TruckIcon,
		color: "from-moving-gray to-gray-400",
		id: "stage-5",
	},
];

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
							className={`flex flex-col md:flex-row items-center gap-8 mb-16 last:mb-0 ${
								index % 2 === 1 ? "md:flex-row-reverse" : ""
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
							<div className="relative">
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
							<div
								id={step.id}
								className="group/icon bg-white rounded-2xl shadow-xl p-4 sm:p-8 flex-1 relative overflow-hidden group transition-shadow duration-300"
							>
								<div className="absolute inset-0 bg-gradient-to-r from-moving-gray/5 to-transparent opacity-0" />

								<div className="flex items-start gap-6">
									<div
										className={cn(
											"p-2 sm:p-3 rounded-xl z-20 bg-gradient-to-br text-white shadow-md",
											step.color,
										)}
									>
										<step.icon className="size-5 group-hover/icon:animate-bounce" aria-hidden="true" />
									</div>

									<div className="flex-1">
										<h3 className="text-lg sm:text-2xl font-bold mb-3">
											{step.title}
										</h3>
										<div className="text-gray-600 text-sm sm:text-base">
											{step.description.map((item) => (
												<span key={item} className="inline-flex flex-col ">
													{item}
												</span>
											))}
										</div>
									</div>
								</div>

								{/* Decorative elements */}
								<div className={cn("absolute -bottom-10 -right-10 sm:-bottom-6 sm:-right-6 sm:size-24 size-20 rounded-full z-0", index % 2 === 1 ? 'bg-moving-gray/10' : 'bg-moving-yellow/20')} />
								<div className={cn("absolute -top-10 -left-10 size-20 sm:size-32 rounded-full -z-0", index % 2 === 1 ? 'bg-yellow-50' : 'bg-moving-gray/10')} />
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

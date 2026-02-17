"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { staggerContainer, fadeInUp } from "@/utils";
import { IconType } from "./HeroIcon";
import {
	HomeModernIcon,
	HomeIcon,
	ArchiveBoxIcon,
	TruckIcon,
	MapIcon,
	BuildingOffice2Icon,
	CubeTransparentIcon,
	FaceSmileIcon,
} from "@heroicons/react/24/outline";

type Service = {
	id: number;
	icon: IconType;
	text: string;
	link?: string;
};

const services: Array<Service> = [
	{
		id: 1,
		icon: HomeModernIcon,
		text: "Rearranging heavy furniture inside homes",
	},
	{
		id: 2,
		icon: HomeIcon,
		text: "Preparing houses for staging or sale"
	},
	{
		id: 3,
		icon: ArchiveBoxIcon,
		text: "Organizing and re-stacking storage units",
	},
	{
		id: 4,
		icon: TruckIcon,
		text: "Loading and unloading assistance for rental trucks and moving containers",
	},
	{
		id: 5,
		icon: CubeTransparentIcon,
		text: "Packing services to ensure items are safely packed for transport",
		link: "https://pmovingservices.com/services/local-moving/pack-and-unpack",
	},
	{
		id: 6,
		icon: MapIcon,
		text: "Long distance move professional moving help",
		link: "https://pmovingservices.com/services/long-distance-moving",
	},
	{
		id: 7,
		icon: BuildingOffice2Icon,
		text: "Assisting with office furniture shifts",
	},
	{
		id: 8,
		icon: FaceSmileIcon,
		text: "Supporting seniors during downsizing transitions",
	},
];

export const LaborServices = () => {
	return (
		<section className="py-20 bg-white">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
					variants={staggerContainer}
					className="max-w-6xl mx-auto"
				>
					<motion.h2
						variants={fadeInUp}
						className="text-4xl md:text-5xl font-bold text-moving-dark text-center mb-6"
					>
						<span className="underline-center">Labor Services</span>
					</motion.h2>

					<motion.p
						variants={fadeInUp}
						className="text-xl text-moving-gray text-center mb-12 max-w-3xl mx-auto"
					>
						This service isn't only for people changing addresses.
						Our hourly labor services is used every day for
						situations like:
					</motion.p>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
						{services.map((service, index) => (
							<motion.div
								key={index}
								variants={fadeInUp}
								className="bg-gradient-to-tr from-moving-lightGray to-white p-6 rounded-lg shadow-md transition-all duration-300 border border-gray-400 hover:border-gray-600 group"
							>
								<div className="text-4xl mb-4 transform group-hover:scale-110 shadow-inner inset-shadow-2xs transition-transform w-fit p-1.5 rounded-lg bg-moving-yellow/70 duration-300">
									<service.icon className="size-6 group-hover:stroke-white" />
								</div>
								{service.link ? (
									<Link
										href={service.link}
										className="text-moving-gray group-hover:text-moving-dark transition-colors"
										target="_blank"
										rel="noopener noreferrer"
									>
										{service.text}
									</Link>
								) : (
									<p className="text-moving-gray">
										{service.text}
									</p>
								)}
							</motion.div>
						))}
					</div>

					<motion.div
						variants={fadeInUp}
						className="mt-12 p-8 bg-moving-yellow/20 rounded-2xl border-2 border-moving-yellow"
					>
						<p className="text-lg text-moving-gray leading-relaxed">
							Professional movers can also assist with furniture
							rearranging within your home for renovations or
							staging. Many moving labor companies provide
							services for home staging, which involves moving
							furniture to prepare a home for sale.
						</p>
						<p className="text-lg text-moving-gray leading-relaxed mt-4">
							Realtors, property managers, families, and business
							owners rely on us when the task requires muscle and
							know-how without a full-service move. You stay in
							control of the truck, timeline, and destination—we
							handle the physical work safely and efficiently.
						</p>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
};

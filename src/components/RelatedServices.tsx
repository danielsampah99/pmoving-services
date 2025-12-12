"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Home, Package, Boxes, Building, Building2, Users } from "lucide-react";
import { motion } from "motion/react";
import { BuildingOffice2Icon, BuildingOfficeIcon, HomeIcon, HomeModernIcon } from "@heroicons/react/24/solid";

const services = [
	{
		id: "residential",
		title: "Residential Movers",
		description: "Professional relocation services for homes and apartments",
		icon: HomeIcon,
		link: "/services/local-moving/residential-movers",
	},
	{
		id: "household",
		title: "Household Goods",
		description: "Safe transportation of personal belongings and furniture",
		icon: Package,
		link: "/services/local-moving/household",
	},
	{
		id: "pack-unpack",
		title: "Pack & Unpack",
		description: "Full-service packing and unpacking solutions",
		icon: Boxes,
		link: "/services/local-moving/pack-and-unpack",
	},
	{
		id: "apartment",
		title: "Apartment Movers",
		description: "Expert moves for apartment complexes and high-rises",
		icon: BuildingOfficeIcon,
		link: "/services/local-moving/apartment-movers",
	},
	{
		id: "condo",
		title: "Condo Movers",
		description: "Specialized moving services for condominiums",
		icon: BuildingOffice2Icon,
		link: "/services/local-moving/hoa-movers",
	},
	{
		id: "hoa",
		title: "HOA Movers",
		description: "Coordinated moves for HOA-managed properties",
		icon: HomeModernIcon,
		link: "/services/local-moving/condo-movers",
	},
];

export const RelatedServices = () => {
	return (
		<section className="py-12 px-4 bg-moving-light-gray">
			<div className="container mx-auto max-w-6xl">
				<div className="text-center mb-10">
					<h2 className="text-3xl font-bold text-moving-navy mb-2">
						Related Services
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Explore our other professional moving and storage solutions
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<motion.div
							key={service.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.1, duration: 0.5 }}
							viewport={{ once: true }}
							className="group/icon bg-white rounded-lg overflow-hidden ring ring-gray-300 shadow-sm hover:shadow-md transition-shadow group-hover/icon:transition-colors ease-in-out duration-400"
						>
							<div className="p-6 flex items-start gap-4">
								<motion.div
									initial={{ scale: 0.8 }}
									whileInView={{ scale: 1 }}
									transition={{ duration: 0.4 }}
									className="p-3 bg-moving-light-gray rounded-lg"
								>
									<service.icon
										className="stroke-yellow-400 fill-white size-8 group-hover/icon:fill-yellow-400 group-hover/icon:stroke-transparent"
										strokeWidth={1.5}
									/>
								</motion.div>

								<motion.div
									initial="hidden"
									whileInView="visible"
									variants={{
										visible: { transition: { staggerChildren: 0.1 } },
									}}
								>
									<motion.h3
										variants={{
											hidden: { opacity: 0 },
											visible: { opacity: 1 },
										}}
										className="text-xl font-semibold text-moving-navy mb-2"
									>
										{service.title}
									</motion.h3>

									<motion.p
										variants={{
											hidden: { opacity: 0 },
											visible: { opacity: 1 },
										}}
										transition={{ delay: 0.1 }}
										className="text-gray-600 mb-4"
									>
										{service.description}
									</motion.p>

									<motion.a
										href={service.link}
										className="flex items-center cursor-pointer text-yellow-500 font-medium hover:text-yellow-600 transition-colors" // Updated to yellow
									>
										Learn More
										<ArrowRight
											className="ml-1 transition-transform group-hover:translate-x-1"
											size={18}
										/>
									</motion.a>
								</motion.div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

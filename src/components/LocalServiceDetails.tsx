"use client";

import React from "react";
import { Shield, Clock, DollarSign, Calendar } from "lucide-react";
import { motion } from "motion/react";

const featuresData = [
	{
		icon: Shield,
		title: "Licensed & Insured",
		description: "Full protection for your move",
	},
	{
		icon: DollarSign,
		title: "No Hidden Fees",
		description: "Transparent pricing guaranteed",
	},
	{
		icon: Clock,
		title: "On-Time Guarantee",
		description: "Or we discount your move",
	},
	{
		icon: Calendar,
		title: "Same-Day Quotes",
		description: "Quick response to your request",
	},
];

export const LocalServiceDetails = () => {
	return (
		<section className="py-12 px-4 bg-white">
			<div className="container mx-auto max-w-6xl">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					{/* Overview Section */}
					<div>
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="text-3xl font-bold text-moving-navy mb-4"
						>
							Service Overview
						</motion.h2>
						<p className="text-gray-700 mb-6 text-lg">
							Moving across town shouldn’t feel overwhelming—and with Premium
							Moving Services, it doesn’t have to. As one of the most trusted
							local moving companies in Minnesota, we proudly serve Minneapolis,
							St. Paul, and every surrounding neighborhood with reliable,
							efficient, and professional Local moving support.
						</p>
						<p className="text-gray-700 mb-6 text-lg">
							Whether you’re relocating from Uptown to North Loop, Highland Park
							to Mac-Groveland, or from a Frogtown duplex to a Maplewood
							townhome, our team of professional movers makes your transition
							smoother, safer, and stress-free. We offer comprehensive home
							moving services, handling every aspect of residential moves from
							packing to unpacking, backed by years of experience.
						</p>
					</div>

					{/* Features & Specs */}
					<div>
						<motion.h3
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="text-xl font-semibold text-moving-navy mb-4"
						>
							Service Features
						</motion.h3>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
							{featuresData.map((feature, index) => (
								<motion.div
									key={feature.title}
									initial={{ opacity: 0, scale: 0.9 }}
									whileInView={{ opacity: 1, scale: 1 }}
									whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
									transition={{ duration: 0.3, delay: index * 0.1 }}
									className="flex items-center p-4 bg-moving-light-gray rounded-lg hover-scale"
								>
									<feature.icon className="text-moving-orange mr-4" size={24} />
									<div>
										<h4 className="font-medium text-moving-navy">
											{feature.title}
										</h4>
										<p className="text-sm text-gray-600">
											{feature.description}
										</p>
									</div>
								</motion.div>
							))}
						</div>

						{/* Specs Table */}
						<div>
							<img
								src="/moving-process.webp"
								alt="Ways to expedite your moving process"
								className="w-full h-auto rounded-lg shadow-lg mx-auto mb-8"
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

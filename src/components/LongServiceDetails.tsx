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

export const LongServiceDetails = () => {
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
						<p className="text-gray-700 mb-6 text-lg">Long Distance Moving</p>
						<p className="text-gray-700 mb-6 text-lg">
							Premium Moving Services sets ourselves apart with our dedication
							to ensuring quality service coupled with safety and efficiency at
							the fore-front for your long distance needs.
						</p>
						<p className="text-gray-700 mb-6 text-lg">
							We offer flexibility for each project and can meet your needs
							whatever they may be. Through our relationship from start to
							finish you can expect:
						</p>

						<div className="space-y-4 mb-8">
							<motion.ul
								initial="hidden"
								whileInView="visible"
								variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
								className="list-disc pl-6 space-y-3 mb-6"
							>
								{[
									"Load/unload",
									"Junk Removal",
									"Full service move",
									"Climate-controlled storage",
								].map((item, index) => (
									<motion.li
										key={item}
										variants={{
											hidden: { opacity: 0, x: -20 },
											visible: { opacity: 1, x: 0 },
										}}
										transition={{ delay: index * 0.1 }}
										className="text-gray-700"
									>
										{item}
									</motion.li>
								))}
							</motion.ul>

							<p className="text-gray-700 mb-6 text-lg">
								If you are a business, we can help with commercial moving as we
								specialize in several different types of commercial moving.
							</p>

							<h3 className="text-xl font-semibold text-moving-navy mb-4">
								What areas we service?
							</h3>

							<p className="text-gray-700 mb-6 text-lg">
								Our Moving Company services the entire Twin Cities area,
								suburban communities and long distance moves.
							</p>

							<ul className="list-disc pl-6 space-y-3">
								<li className="text-gray-700">Local movers in Minnesota</li>
								<li className="text-gray-700">
									Local moving companies in Minnesota
								</li>
								<li className="text-gray-700">
									Local moving labor in Minnesota
								</li>
								<li className="text-gray-700">
									Local house movers in Minnesota
								</li>
								<li className="text-gray-700">
									Local apartment movers in Minnesota
								</li>
								<li className="text-gray-700">
									Local climate-controlled in Minnesota
								</li>
								<li className="text-gray-700">
									Local movers near me Minnesota
								</li>
							</ul>
						</div>
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
									transition={{
										duration: 0.3,
										delay: index * 0.1,
									}}
									className="flex items-center p-4 bg-moving-gray/10 rounded-lg hover-scale"
								>
									<feature.icon className="text-moving-yellow mr-4" size={24} />
									<div>
										<h4 className="font-medium text-gray-900">
											{feature.title}
										</h4>
										<p className="text-sm text-gray-500">
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

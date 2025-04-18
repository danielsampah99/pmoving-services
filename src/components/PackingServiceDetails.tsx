"use client";
import { motion } from "motion/react";
import React from "react";

export const PackingServiceDetails = () => {
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
							className="text-3xl font-bold text-moving-navy mb-4 md:mt-3"
						>
							Pack & Unpack Services
						</motion.h2>

						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.8 }}
						>
							<h3 className="text-2xl font-semibold text-moving-navy mb-4">
								What is pack and unpack services?
							</h3>
							<p className="text-gray-700 mb-6 text-lg">
								We will come to your location and help pack everything in secure
								boxes. We'll make sure all loose items are secured properly and
								labeled in easy-to-identify boxes. Your items will be
								transported room-to-room, ensuring forks don't end up in
								bathrooms or clothes in the garage.
							</p>
							<p className="text-gray-700 mb-6 text-lg">
								We guarantee your bedroom items will be packed and labeled to
								arrive safely in your new bedroom. Our team can also unpack
								boxes, arranging your belongings exactly where you need them.
							</p>

							<h3 className="text-2xl font-semibold text-moving-navy mb-4 mt-8">
								Why use us to pack and unpack?
							</h3>
							<p className="text-gray-700 mb-6 text-lg">
								We rigorously train all employees to meet our high standards
								before handling client items. Our comprehensive training program
								ensures exceptional service every time.
							</p>
						</motion.div>

						<motion.ul
							initial="hidden"
							whileInView="visible"
							variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
							className="list-disc pl-6 space-y-3 mb-6"
						>
							{[
								"Internal checklist system for perfect item placement",
								"Essential items unpacked first in their proper rooms",
								"Climate-controlled storage available during transitions",
								"24/7 tracking of your packed belongings",
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

						<div className="mt-8">
							<h3 className="text-xl font-semibold text-moving-navy mb-4">
								Minnesota Packing Services
							</h3>
							<ul className="list-disc pl-6 space-y-2">
								{[
									"Movers & packers Minnesota",
									"Packing services in Minnesota",
									"Climate-controlled storage for packing service",
									"Movers & packers near me Minnesota",
								].map((service, index) => (
									<li key={index} className="text-gray-700">
										{service}
									</li>
								))}
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

						{/* Specs Table */}
						<div>
							<img
								src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/Moving+boxes+calculator+table+-1920w.jpg"
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

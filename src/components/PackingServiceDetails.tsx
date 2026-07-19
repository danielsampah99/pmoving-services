"use client";
import { motion } from "motion/react";
import Link from "next/link";
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
							Apartment Moving Done Right in Minnesota
						</motion.h2>

						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.8 }}
						>
							<div className="text-gray-700 mb-6 text-lg">
								Discover how our{" "}
								<Link href="/services/local-moving/apartment-movers">
									apartment moving service
								</Link>{" "}
								combines efficiency, protection, and local expertise for
								seamless relocations across Minnesota.
								<ul className="mt-3">
									<li className="list-disc ml-4">
										North Loop, Minneapolis – High-rise apartments near Target
										Field require elevator coordination, tight scheduling, and
										damage-free handling.
									</li>
									<li className="list-disc ml-4 mt-1">
										Cathedral Hill, St. Paul – Historic buildings near Cathedral
										of Saint Paul demand careful navigation, narrow staircases,
										and protective materials.
									</li>
								</ul>
								<p className="text-sm text-gray-500 mt-5">
									We tailor every move to the building, the layout, and the
									constraints, because one-size-fits-all is how damage happens.
								</p>
							</div>
						</motion.div>
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

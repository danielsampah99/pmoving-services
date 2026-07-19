"use client";
import { motion } from "motion/react";
import Link from "next/link";
import React from "react";

export const PackingServiceDetails = () => {
	return (
		<section className="py-12 px-4 bg-white">
			<div className="container mx-auto max-w-6xl">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 [&_a]:underline [&_a]:text-gray-900">
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
							</div>
						</motion.div>
					</div>

					{/* home packing and moving in Minnesota */}
					<div>
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="text-3xl font-bold text-moving-navy mb-4 md:mt-3"
						>
							Home Packing & Moving Done Right in Minnesota{" "}
						</motion.h2>

						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.8 }}
						>
							<div className="text-gray-700 mb-6 text-lg">
								Experience seamless home packing and moving with expert systems,
								durable materials, and local Minnesota knowledge built for every
								type of home.
								<ul className="mt-3">
									<li className="list-disc ml-4">
										<Link
											className=""
											href="https://www.trulia.com/n/mn/edina/morningside/140757/"
										>
											Edina – Morningside Neighborhood
										</Link>{" "}
										–{" "}
										<Link
											className="italic no-underline"
											href="/services/local-moving/residential-movers"
										>
											Homes
										</Link>{" "}
										near 50th & France require strategic packing for tight
										residential streets, premium finishes, and careful furniture
										protection.
									</li>
									<li className="list-disc ml-4 mt-1">
										<Link href="https://www.exploreminnesota.com/profile/stillwater-boutique-district-river/5669">
											Stillwater – Historic District
										</Link>{" "}
										&nbsp; Properties near Stillwater Lift Bridge demand
										precision packing for antiques, multi-level layouts, and
										older home structures.
									</li>
								</ul>
							</div>
						</motion.div>
					</div>

					{/* Specs Table */}
					<div className="md:col-span-2 max-w-4xl self-center">
						<h3>Essential Materials That Make or Break Your Move</h3>
						<img
							src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/Moving+boxes+calculator+table+-1920w.jpg"
							alt="Ways to expedite your moving process"
							className="size-auto rounded-lg shadow-lg mx-auto mb-8"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

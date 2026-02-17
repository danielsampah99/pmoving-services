"use client";

import { motion } from "motion/react";
import { staggerContainer, fadeInUp } from "@/utils";

import Image from "next/image";
import Link from "next/link";

export const LaborHeavy = () => {
	return (
		<section className="py-20 bg-gradient-to-b from-moving-lightGray to-white">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial="initial"
					whileInView="animate"
					viewport={{ once: true }}
					variants={staggerContainer}
				>
					<motion.h2
						variants={fadeInUp}
						className="text-4xl md:text-5xl font-bold text-moving-dark text-center mb-12"
					>
						<span className="underline-gradient">
							Heavy Lifting
						</span>
					</motion.h2>

					<div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
						<motion.div
							variants={fadeInUp}
							className="order-2 md:order-1"
						>
							<div className="relative h-[400px] lg:h-150 rounded-2xl overflow-hidden shadow-2xl group">
								<Image
									src="/api/media/file/moving-a-safe.webp"
									alt="Safe move with professional movers"
									fill={true}
									className="object-cover transition-transform duration-700 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-moving-dark/50 to-transparent"></div>
							</div>
						</motion.div>

						<motion.div
							variants={fadeInUp}
							className="order-1 md:order-2 space-y-6 text-justify [&>a]:text-moving-dark [&>a]:hover:font-medium [&>a]:hover:underline"
						>
							<p className="text-lg text-moving-gray leading-relaxed">
								Most people underestimate what "heavy" really
								means on moving day. Solid wood dressers,
								sectionals that don't bend, treadmills, safes,
								refrigerators, and tight stairwells turn a
								simple plan into a risky situation fast which is
								a huge undertaking. Bulky items and heavy items
								such as sofas, refrigerators, and pianos require
								specialized equipment and experienced labor to
								move safely and efficiently.
							</p>

							<p className="text-lg text-moving-gray leading-relaxed">
								We regularly help residents with hourly labor
								services in{" "}
								<Link
									href="https://www.mlb.com/twins/ballpark"
									className="text-moving-dark font-semibold hover:underline"
									target="_blank"
									rel="noopener noreferrer"
								>
									North Loop near Target Field
								</Link>{" "}
								where elevators, loading docks, and long
								hallways require planning and efficiency. In{" "}
								<Link
									href="https://shanespencer.com/neighborhoods/bde-maka-ska"
									className=" font-semibold hover:underline"
									target="_blank"
									rel="noopener noreferrer"
								>
									Uptown by Bde Maka Ska
								</Link>
								, narrow staircases and vintage duplex layouts
								demand technique to avoid wall damage. Over in
								Bloomington, townhomes around{" "}
								<Link
									href="https://www.bloomingtonmn.gov/pr/parks/normandale-lake-park"
									className=" font-semibold hover:underline"
									target="_blank"
									rel="noopener noreferrer"
								>
									Normandale Lake
								</Link>{" "}
								and busy apartments near the{" "}
								<Link
									href="https://www.mallofamerica.com"
									className=" font-semibold hover:underline"
									target="_blank"
									rel="noopener noreferrer"
								>
									Mall of America
								</Link>{" "}
								present their own challenges with parking,
								distance carries, and tight corners.
							</p>

							<p className="text-lg text-moving-gray leading-relaxed font-medium">
								This is where experience matters. We don't just
								lift, we assess, protect, and execute. Our team
								knows how to pivot large furniture through small
								spaces, distribute weight safely, and move items
								without scratching floors or door frames.
							</p>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

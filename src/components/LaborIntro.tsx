"use client";

import Link from "next/link";
import { motion } from "motion/react";

export const LaborIntro = () => {
	return (
		<section className="py-16 bg-white">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="max-w-4xl mx-auto"
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
				>
					<div className="prose prose-lg max-w-none">
						<p className="text-lg text-moving-gray leading-relaxed mb-6 text-justify">
							When you already have the rental truck, the moving
							container, the pack, or the storage unit, but you
							don't want to risk your back, your walls, or your
							furniture, you need skilled hands, not favors from
							friends. Moving labor focuses strictly on physical
							exertion, while full-service moving handles the
							entire logistical chain. Premium Moving Services is
							one of the local moving service providers that
							offers professional <strong>moving labor</strong>{" "}
							across Minnesota and cities like{" "}
							<Link
								href="https://www.minneapolis.org"
								className="text-moving-primary hover:underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								Minneapolis
							</Link>
							,
							<Link
								href="https://www.bloomingtonmn.gov"
								className="text-moving-primary hover:underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								{" "}
								Bloomington
							</Link>{" "}
							including surrounding neighborhoods for customers
							who want expert hourly labor help with the heavy
							work while staying in control of their move. Many
							moving labor companies offer upfront pricing with no
							hidden fees, so you know exactly what to expect.
						</p>

						<p className="text-lg text-moving-gray leading-relaxed mb-6">
							Our crews show up on time, in uniform, with
							commercial moving equipment like dollies, moving
							pads, straps, and the experience to move quickly
							without cutting corners. Whether you're relocating
							from a high-rise apartment, a townhome, a{" "}
							<Link
								href="https://www.caringtransitions.com"
								className="text-moving-primary hover:underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								senior living
							</Link>{" "}
							community, or a busy retail space, we bring the
							strength, strategy, and care that prevents damage
							and speeds up your day.
						</p>

						<p className="text-lg text-moving-gray leading-relaxed">
							If you're renting a moving truck from U-Haul, using
							a{" "}
							<Link
								href="https://www.pods.com"
								className="text-moving-primary hover:underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								pod
							</Link>
							, a moving container, a pack, or reorganizing a
							storage unit, this is the smart way to move. Moving
							labor services provide loading, unloading, and heavy
							lifting assistance for these options without the
							need for a truck. The process is streamlined and
							efficient, allowing you to save roughly 40–60%
							compared to{" "}
							<Link
								href="/blogs/moving-help---a-full-guide-to-addressing-your-moving-needs"
								className="text-moving-primary hover:underline"
								target="_blank"
								rel="noopener noreferrer"
							>
								full-service moves
							</Link>{" "}
							by paying only for the hours workers spend loading
							or unloading.{" "}
							<Link
								href="/free-quote"
								className="text-moving-primary hover:underline"
								target="_blank"
								rel="noopener noreferrer">
								Contact us for a free quote for moving labor
							</Link>{" "}
							and let trained background checked movers handle the
							heavy lifting, stress free.
						</p>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

"use client";

import { motion } from "motion/react";
import Link from 'next/link'

const fadeIn = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.6 },
};



export const PackingIntro = () => {
	return (
		<motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-16">
			<div className="prose prose-lg max-w-none text-justified">
				<p className="text-[--color-moving-gray] text-lg leading-relaxed">
					Packing is one of the most time-consuming and stressful
					parts of any move. From fragile kitchenware to bulky
					furniture and personal items, doing it right takes
					experience, planning, and the right packing supplies. That's
					where Premium Moving Services comes in to service the entire process for a successful move with our <Link href="/services/local-moving" className="text-(--color-moving-yellow)/90 hover:text-(--color-moving-yellow)">local moving</Link> team of movers.
				</p>
				<p className="text-[--color-moving-gray] text-lg leading-relaxed mt-4">
					We provide <strong>professional packing services</strong> for homes,
					apartments, offices, and specialty moves throughout
					<strong>Minneapolis</strong> and <strong>St. Paul</strong>, delivering peace of mind before
					moving day even begins. Whether you're preparing for a local
					move, long-distance relocation, or packing items for
					storage, our trained packing professionals handle every
					detail with care and efficiency.
				</p>
			</div>
		</motion.section>
	);
};

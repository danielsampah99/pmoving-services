"use client";

import { motion } from "motion/react";

const fadeIn = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.6 },
};



export const PackingIntro = () => {
	return (
		<motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-16">
			<div className="prose prose-lg max-w-none">
				<p className="text-[--color-moving-gray] text-lg leading-relaxed">
					Packing is one of the most time-consuming and stressful
					parts of any move. From fragile kitchenware to bulky
					furniture and personal items, doing it right takes
					experience, planning, and the right packing supplies. That's
					where Premium Moving Services comes in.
				</p>
				<p className="text-[--color-moving-gray] text-lg leading-relaxed mt-4">
					We provide professional packing services for homes,
					apartments, offices, and specialty moves throughout
					Minneapolis and St. Paul, delivering peace of mind before
					moving day even begins. Whether you're preparing for a local
					move, long-distance relocation, or packing items for
					storage, our trained packing professionals handle every
					detail with care and efficiency.
				</p>
			</div>
		</motion.section>
	);
};

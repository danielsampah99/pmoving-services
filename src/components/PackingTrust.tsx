'use client'

import { type FC, useRef } from "react";
import {
	CheckCircleIcon,
	type CheckCircleIconHandle,
} from "./icons/check-circle-icon";
import { motion } from "motion/react";
import { fadeIn } from "@/utils";

const trainingAreas = [
	"Proper wrapping techniques for fragile items",
	"Weight distribution and box reinforcement",
	"Inventory labeling systems that speed up unloading",
	"Furniture protection and disassembly prep",
];

export const PackingTrust = () => {
	return (
		<section className="bg-white py-16">
			<div className="max-w-7xl mx-auto px-4">
				<motion.h2
					{...fadeIn}
					className="text-4xl font-bold text-gray-800 mb-8 text-center"
				>
					Professional Packing Services You Can Trust
				</motion.h2>
				<motion.p
					{...fadeIn}
					className="text-lg text-moving-gray mb-12 text-center max-w-4xl mx-auto"
				>
					Our professional packing services are performed by trained,
					background-checked packing crew members or movers who know
					how to protect your belongings properly. We don't rush. We
					don't cut corners. And we don't rely on flimsy retail
					materials.
					<br />
					<br />
					Every professional packer/mover on our team is trained in:
				</motion.p>

				<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mb-12">
					{trainingAreas.map((area, idx) => (
						<TrainingCard area={area} areaIdx={idx} key={idx} />
					))}
				</div>

				<motion.p
					{...fadeIn}
					className="text-lg text-moving-gray text-center max-w-4xl mx-auto"
				>
					Unlike national chains and shipping stores, our focus is
					moving-grade packing that works seamlessly with your
					relocation.
				</motion.p>
			</div>
		</section>
	);
};

const TrainingCard: FC<{ area: string; areaIdx: number }> = ({
	area,
	areaIdx,
}) => {
	const iconRef = useRef<CheckCircleIconHandle>(null);

	const handleMouseEnter = () => iconRef.current?.startAnimation();
	const handleMouseLeave = () => iconRef.current?.stopAnimation();

	return (
		<motion.div
			key={areaIdx}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: areaIdx * 0.1 }}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className="bg-gray-100 px-3 py-4 rounded-lg shadow-xs hover:shadow-sm border-gray-300 border border-solid transition-shadow duration-300"
		>
			<CheckCircleIcon
				ref={iconRef}
				className="size-7 fill-gray-600 stroke-moving-yellow mb-4"
			/>
			<p className="text-moving-gray font-medium">{area}</p>
		</motion.div>
	);
};

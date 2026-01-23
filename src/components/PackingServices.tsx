"use client";

import { fadeIn } from "@/utils";
import { motion } from "motion/react";
import {
	CheckCircleIcon,
	type CheckCircleIconHandle,
} from "./icons/check-circle-icon";
import { type FC, useRef } from "react";

const services = [
	"Full-service packing for entire homes or offices",
	"Partial packing for kitchens, closets, or fragile items",
	"Same-day and last-minute packing assistance",
	"Packing for storage and long-term holding",
	"Packing coordination for local and long-distance moves",
];

export const PackingServices = () => {
	return (
		<section className="bg-moving-lightGray py-16">
			<div className="max-w-7xl mx-auto px-4">
				<motion.h2
					{...fadeIn}
					className="text-4xl font-bold text-gray-800 mb-8 text-center"
				>
					Packing Services Designed Around Your Move
				</motion.h2>
				<motion.p
					{...fadeIn}
					className="text-lg text-moving-gray mb-12 text-center max-w-4xl mx-auto"
				>
					Our packing services are flexible and built to fit your
					specific situation, not a generic checklist. We understand
					that every move is different, and your packing plan should
					reflect your home, timeline, and budget.
				</motion.p>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{services.map((service, idx) => (
						<ServiceCard
							service={service}
							serviceIdx={idx}
							key={idx}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

const ServiceCard: FC<{ service: string; serviceIdx: number }> = ({
	service,
	serviceIdx,
}) => {
	const iconRef = useRef<CheckCircleIconHandle>(null);

	const handleMouseEnter = () => iconRef.current?.startAnimation();
	const handleMouseLeave = () => iconRef.current?.stopAnimation();

	return (
		<motion.div
			key={serviceIdx}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: serviceIdx * 0.1 }}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className="bg-white/50 px-3 py-4 rounded-lg shadow-xs hover:shadow-sm border-gray-300 border border-solid transition-shadow duration-300"
		>
			<CheckCircleIcon
				ref={iconRef}
				className="size-7 fill-moving-gray stroke-moving-yellow mb-4"
			/>
			<p className="text-moving-gray font-medium">{service}</p>
		</motion.div>
	);
};

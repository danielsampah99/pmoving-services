"use client";

import { motion } from "motion/react";

import { ClockIcon } from "@/components/icons/clock-icon";
import { ShieldCheckIcon } from "@/components/icons/shield-check-icon";
import {
	PackageIcon,
	type PackageIconHandle,
} from "@/components/icons/package-icon";
import { CheckCircleIcon } from "@/components/icons/check-circle-icon";
import { fadeIn } from "@/utils";
import { type FC, useRef } from "react";

const benefits = [
	{
		id: 1,
		icon: ClockIcon,
		title: "Faster Move Days",
		desc: "Professional packing speeds up your entire moving process",
	},
	{
		id: 2,
		icon: ShieldCheckIcon,
		title: "Damage Prevention",
		desc: "Reduced risk of broken or damaged items during transport",
	},
	{
		id: 3,
		icon: CheckCircleIcon,
		title: "Organized System",
		desc: "Labeled boxes that simplify unpacking at your new location",
	},
	{
		id: 4,
		icon: PackageIcon,
		title: "Quality Materials",
		desc: "Mover-grade supplies designed to protect your belongings",
	},
];

type Benefit = (typeof benefits)[0];

export const PackingBenefits = () => {
	return (
		<section className="py-16 max-w-7xl mx-auto px-4">
			<motion.h2
				{...fadeIn}
				className="text-4xl font-bold text-moving-gray mb-12 text-center"
			>
				Why Professional Packing Is Worth It
			</motion.h2>

			<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
				{benefits.map((benefit, benefitIdx) => (
					<BenefitCard
						benefit={benefit}
						benefitIdx={benefitIdx}
						key={benefit.id}
					/>
				))}
			</div>
		</section>
	);
};

const BenefitCard: FC<{ benefit: Benefit; benefitIdx: number }> = ({
	benefit,
	benefitIdx,
}) => {
	const iconRef = useRef<PackageIconHandle>(null);

	const handleMouseEnter = () => iconRef.current?.startAnimation();

	const handleMouseLeave = () => iconRef.current?.stopAnimation();

	return (
		<motion.div
			key={benefit.id}
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ delay: benefitIdx * 0.15 }}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className="text-center rounded-lg ring ring-inset ring-gray-300 shadow-sm hover:ring-1 p-4 hover:bg-gray-50"
		>
			<div className="inline-flex items-center justify-center size bg-white rounded-full mb-4">
				<benefit.icon
					ref={iconRef}
					className="size-7 text-moving-gray"
				/>
			</div>
			<h3 className="text-xl font-bold text-moving-gray mb-2">
				{benefit.title}
			</h3>
			<p className="text-[--color-moving-gray]">{benefit.desc}</p>
		</motion.div>
	);
};

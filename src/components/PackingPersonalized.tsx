"use client";

import { fadeIn } from "@/utils";
import { motion } from "motion/react";
import {
	CheckCircleIcon,
	type CheckCircleIconHandle,
} from "./icons/check-circle-icon";
import { type FC, useRef } from "react";

type PackingType = {
	id: string;
	url: string | null;
	label: string;
};

const packingTypes = [
	{
		id: "apartments-condos",
		url: null,
		label: "Apartments and condos",
	},
	{
		id: "single-family-homes",
		url: null,
		label: "Single-family homes",
	},
	{
		id: "townhomes-duplexes",
		url: null,
		label: "Townhomes and duplexes",
	},
	{
		id: "senior-downsizing",
		url: "https://www.caringtransitionsofrochestermn/",
		label: "Senior downsizing transitions",
	},
	{
		id: "office-commercial",
		url: null,
		label: "Office and commercial relocations",
	},
] satisfies readonly PackingType[];

export const PackingPersonalized = () => {
	return (
		<section className="bg-moving-lightGray py-16">
			<div className="max-w-7xl mx-auto px-4">
				<motion.h2
					{...fadeIn}
					className="text-4xl font-bold text-gray-800 mb-8 text-center"
				>
					Personalized Packing That Fits Your Life
				</motion.h2>
				<motion.p
					{...fadeIn}
					className="text-lg text-moving-gray mb-12 text-center max-w-4xl mx-auto"
				>
					No two households or businesses are alike. That's why we
					offer personalized packing services tailored to your needs.
					<br />
					<br />
					We regularly customize packing plans for:
				</motion.p>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
					{packingTypes.map((type, idx) => (
						<PackingTypeCard type={type} typeIdx={idx} key={idx} />
					))}
				</div>

				<motion.p
					{...fadeIn}
					className="text-lg text-moving-gray mb-8 text-center max-w-4xl mx-auto"
				>
					Whether you want everything packed from top to bottom or
					just help with specific rooms, we create a packing plan that
					works for you, not the other way around. Our professional
					packers can expertly pack delicate items like glassware,
					electronics, and specialty goods, taking special care to
					protect your valuables with the right techniques and
					materials.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6 }}
					className="text-center"
				>
					<a
						href="/free-quote"
						className="inline-block px-3 py-2.5 bg-moving-yellow hover:bg-moving-yellow/80 text-white font-bold text-lg rounded-lg shadow-sm shadow-yellow-300 transition-all duration-300 transform hover:scale-105"
					>
						Contact us for a free quote on packing services
					</a>
				</motion.div>
			</div>
		</section>
	);
};

const PackingTypeCard: FC<{ type: PackingType; typeIdx: number }> = ({
	type,
	typeIdx,
}) => {
	const iconRef = useRef<CheckCircleIconHandle>(null);

	const handleMouseEnter = () => iconRef.current?.startAnimation();
	const handleMouseLeave = () => iconRef.current?.stopAnimation();

	return (
		<motion.a
			key={type.id}
			href={type.url ?? '#'}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: typeIdx * 0.1 }}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className="bg-white/50 px-3 py-4 rounded-lg shadow-xs hover:shadow-sm border-gray-300 border border-solid transition-shadow duration-300"
		>
			<CheckCircleIcon
				ref={iconRef}
				className="size-7 fill-gray-600 stroke-moving-yellow mb-4"
			/>
			<p className="text-moving-gray [&>a]:underline font-medium">{type.label}</p>
		</motion.a>
	);
};

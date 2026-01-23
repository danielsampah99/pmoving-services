"use client";

import { motion } from "motion/react";
import { fadeIn } from "@/utils";
import { PackageIcon, type PackageIconHandle } from "./icons/package-icon";
import { type FC, useRef } from "react";

const packingSupplies = [
	"Heavy-duty moving boxes",
	"Dish packs and glass dividers",
	"Wardrobe boxes for clothing",
	"Packing paper, tape and bubble wrap",
	"Mattress covers and furniture padding",
	"Specialty boxes for electronics and artwork",
];

export const PackingSupplies = () => {
	return (
		<section className="bg-moving-gray text-white py-16">
			<div className="max-w-7xl mx-auto px-4">
				<motion.h2
					{...fadeIn}
					className="text-4xl font-bold mb-8 text-center"
				>
					High-Quality Packing Supplies Included
				</motion.h2>
				<motion.p
					{...fadeIn}
					className="text-lg mb-12 text-center max-w-4xl mx-auto opacity-90"
				>
					We don't rely on reused or weak boxes. Our packing services
					include high-quality, mover-grade packing supplies designed
					to protect your belongings during transport.
				</motion.p>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{packingSupplies.map((supply, idx) => (
						<SupplyCard key={idx} supply={supply} supplyIdx={idx} />
					))}
				</div>
			</div>
		</section>
	);
};

const SupplyCard: FC<{
	supply: string;
	supplyIdx: number;
}> = ({ supply, supplyIdx }) => {
	const iconRef = useRef<PackageIconHandle>(null);

	const handleMouseEnter = () => iconRef.current?.startAnimation();
	const handleMouseLeave = () => iconRef.current?.stopAnimation();

	return (
		<motion.div
			key={supplyIdx}
			initial={{ opacity: 0, x: -20 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ delay: supplyIdx * 0.1 }}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className="flex items-center space-x-3 bg-white/10 p-4 rounded-lg backdrop-blur-sm"
		>
			<PackageIcon ref={iconRef} className="size-7 text-white" />
			<span className="text-white">{supply}</span>
		</motion.div>
	);
};

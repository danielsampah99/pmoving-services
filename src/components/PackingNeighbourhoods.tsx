"use client";

import { fadeIn } from "@/utils";
import { motion } from "motion/react";
import { MapPinIcon } from "./icons/map-pin-icon";

const minneapolisNeighborhoods = [
	"North Loop – Loft apartments, condos, and modern high-rise packing",
	"Northeast Minneapolis – Single-family homes, duplexes, and artist studios",
	"Uptown – Apartments, condos, and tight-access buildings",
	"Linden Hills – Historic homes requiring careful, detailed packing",
	"Lowry Hill – Large residences and specialty item packing",
	"Powderhorn – Family homes and multi-room packing services",
	"Tangletown – Residential packing with stair and layout considerations",
	"Downtown East – Condo packing with elevator coordination",
	"Whittier – Apartment and partial packing solutions",
	"Longfellow – Full and partial home packing services",
];

const stPaulNeighborhoods = [
	"Highland Park – Family homes and long-distance packing prep",
	"Macalester-Groveland – Older homes requiring careful packing techniques",
	"Summit Hill – Historic properties and high-value item packing",
	"Cathedral Hill – Multi-level residences and specialty box packing",
	"West Seventh – Residential and apartment packing services",
	"Como Park – Homes and duplexes with flexible packing needs",
	"Lowertown – Condo and office packing coordination",
	"Dayton's Bluff – Partial and full-service packing solutions",
	"Payne-Phalen – Budget-conscious and efficient packing services",
	"Merriam Park – Student, family, and downsizing packing support",
];

export const PackingNeighbourhoods = () => {
	return (
		<section className="py-16 max-w-7xl mx-auto px-4">
			<motion.h2
				{...fadeIn}
				className="text-4xl font-bold text-gray-800 mb-4 text-center"
			>
				Serving Minneapolis & St. Paul Neighborhoods
			</motion.h2>
			<motion.p
				{...fadeIn}
				className="text-lg text-moving-gray mb-12 text-center max-w-4xl mx-auto"
			>
				Our local knowledge allows us to pack efficiently while
				respecting building rules, parking limitations, and move-in
				schedules.
			</motion.p>

			<div className="grid lg:grid-cols-2 gap-12">
				{/* Minneapolis */}
				<motion.div {...fadeIn}>
					<h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
						<MapPinIcon className="size-6 text-gray-600 mr-2 hover:text-moving-yellow" />
						Minneapolis Neighborhoods
					</h3>
					<ul className="space-y-3">
						{minneapolisNeighborhoods.map((neighborhood, idx) => (
							<li
								key={idx}
								className="text-moving-gray pl-6 border-l-2 border-gray-300 hover:border-moving-yellow transition-colors duration-300"
							>
								{neighborhood}
							</li>
						))}
					</ul>
				</motion.div>

				{/* St. Paul */}
				<motion.div {...fadeIn}>
					<h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
						<MapPinIcon className="size-6 text-gray-600 mr-2 hover:text-moving-yellow" />
						St. Paul Neighborhoods
					</h3>
					<ul className="space-y-3">
						{stPaulNeighborhoods.map((neighborhood, idx) => (
							<li
								key={idx}
								className="text-moving-gray pl-6 border-l-2 border-gray-300 hover:border-moving-yellow transition-colors duration-300"
							>
								{neighborhood}
							</li>
						))}
					</ul>
				</motion.div>
			</div>
		</section>
	);
};

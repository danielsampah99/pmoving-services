"use client";

import { fadeIn } from "@/utils";
import { motion } from "motion/react";
import { MapPinIcon } from "./icons/map-pin-icon";
import Image from "next/image";
import Link from "next/link";
import type { FC, ReactNode } from "react";

const minneapolisNeighborhoods = [
	<>
		<Link key="north-loop" href="https://northloop.org/">
			North Loop
		</Link>{" "}
		– Loft apartments, condos, and modern high-rise packing
	</>,
	<>
		<Link
			key="northeast"
			href="https://www.ci.minneapolis.mn.us/neighborhoods/northeast"
		>
			Northeast Minneapolis
		</Link>{" "}
		– Single-family homes, duplexes, and artist studios
	</>,
	<>
		<Link key="uptown" href="https://www.uptownminneapolis.com/">
			Uptown
		</Link>{" "}
		– Apartments, condos, and tight-access buildings
	</>,
	<>
		<Link key="linden-hills" href="https://www.lindenhills.org/">
			Linden Hills
		</Link>{" "}
		– Historic homes requiring careful, detailed packing
	</>,
	<>
		<Link
			key="lowry-hill"
			href="https://www.ci.minneapolis.mn.us/neighborhoods/lowry-hill"
		>
			Lowry Hill
		</Link>{" "}
		– Large residences and specialty item packing
	</>,
	<>
		<Link key="powderhorn" href="https://www.ppna-mpls.org/">
			Powderhorn
		</Link>{" "}
		– Family homes and multi-room packing services
	</>,
	<>
		<Link
			key="tangletown"
			href="https://www.ci.minneapolis.mn.us/neighborhoods/tangletown"
		>
			Tangletown
		</Link>{" "}
		– Residential packing with stair and layout considerations
	</>,
	<>
		<Link
			key="downtown-east"
			href="https://www.ci.minneapolis.mn.us/neighborhoods/downtown-east"
		>
			Downtown East
		</Link>{" "}
		– Condo packing with elevator coordination
	</>,
	<>
		<Link key="whittier" href="https://www.whittieralliance.org/">
			Whittier
		</Link>{" "}
		– Apartment and partial packing solutions
	</>,
	<>
		<Link key="longfellow" href="https://www.longfellow.org/">
			Longfellow
		</Link>{" "}
		– Full and partial home packing services
	</>,
];

const stPaulNeighborhoods = [
	<>
		<Link key="highland-park" href="https://www.highlandpark.org/">
			Highland Park
		</Link>{" "}
		– Family homes and long-distance packing prep
	</>,
	<>
		<Link key="macalester-groveland" href="https://www.macgrove.org/">
			Macalester-Groveland
		</Link>{" "}
		– Older homes requiring careful packing techniques
	</>,
	<>
		<Link key="summit-hill" href="https://www.summithillassociation.org/">
			Summit Hill
		</Link>{" "}
		– Historic properties and high-value item packing
	</>,
	<>
		<Link key="cathedral-hill" href="https://www.cathedralhill.org/">
			Cathedral Hill
		</Link>{" "}
		– Multi-level residences and specialty box packing
	</>,
	<>
		<Link key="west-seventh" href="https://www.wsna-stpaul.org/">
			West Seventh
		</Link>{" "}
		– Residential and apartment packing services
	</>,
	<>
		<Link key="como-park" href="https://www.comopark.org/">
			Como Park
		</Link>{" "}
		– Homes and duplexes with flexible packing needs
	</>,
	<>
		<Link key="lowertown" href="https://www.lowertown.org/">
			Lowertown
		</Link>{" "}
		– Condo and office packing coordination
	</>,
	<>
		<Link key="daytons-bluff" href="https://www.daytonsbluff.org/">
			Dayton's Bluff
		</Link>{" "}
		– Partial and full-service packing solutions
	</>,
	<>
		<Link key="payne-phalen" href="https://www.paynephalen.org/">
			Payne-Phalen
		</Link>{" "}
		– Budget-conscious and efficient packing services
	</>,
	<>
		<Link key="merriam-park" href="https://www.merriampark.org/">
			Merriam Park
		</Link>{" "}
		– Student, family, and downsizing packing support
	</>,
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
				<PackingCityCard
					key={"minneapolis-neighbouroods"}
					imageSrc="/api/media/file/downtown-minneapolis-on-highway-94-westbound.webp"
					imageAlt="Downtown Minneapolis on Highway 94 Westbound"
					neighbourhoodName="Minneapolis Neighborhoods"
					neighbourhoodData={minneapolisNeighborhoods}
				/>

				{/* St. Paul */}

				<PackingCityCard
					key={"st-paul-neighbouroods"}
					imageSrc="/api/media/file/downtown-st-paul-overlooking-the-mississippi-river.webp"
					imageAlt="Downtown St Paul Overlooking the Mississippi River"
					neighbourhoodName="St. Paul Neighborhoods"
					neighbourhoodData={stPaulNeighborhoods}
				/>
			</div>
		</section>
	);
};

type PackingCityCardProps = {
	imageSrc: string;
	imageAlt: string;
	neighbourhoodName: string;
	neighbourhoodData: ReactNode[];
};

const PackingCityCard: FC<PackingCityCardProps> = ({ ...props }) => {
	return (
		<motion.div {...fadeIn}>
			<div className="my-4 overflow-hidden rounded-lg">
				<Image
					src={props.imageSrc}
					alt={props.imageAlt}
					width={1280}
					height={400}
					loading="lazy"
					className="hover:scale-110 transition-[scale] ease-in-out duration-200"
				/>
			</div>

			<h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
				<MapPinIcon className="size-6 text-gray-600 mr-2 hover:text-moving-yellow" />
				{props.neighbourhoodName}
			</h3>
			<ul className="space-y-3">
				{props.neighbourhoodData.map((neighborhood, idx) => (
					<li
						key={idx}
						className="text-moving-gray [&>a]:text-yellow-500 [&>a]:underline [&>a]:font-medium pl-6 border-l-2 border-gray-300 hover:border-moving-yellow transition-colors duration-300"
					>
						{neighborhood}
					</li>
				))}
			</ul>
		</motion.div>
	);
};

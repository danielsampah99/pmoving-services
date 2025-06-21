"use client";

import { ServiceArea } from "@/payload-types";
import dynamic from "next/dynamic";
import { Suspense, type FC } from "react";
const InteractiveMap = dynamic(
	() => import("./InteractiveMap").then((mod) => mod.InteractiveMap),
	{ ssr: false },
);

export const MapSection: FC<{ serviceAreas: ServiceArea[] }> = ({
	serviceAreas,
}) => {
	return (
		<section id="service-areas">
			<Suspense fallback={<span>Loading map...</span>}>
				<InteractiveMap serviceAreas={serviceAreas} />
			</Suspense>
		</section>
	);
};

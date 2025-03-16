"use client";

import dynamic from "next/dynamic";
import type { FC } from "react";
const InteractiveMap = dynamic(() => import("./InteractiveMap").then(mod => mod.InteractiveMap), { ssr: false })

export const MapSection: FC = () => {
	return (
		<section id="service-areas">
			<InteractiveMap />
		</section>
	);
};

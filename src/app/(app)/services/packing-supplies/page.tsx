import { OurLocations } from "@/components/OurLocations";
import { PackingHero } from "@/components/PackingHero";
import { PackingServiceDetails } from "@/components/PackingServiceDetails";
import React from "react";

const PackingServicesPage = () => {
	return (
		<div>
			<PackingHero />
			<PackingServiceDetails />
			<OurLocations />
		</div>
	);
};

export default PackingServicesPage;

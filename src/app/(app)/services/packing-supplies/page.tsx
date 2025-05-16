import { OurLocations } from "@/components/OurLocations";
import { PackingHero } from "@/components/PackingHero";
import { PackingServiceDetails } from "@/components/PackingServiceDetails";
import { ServicesSection } from "@/components/ServicesSection";
import { RequestQuote } from "../local-moving/residential-movers/request-quote";


const PackingServicesPage = () => {
	return (
		<div>
			<PackingHero />
			<PackingServiceDetails />
			<RequestQuote />
			<ServicesSection />
			<OurLocations />
		</div>
	);
};

export default PackingServicesPage;

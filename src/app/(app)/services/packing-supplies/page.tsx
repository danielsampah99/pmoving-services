import { OurLocations } from "@/components/OurLocations";
import { PackingHero } from "@/components/PackingHero";
import { PackingServiceDetails } from "@/components/PackingServiceDetails";
import { ServicesSection } from "@/components/ServicesSection";
import { RequestQuote } from "../local-moving/residential-movers/request-quote";

import { Metadata } from "next";
import { BASE_URL } from "@/utils";

export const metadata: Metadata = {
	title: "Stress-Free Packing Services | Moving Companies",
	description:
		"Complete packing solutions from Minnesota Movers, delivered with utmost care and security, along with climate-controlled storage available during transtions. You can also find Premium Moving Services in Minnesota, Minneapolis, St. Paul, Lakeville, Rochester, Lakeland and neighboring cities",
	openGraph: {
		title: "In-Budget Gun Safe Movers Near Me In Prices",
		description:
			"Complete packing solutions from Minnesota Movers, delivered with utmost care and security, along with climate-controlled storage available during transtions. You can also find Premium Moving Services in Minnesota, Minneapolis, St. Paul, Lakeville, Rochester, Lakeland and neighboring cities",
		type: "website",
		url: `${BASE_URL}/services/specialty-moving/senior-relocation`,
		images: [
			{
				url: `${BASE_URL}/api/media/file/Moving%20labour.webp`,
				width: 1200,
				height: 630,
				alt: "A team of professional movers doing manual labor",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "In-Budget Gun Safe Movers Near Me In Prices",
		description:
			"Complete packing solutions from Minnesota Movers, delivered with utmost care and security, along with climate-controlled storage available during transtions. You can also find Premium Moving Services in Minnesota, Minneapolis, St. Paul, Lakeville, Rochester, Lakeland and neighboring cities",
		images: [`${BASE_URL}/api/media/file/Moving%20labour.webp`],
	},
};

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

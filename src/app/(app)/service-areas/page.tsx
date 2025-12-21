import type { Metadata } from "next";
import { Hero } from "./hero";
import { OurLocations } from "@/components/OurLocations";
import { ServiceAreaMap } from "./service-areas-map";
import { getPayload } from "payload";
import config from "@payload-config";
import { MINNESOTA_CENTRE } from "@/data/map";
import { BASE_URL } from "@/utils";

export const metadata: Metadata = {
	title: {
		default: "Areas We Serve - Premium Moving Services",
		template: "Premium Moving Services near you",
	},
	description:
		"Explore our professional moving services across multiple locations. Get reliable, efficient and affordable moving solutions for residential and commerical clients",
	keywords:
		"moving jobs, moving careers, professional movers hiring, Premium Moving Services careers, moving company jobs",
	openGraph: {
		type: "website",
		title: "Areas We Serve - Premium Moving Services",
		description:
			"Explore our professional moving services across multiple locations. Get reliable, efficient and affordable moving solutions for residential and commerical clients",
		url: "https://pmovingservices.com/service-areas",
		images: [
			{
				url: `${BASE_URL}/logo.svg`,
				width: 1200,
				height: 630,
				alt: "Premium Moving Services Career Opportunities",
			},
		],
	},
	robots: {
		follow: true,
		index: true,
	},
	alternates: {
		canonical: "https://www.pmovingservices.com/service-areas",
	},
};

export default async function ServiceAreasPage() {
	const payload = await getPayload({ config });

	const serviceAreas = await payload.find({
		collection: "service-areas",
		pagination: false,
		sort: "title",
	});

	return (
		<section>
			<Hero />
			<ServiceAreaMap
				cities={serviceAreas.docs ?? []}
				serviceAreasMapZoom={6}
				serviceAreasCenter={MINNESOTA_CENTRE}
			/>
			<OurLocations />
		</section>
	);
}

import type { Metadata } from "next";
import { Hero } from "./hero";
import { OurLocations } from "@/components/OurLocations";
import { ServiceAreaMap } from "./service-areas-map";
import { getPayload } from "payload";
import config from "@payload-config";
import { MINNESOTA_CENTRE } from "@/data/map";

export const metadata: Metadata = {
	title: "Join Our Team | Career Opportunities at Premium Moving Services",
	description:
		"Find rewarding career opportunities at P Moving Services. Apply now for professional moving positions with competitive pay and benefits.",
	keywords:
		"moving jobs, moving careers, professional movers hiring, Premium Moving Services careers, moving company jobs",
	openGraph: {
		type: "website",
		title:
			"Moving Service Areas | Premium Moving Services operates near and far from you",
		description:
			"Premium Moving Services operates near and far from you. Look us up now",
		url: "https:/pmovingservices.com",
		images: [
			{
				url: "",
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

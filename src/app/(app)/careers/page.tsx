import { CareerForm } from "./CareerForm";
import { Info } from "./Info";

import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Join Our Team | Career Opportunities at Premium Moving Services",
	description:
		"Find rewarding career opportunities at P Moving Services. Apply now for professional moving positions with competitive pay and benefits.",
	keywords:
		"moving jobs, moving careers, professional movers hiring, Premium Moving Services careers, moving company jobs",
	openGraph: {
		type: "website",
		title: "Join Our Team | Career Opportunities at Premium Moving Services",
		description:
			"Find rewarding career opportunities at P Moving Services. Apply now for professional moving positions with competitive pay and benefits.",
		url: "http://pmovingservices.com",
		images: [
			{
				url: "/logo.svg",
				width: 1200,
				height: 630,
				alt: "Premium Moving Services Career Opportunities",
			},
			{
				url: "/api/media/file/Deshun%20and%20Drake.webp",
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
		canonical: "https://www.pmovingservices.com/careers",
	},
};

export default function CareersPage() {
	return (
		<div className="bg-white max-sm:border-t max-sm:border-solid max-sm:border-white">
			<Info />
			<CareerForm />
		</div>
	);
}

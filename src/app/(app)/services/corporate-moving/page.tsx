import { ServiceLayout } from "@/components/ServiceLayout";
import { Info } from "lucide-react";
import { ServicesSection } from "@/components/ServicesSection";
import { OurLocations } from "@/components/OurLocations";
import { RequestQuote } from "../local-moving/residential-movers/request-quote";
import type { Metadata } from "next";
import { BASE_URL } from "@/utils";
import { FAQs } from "../local-moving/residential-movers/faq";
import { CorporateMovingIntro } from "./intro";
import {
	CorporateMovingContent,
	CorporateMovingPackages,
	executionData,
	handlingData,
} from "./packages";
import { BusinessRelocation, HowToChoose, MinnesotaSpecific } from "./content";

export const metadata: Metadata = {
	title: "Premium Moving Services | Corporate Relocation in Minnesota",
	description:
		"Trusted by eminent organizations, Premium Moving offers expert corporate relocation services in Minnesota, Minneapolis, St. Paul, Lakeville, Rochester, Lakeland and neighboring cities. We provide complete packing, shipping, and unpacking for seamless business and employee moves.",
	keywords: [
		"corporate relocation Minnesota",
		"business moving services",
		"office movers",
		"employee relocation",
		"commercial movers Woodbury",
		"packing and unpacking services",
		"office equipment transportation",
		"Minnesota corporate movers",
		"corporate moving company",
	],
	openGraph: {
		title: "Premium Moving Services | Corporate Relocation in Minnesota",
		description:
			"Trusted by eminent organizations, Premium Moving offers expert corporate relocation services in Minnesota, Minneapolis, St. Paul, Lakeville, Rochester, Lakeland and neighboring cities. We provide complete packing, shipping, and unpacking for seamless business and employee moves.",
		type: "website",
		url: `${BASE_URL}/services/corporate-moving`,
		images: [
			{
				url: `${BASE_URL}/api/media/file/corporate-moving.webp`,
				width: 1200,
				height: 630,
				alt: "A team of professional movers handling corporate relocation",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Premium Moving Services | Corporate Relocation in Minnesota",
		description:
			"Trusted by eminent organizations, Premium Moving offers expert corporate relocation services in Minnesota, Minneapolis, St. Paul, Lakeville, Rochester, Lakeland and neighboring cities. We provide complete packing, shipping, and unpacking for seamless business and employee moves.",
		images: [`${BASE_URL}/api/media/file/corporate-moving.webp`],
	},
};

const CorporateMoving = () => {
	return (
		<ServiceLayout
			image="/api/media/file/corporate-moving.webp"
			title="Corporate Moving Services"
			desc="Professional corporate moving services designed to minimize downtime, protect assets, and ensure seamless business transitions across Minnesota."
		>
			<CorporateMovingIntro />
			<CorporateMovingPackages />
			<CorporateMovingContent
				data={handlingData}
				title="What we handle"
				description={
					<p className="mt-6 text-lg/8 text-gray-600">
						Our office movers use specialized instruments and techniques to
						safely haul high-value electronics and delicate assets. It's crucial
						to verify that your team can safely handle IT and network equipment
						during transfer.
						<br />
						We also provide storage solutions for office furniture and archived
						files.
					</p>
				}
			/>

			<CorporateMovingContent
				data={executionData}
				title="Strategic Execution"
				description={
					<p className="mt-6 text-lg/8 text-gray-600">
						Most team of movers just “show up.” We plan:
					</p>
				}
			/>

			<MinnesotaSpecific />

			<BusinessRelocation />

			<HowToChoose />

			<FAQs title="FAQs about Corporate Moving Services" faqs={[]} />
			<RequestQuote />
			<ServicesSection />
			<OurLocations />
		</ServiceLayout>
	);
};

export default CorporateMoving;

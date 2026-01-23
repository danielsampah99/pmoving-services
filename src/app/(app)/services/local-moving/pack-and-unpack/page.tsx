import { ServiceLayout } from "@/components/ServiceLayout";
import { Info } from "lucide-react";
import { motion } from "motion/react";
import { FAQs } from "../residential-movers/faq";
import { packingFAQs } from "@/data/moving-tips";
import { RequestQuote } from "../residential-movers/request-quote";
import { RelatedLocalMoving } from "../residential-movers/related-services";
import { localMovingServices } from "@/data/services";
import { ServicesSection } from "@/components/ServicesSection";
import { OurLocations } from "@/components/OurLocations";
import type { Metadata } from "next";
import { BASE_URL } from "@/utils";
import Image from "next/image";
import { PackingHeader } from "@/components/PackingHeader";
import { PackingIntro } from "@/components/PackingIntro";
import { PackingServices } from "@/components/PackingServices";
import { PackingBenefits } from "@/components/PackingBenefits";
import { PackingSupplies } from "@/components/PackingSupplies";
import { PackingNeighbourhoods } from "@/components/PackingNeighbourhoods";

export const metadata: Metadata = {
	title: "Professional Packing and Unpacking Services",
	description:
		"Premium Moving Services is here to deliver the reliable packing and unpacking services in Minnesota, Minneapolis, St. Paul, Lakeville, Rochester, Lakeland and neighboring cities with systematic packiing, protection and efficient setup.",
	openGraph: {
		title: "Professional Packing and Unpacking Services",
		description:
			"Premium Moving Services is here to deliver the reliable packing and unpacking services in Minnesota, Minneapolis, St. Paul, Lakeville, Rochester, Lakeland and neighboring cities with systematic packing, protection and efficient setup.",
		type: "website",
		url: `${BASE_URL}/services/corporate-moving`,
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
		title: "Professional Packing and Unpacking Services",
		description:
			"Premium Moving Services is here to deliver the reliable packing and unpacking services in Minnesota, Minneapolis, St. Paul, Lakeville, Rochester, Lakeland and neighboring cities with systematic packiing, protection and efficient setup",
		images: [`${BASE_URL}/api/media/file/Moving%20labour.webp`],
	},
};

const fadeIn = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.6 },
};

const PackAndUnpack = () => {
	return (
		<>
			<div className="w-full bg-white">
				<PackingHeader />
				<PackingIntro />
				<PackingServices />
				<PackingBenefits />
				<PackingSupplies />
				<PackingNeighbourhoods />
			</div>

			<FAQs faqs={packingFAQs} />
			<RequestQuote />
			<RelatedLocalMoving services={localMovingServices} />
			<ServicesSection />
			<OurLocations />
		</>
	);
};

export default PackAndUnpack;

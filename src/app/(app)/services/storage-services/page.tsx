import { RequestQuote } from "../local-moving/residential-movers/request-quote";
import { OurLocations } from "@/components/OurLocations";
import { ServicesSection } from "@/components/ServicesSection";
import { FAQs } from "../local-moving/residential-movers/faq";
import { storageFaqs } from "@/data/moving-tips";
import { Metadata } from "next";
import { StorageServicesHero } from "./hero";
import { StorageServicesPlans } from "./plans";
import { StorageServicesFeatures } from "./features";

export const metadata: Metadata = {
	title: "Secure Settings for Your Essential Belongings | Premium Moving Services",
	description:
		"Running out of space in your home and office or just want to store your belongings somewhere safe? Get packing and storage services in a secure warehouse.",
};

export default function StorageServices() {
	return (
		<>
			<StorageServicesHero />
			<StorageServicesPlans />
			<StorageServicesFeatures />
			<RequestQuote />
			<FAQs
				title="STORAGE SOLUTIONS FAQS – EXPERT ANSWERS FOR SMART DECISIONS"
				faqs={storageFaqs}
			/>
			<ServicesSection />
			<OurLocations />
		</>
	);
}

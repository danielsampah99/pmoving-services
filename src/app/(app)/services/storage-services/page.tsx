import StorageContent from "@/components/StorageContent";
import { RequestQuote } from "../local-moving/residential-movers/request-quote";
import { OurLocations } from "@/components/OurLocations";
import { ServicesSection } from "@/components/ServicesSection";
import { FAQs } from "../local-moving/residential-movers/faq";
import { storageFaqs } from "@/data/moving-tips";
import { Metadata } from "next";
import { ServiceLayout } from "@/components/ServiceLayout";

export const metadata: Metadata = {
	title:
		"Secure Settings for Your Essential Belongings | Premium Moving Services",
	description:
		"Running out of space in your home and office or just want to store your belongings somewhere safe? Get packing and storage services in a secure warehouse.",
};

export default function StorageServices() {
	return (
		<>
			<ServiceLayout
				image="/moving-warehouse.png"
				title="Professional Storage"
				desc="Secure, climate-controlled storage facilities with 24/7 monitoring and flexible rental options. Perfect for personal or business storage needs."
			>
				<span className="hidden" />
			</ServiceLayout>

			<StorageContent />
			<RequestQuote />
			<FAQs faqs={storageFaqs} />
			<ServicesSection />
			<OurLocations />
		</>
	);
}

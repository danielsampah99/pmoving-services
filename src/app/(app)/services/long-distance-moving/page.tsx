import { LongServiceDetails } from "@/components/LongServiceDetails";
import { OurLocations } from "@/components/OurLocations";
import { PackingHerolong } from "@/components/PackingHeroLong";
import { FAQs } from "@/app/(app)/services/local-moving/residential-movers/faq";
import { longDistanceQuestions } from "@/data/moving-tips";
import { RequestQuote } from "@/app/(app)/services/local-moving/residential-movers/request-quote";
import { RelatedMovingServices } from "./related-services";
import { longDistanceMovingServices } from "@/data/services";
import { ServicesSection } from "@/components/ServicesSection";
import type { Metadata } from "next";
import { CTA } from "./cta";

export const metadata: Metadata = {
	title: "Premium Long Distance Movers from Minnesota",
	description:
		"Best-in-clas moving services for long distance in Minnesota is here to serve you with high quality services and complete on the move protection",
};

const LongDistanceMovingPage = () => {
	return (
		<div>
			<PackingHerolong
				description="Professional long distance movers based in Minnesota. Fully licensed, expert interstate movers offering transparent pricing, expert packing, secure transport, and real communication. Get your free quote today."
				image="/long-distance-moving.webp"
				title="Professional Long Distance Moving Services from Minnesota"
			/>
			<CTA />
			<LongServiceDetails />
			<RelatedMovingServices services={longDistanceMovingServices} />
			<RequestQuote />
			<FAQs title="FAQs About Long Distance Moving" faqs={longDistanceQuestions} />
			<ServicesSection />
			<OurLocations />
		</div>
	);
};

export default LongDistanceMovingPage;

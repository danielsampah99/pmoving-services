import { LongServiceDetails } from "@/components/LongServiceDetails";
import { OurLocations } from "@/components/OurLocations";
import { PackingHerolong } from "@/components/PackingHeroLong";
import { FAQs } from "@/app/(app)/services/local-moving/residential-movers/faq";
import { longDistanceQuestions } from "@/data/moving-tips";
import { RequestQuote } from "@/app/(app)/services/local-moving/residential-movers/request-quote";
import { RelatedMovingServices } from "./related-services";
import { longDistanceMovingServices } from "@/data/services";
import { ServicesSection } from "@/components/ServicesSection";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Premium Long Distance Movers from Minnesota",
	description: "Best-in-clas moving services for long distance in Minnesota is here to serve you with high quality services and complete on the move protection"
}

const LongDistanceMovingPage = () => {
	return (
		<div>
			<PackingHerolong
				description="Top-rated long distance movers servicing nationwide relocations. We handle all aspects of your cross-country or state-to-state move with expert packing, secure transportation, and stress-free delivery. Our professional team ensures your belongings arrive safely whether you're moving 100 or 3,000 miles away."
				image="/long-distance-moving.webp"
				title="Long Distance Moving"
			/>
			<LongServiceDetails />
			<RelatedMovingServices services={longDistanceMovingServices} />
			<RequestQuote />
			<FAQs faqs={longDistanceQuestions} />
			<ServicesSection />
			<OurLocations />
		</div>
	);
};

export default LongDistanceMovingPage;

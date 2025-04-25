import { OurLocations } from "@/components/OurLocations";
import { PackingHerolong } from "@/components/PackingHeroLong";
import { LongServiceDetails } from "@/components/LongServiceDetails";
import { FAQs } from "../../local-moving/residential-movers/faq";
import { longDistanceQuestions } from "@/data/moving-tips";
import { RequestQuote } from "../../local-moving/residential-movers/request-quote";
import { RelatedMovingServices } from "../related-services";
import { longDistanceMovingServices } from "@/data/services";

const InterstateMovingSpecialistsPage = () => {
	return (
		<div>
			<PackingHerolong
				description="Premium Moving Services sets ourselves apart with our dedication to ensuring quality service coupled with safety and efficiency at the fore-front. We offer flexibility for each project and can meet your needs whatever they may be"
				image="/long-distance-moving.webp"
				title="Interstate Moving Specialists"
			/>
			<LongServiceDetails />
			<RelatedMovingServices services={longDistanceMovingServices} />
			<RequestQuote />
			<FAQs faqs={longDistanceQuestions} />
			<OurLocations />
		</div>
	);
};

export default InterstateMovingSpecialistsPage;

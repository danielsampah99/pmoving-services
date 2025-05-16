import { OurLocations } from "@/components/OurLocations";
import { PackingHerolong } from "@/components/PackingHeroLong";
import { LongServiceDetails } from "@/components/LongServiceDetails";
import { FAQs } from "../../local-moving/residential-movers/faq";
import { longDistanceQuestions } from "@/data/moving-tips";
import { RequestQuote } from "../../local-moving/residential-movers/request-quote";
import { RelatedMovingServices } from "../related-services";
import { longDistanceMovingServices } from "@/data/services";
import { ServiceLayout } from "@/components/ServiceLayout";
import { ServicesSection } from "@/components/ServicesSection";

const InterstateMovingSpecialistsPage = () => {
	return (
		<div>
			<ServiceLayout
				image="/long-distance-moving.webp"
				title="Interstate Moving Specialists"
				desc="Professional cross-state relocation services with nationwide coverage"
			>
				<div className="py-12 px-4">
					<div className="max-w-7xl mx-auto space-y-8">
						<p className="text-gray-700 text-lg">
							Premium Moving Services sets ourselves apart with our dedication
							to ensuring quality service coupled with safety and efficiency at
							the fore-front. We offer flexibility for each project and can meet
							your needs whatever they may be.
						</p>

						<div className="bg-gray-50 p-6 rounded-lg">
							<h3 className="text-xl font-bold mb-4">What You Can Expect:</h3>
							<ul className="list-disc pl-6 space-y-3 text-gray-700">
								<li>Courteous, friendly, and professional service</li>
								<li>Experienced movers adapting to any situation</li>
								<li>Comprehensive packing/unpacking services</li>
								<li>Schedule flexibility for your convenience</li>
								<li>Community-focused safety measures</li>
							</ul>
							<p className="mt-4 text-gray-700">
								We strive to exceed expectations through our adaptability in
								every relocation project.
							</p>
						</div>
					</div>
				</div>
			</ServiceLayout>
			<LongServiceDetails />
			<RelatedMovingServices services={longDistanceMovingServices} />
			<RequestQuote />
			<FAQs faqs={longDistanceQuestions} />
			<ServicesSection />
			<OurLocations />
		</div>
	);
};

export default InterstateMovingSpecialistsPage;

import { ServiceLayout } from "@/components/ServiceLayout";
import { OurLocations } from "@/components/OurLocations";
import { RequestQuote } from "../../local-moving/residential-movers/request-quote";
import { FAQs } from "../../local-moving/residential-movers/faq";
import { RelatedLocalMoving } from "../../local-moving/residential-movers/related-services";
import { seniorRelocationFAQs } from "@/data/moving-tips";
import { specialtyMovingServices } from "@/data/services";
import { ServicesSection } from "@/components/ServicesSection";

const SeniorRelocationPage = () => {
	return (
		<ServiceLayout
			image="/residential-moving.webp"
			title="Senior Relocation Services"
			desc="Compassionate and comprehensive senior moving services designed to make transitions smooth and stress-free for seniors and their families."
		>
			<div className="max-w-7xl mx-auto px-4 py-12">
				<div className="space-y-8">
					<section className="bg-white rounded-lg shadow-md p-6">
						<h2 className="text-3xl font-bold mb-4">
							Specialized Senior Moving Care
						</h2>
						<p className="text-gray-600 mb-4">
							Our senior relocation service is tailored to provide a smooth and
							comfortable transition for seniors moving to new homes or care
							facilities. We understand the emotional and physical challenges
							involved in senior moves.
						</p>
						<ul className="list-disc pl-6 text-gray-600 space-y-2">
							<li>Personalized moving plans for seniors</li>
							<li>Careful handling of personal belongings</li>
							<li>Downsizing and organization assistance</li>
							<li>Full packing and unpacking services</li>
						</ul>
					</section>

					<section className="bg-white rounded-lg shadow-md p-6">
						<h2 className="text-3xl font-bold mb-4">
							Our Senior Moving Process
						</h2>
						<div className="grid md:grid-cols-2 gap-6">
							<div>
								<h3 className="text-xl font-semibold mb-2">
									Initial Consultation
								</h3>
								<p className="text-gray-600">
									We begin with a detailed consultation to understand your
									specific needs and create a customized moving plan that
									ensures a comfortable transition.
								</p>
							</div>
							<div>
								<h3 className="text-xl font-semibold mb-2">
									Professional Moving Day
								</h3>
								<p className="text-gray-600">
									Our experienced team handles everything from packing to
									transportation with extra care and attention to detail.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
			<RelatedLocalMoving services={specialtyMovingServices} />
			<RequestQuote />
			<FAQs faqs={seniorRelocationFAQs} />
			<ServicesSection />
			<OurLocations />
		</ServiceLayout>
	);
};

export default SeniorRelocationPage;

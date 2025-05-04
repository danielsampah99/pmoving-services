import { ServiceLayout } from "@/components/ServiceLayout";
import { OurLocations } from "@/components/OurLocations";
import { RequestQuote } from "../../local-moving/residential-movers/request-quote";
import { FAQs } from "../../local-moving/residential-movers/faq";
import { RelatedLocalMoving } from "../../local-moving/residential-movers/related-services";
import { antiqueMovingQuestions } from "@/data/moving-tips";
import { specialtyMovingServices } from "@/data/services";

const AntiqueFurnitureMovingPage = () => {
	return (
		<ServiceLayout
			image="/residential-moving.webp"
			title="Antique Furniture Moving Services"
			desc="Professional and specialized moving services for your valuable antique furniture. Our expert movers handle your precious pieces with utmost care and precision."
		>
			<div className="max-w-7xl mx-auto px-4 py-12">
				<div className="space-y-8">
					{/* New Section Added */}
					<section className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-lg shadow-md p-6">
						<div className="space-y-4">
							<h2 className="text-3xl font-bold">
								Have you wanted to move antique furniture?
							</h2>
							<p className="text-gray-600 text-lg">
								We are your trusted antique furniture movers, providing:
							</p>
							<ul className="list-disc pl-6 text-gray-600 space-y-2">
								<li>Packing and unpacking services</li>
								<li>Trained professional uniformed movers</li>
								<li>Clean trucks with proper moving equipment</li>
								<li>Insured and bonded service</li>
								<li>Courteous and friendly staff</li>
								<li>Free, no-obligation moving quotes</li>
								<li>Affordable packing supplies</li>
								<li>Flexible scheduling</li>
								<li>Community rule compliance</li>
								<li>Custom routing options</li>
							</ul>
							<p className="text-gray-600 mt-4">
								Our goal is to exceed expectations by customizing services to
								your needs. Relax while we handle the heavy lifting!
							</p>
						</div>
						<img
							src="/piano-moving.webp"
							alt="Professional antique movers"
							className="rounded-lg shadow-lg object-cover h-full"
						/>
					</section>

					{/* Existing Specialized Care Section */}
					<section className="bg-white rounded-lg shadow-md p-6">
						<h2 className="text-3xl font-bold mb-4">
							Specialized Antique Moving Care
						</h2>
						<p className="text-gray-600 mb-4">
							Our antique furniture moving service is designed to provide the
							highest level of protection for your valuable and irreplaceable
							pieces. We understand that each antique item requires unique
							handling and specialized packing techniques.
						</p>
						<ul className="list-disc pl-6 text-gray-600 space-y-2">
							<li>Custom crating and padding for delicate pieces</li>
							<li>Climate-controlled transportation options</li>
							<li>Expert handling by trained antique specialists</li>
							<li>Comprehensive insurance coverage</li>
						</ul>
					</section>

					<section className="bg-white rounded-lg shadow-md p-6">
						<h2 className="text-3xl font-bold mb-4">Our Process</h2>
						<div className="grid md:grid-cols-2 gap-6">
							<div>
								<h3 className="text-xl font-semibold mb-2">
									Assessment & Planning
								</h3>
								<p className="text-gray-600">
									Our experts carefully evaluate each piece and develop a
									customized moving plan that ensures maximum protection during
									transit.
								</p>
							</div>
							<div>
								<h3 className="text-xl font-semibold mb-2">
									Professional Packing
								</h3>
								<p className="text-gray-600">
									We use premium packing materials and techniques specifically
									designed for antique furniture protection.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
			<RelatedLocalMoving services={specialtyMovingServices} />
			<RequestQuote />
			<FAQs faqs={antiqueMovingQuestions} />
			<OurLocations />
		</ServiceLayout>
	);
};

export default AntiqueFurnitureMovingPage;

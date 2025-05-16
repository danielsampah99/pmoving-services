import { ServiceLayout } from "@/components/ServiceLayout";
import { OurLocations } from "@/components/OurLocations";
import { FAQs } from "../local-moving/residential-movers/faq";
import { specialtyMovingServices } from "@/data/services";
import { RelatedLocalMoving } from "../local-moving/residential-movers/related-services";
import { RequestQuote } from "../local-moving/residential-movers/request-quote";
import { junkRemovalFAQs } from "@/data/moving-tips";
import { ServicesSection } from "@/components/ServicesSection";

const JunkRemovalPage = () => {
	return (
		<ServiceLayout
			image="/apartment-moving.webp"
			title="Professional Junk Removal Services"
			desc="Expert junk removal and disposal services for residential and commercial properties. We handle the heavy lifting and ensure proper disposal of your unwanted items."
		>
			<div className="max-w-7xl mx-auto px-4 py-12">
				<div className="space-y-8">
					{/* Service Introduction */}
					<section className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-lg shadow-md p-6">
						<div className="space-y-4">
							<h2 className="text-3xl font-bold">
								Professional Junk Removal Solutions
							</h2>
							<p className="text-gray-600 text-lg">
								We provide comprehensive junk removal services for homes and
								businesses:
							</p>
							<ul className="list-disc pl-6 text-gray-600 space-y-2">
								<li>Residential cleanouts</li>
								<li>Commercial property cleanouts</li>
								<li>Construction debris removal</li>
								<li>Furniture and appliance disposal</li>
								<li>Estate cleanouts</li>
								<li>Garage and basement cleanups</li>
								<li>Yard waste removal</li>
							</ul>
							<p className="text-gray-600 mt-4">
								Our experienced team is equipped with the right tools and
								vehicles to handle any size job efficiently and responsibly.
							</p>
						</div>
						<img
							src="/office-moving.webp"
							alt="Junk Removal Services"
							className="rounded-lg shadow-lg object-cover h-full"
						/>
					</section>

					{/* Service Features */}
					<section className="bg-white rounded-lg shadow-md p-6">
						<h2 className="text-3xl font-bold mb-4">
							Why Choose Our Junk Removal Services
						</h2>
						<div className="grid md:grid-cols-2 gap-6">
							<div>
								<h3 className="text-xl font-semibold mb-2">
									Eco-Friendly Disposal
								</h3>
								<p className="text-gray-600">
									We prioritize environmentally responsible disposal methods,
									recycling and donating items whenever possible to minimize
									landfill impact.
								</p>
							</div>
							<div>
								<h3 className="text-xl font-semibold mb-2">
									Professional Service
								</h3>
								<p className="text-gray-600">
									Our trained team provides efficient, courteous service and
									ensures your property is left clean after removal.
								</p>
							</div>
						</div>
					</section>

					{/* Process Section */}
					<section className="bg-white rounded-lg shadow-md p-6">
						<h2 className="text-3xl font-bold mb-4">Our Process</h2>
						<div className="grid md:grid-cols-3 gap-6">
							<div className="space-y-2">
								<h3 className="text-xl font-semibold">1. Assessment</h3>
								<p className="text-gray-600">
									We evaluate your junk removal needs and provide a clear,
									upfront quote.
								</p>
							</div>
							<div className="space-y-2">
								<h3 className="text-xl font-semibold">2. Removal</h3>
								<p className="text-gray-600">
									Our team efficiently removes all items, taking care not to
									damage your property.
								</p>
							</div>
							<div className="space-y-2">
								<h3 className="text-xl font-semibold">3. Clean Finish</h3>
								<p className="text-gray-600">
									We clean the area and ensure proper disposal of all items.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>

			{/* Commitment to Sustainability */}
			<section className="bg-white rounded-lg shadow-md p-6 mt-8">
				<h2 className="text-3xl font-bold mb-4">
					Our Environmental Commitment
				</h2>
				<div className="space-y-4">
					<p className="text-gray-600">
						We're committed to responsible waste management and environmental
						stewardship:
					</p>
					<ul className="list-disc pl-6 text-gray-600 space-y-2">
						<li>Partnering with local recycling facilities</li>
						<li>Donating reusable items to charities</li>
						<li>Proper disposal of electronic waste</li>
						<li>Minimizing landfill impact</li>
						<li>Supporting local green initiatives</li>
					</ul>
				</div>
			</section>

			<RelatedLocalMoving services={specialtyMovingServices} />
			<RequestQuote />
			<FAQs faqs={junkRemovalFAQs} />
			<ServicesSection />
			<OurLocations />
		</ServiceLayout>
	);
};

export default JunkRemovalPage;

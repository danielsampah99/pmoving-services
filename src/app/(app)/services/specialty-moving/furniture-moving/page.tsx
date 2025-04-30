import { ServiceLayout } from "@/components/ServiceLayout";
import { OurLocations } from "@/components/OurLocations";
import { RequestQuote } from "../../local-moving/residential-movers/request-quote";
import { FAQs } from "../../local-moving/residential-movers/faq";
import { RelatedLocalMoving } from "../../local-moving/residential-movers/related-services";
import { furnitureMovingFAQs } from "@/data/moving-tips";
import { specialtyMovingServices } from "@/data/services";

const FurnitureMovingPage = () => {
	return (
		<ServiceLayout
			image="/residential.jpg"
			title="Professional Furniture Moving Services"
			desc="Expert furniture moving services with careful handling and protection. Our skilled team ensures your furniture arrives safely at its destination."
		>
			<div className="max-w-7xl mx-auto px-4 py-12">
				<div className="space-y-8">
					{/* New Service Introduction Section */}
					<section className="bg-white rounded-lg shadow-md p-6">
						<div className="grid md:grid-cols-2 gap-8 items-center">
							<div className="space-y-4">
								<h2 className="text-3xl font-bold">
									Furniture Delivery & Assembly Solutions
								</h2>
								<p className="text-gray-600">
									Have you ever ordered furniture and been unable to have it delivered or assembled? 
									We personalize our services to fit every unique need, filling the gap left by 
									retailers like Costco, Sam's Club, and IKEA.
								</p>
								<p className="text-gray-600">
									Our team handles pickup, delivery, and assembly - whether you're short on time 
									or need expert assistance. We're committed to professional service with 
									exceptional care.
								</p>
								
								<h3 className="text-xl font-semibold pt-4">
									Why Choose Our Furniture Services:
								</h3>
								<ul className="list-disc pl-6 text-gray-600 space-y-2">
									<li>Complete packing/unpacking services</li>
									<li>Trained uniformed professionals</li>
									<li>Fully equipped clean vehicles</li>
									<li>Insured and bonded service</li>
									<li>Free no-obligation quotes</li>
									<li>Flexible scheduling options</li>
									<li>Community rule compliance</li>
								</ul>
							</div>
							<img 
								src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/Sectional+cloth+sofa-1920w.JPG"
								alt="Furniture delivery team"
								className="rounded-lg object-cover h-full"
							/>
						</div>
						
						<p className="text-gray-600 mt-6">
							Our goal is to exceed expectations by customizing services to your needs. 
							Sit back and relax while we handle the heavy lifting!
						</p>
					</section>

					{/* Existing Furniture Moving Solutions Section */}
					<section className="bg-white rounded-lg shadow-md p-6">
						<h2 className="text-3xl font-bold mb-4">
							Comprehensive Furniture Moving Solutions
						</h2>
						<p className="text-gray-600 mb-4">
							Our furniture moving service is designed to provide complete
							protection and care for your valuable pieces. We use
							industry-leading techniques and equipment to ensure safe
							transportation.
						</p>
						<ul className="list-disc pl-6 text-gray-600 space-y-2">
							<li>Professional wrapping and padding for all furniture</li>
							<li>Specialized equipment for heavy and bulky items</li>
							<li>Experienced moving crews</li>
							<li>Full insurance coverage</li>
						</ul>
					</section>

					<section className="bg-white rounded-lg shadow-md p-6">
						<h2 className="text-3xl font-bold mb-4">Our Moving Process</h2>
						<div className="grid md:grid-cols-2 gap-6">
							<div>
								<h3 className="text-xl font-semibold mb-2">
									Initial Assessment
								</h3>
								<p className="text-gray-600">
									We carefully evaluate your furniture and create a detailed
									moving plan to ensure efficient and safe transportation.
								</p>
							</div>
							<div>
								<h3 className="text-xl font-semibold mb-2">Expert Handling</h3>
								<p className="text-gray-600">
									Our trained professionals use proper techniques and equipment
									to protect your furniture during the entire moving process.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
			<RelatedLocalMoving services={specialtyMovingServices} />
			<RequestQuote />
			<FAQs faqs={furnitureMovingFAQs} />
			<OurLocations />
		</ServiceLayout>
	);
};

export default FurnitureMovingPage;

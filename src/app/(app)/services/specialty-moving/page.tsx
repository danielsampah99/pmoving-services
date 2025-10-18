import { ServiceLayout } from "@/components/ServiceLayout";
import { OurLocations } from "@/components/OurLocations";
import { RequestQuote } from "../local-moving/residential-movers/request-quote";
import { FAQs } from "../local-moving/residential-movers/faq";
import { RelatedLocalMoving } from "../local-moving/residential-movers/related-services";
import { ServicesSection } from "@/components/ServicesSection";
import { specialtyMovingServices } from "@/data/services";
import { specialtyMovingFAQs } from "@/data/moving-tips";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Specialty Moving Solutions for Stress-Free Moving",
	description: "Promising specialty furniture movers offering relocation assistance, labor-only moving services, furniture delivery and assembly, customized solutions and more."
}

const SpecialtyMovingPage = () => {
	return (
		<ServiceLayout
			image="/api/media/file/specialty-moving-statues.webp"
			title="Specialty Moving Services"
			desc="Expert moving solutions for unique and valuable items. Our specialized services ensure safe handling of antiques, pianos, safes, and more."
		>
			<div className="max-w-7xl mx-auto px-4 py-12">
				<div className="space-y-8">
					{/* Service Introduction */}
					<section className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-lg shadow-md p-6">
						<div className="space-y-4">
							<h2 className="text-3xl font-bold">
								Specialized Moving Solutions
							</h2>
							<p className="text-gray-600 text-lg">
								We offer comprehensive specialty moving services for items that
								require extra care and expertise:
							</p>
							<ul className="list-disc pl-6 text-gray-600 space-y-2">
								<li>Antique and valuable furniture</li>
								<li>Gun safes and heavy equipment</li>
								<li>Senior relocation assistance</li>
								<li>Labor-only moving services</li>
								<li>Loading and unloading services</li>
								<li>Furniture delivery and assembly</li>
							</ul>
							<p className="text-gray-600 mt-4">
								Our experienced team is equipped with specialized tools and
								knowledge to handle your unique moving needs with the utmost
								care and precision.
							</p>
						</div>
						<img
							src="/piano-moving.webp"
							alt="Specialty Moving Services"
							className="rounded-lg shadow-lg object-cover h-full"
						/>
					</section>

					{/* Service Features */}
					<section className="bg-white rounded-lg shadow-md p-6">
						<h2 className="text-3xl font-bold mb-4">
							Why Choose Our Specialty Moving Services
						</h2>
						<div className="grid md:grid-cols-2 gap-6">
							<div>
								<h3 className="text-xl font-semibold mb-2">Expert Handling</h3>
								<p className="text-gray-600">
									Our trained professionals understand the unique requirements
									of specialty items and use appropriate techniques and
									equipment for safe handling.
								</p>
							</div>
							<div>
								<h3 className="text-xl font-semibold mb-2">
									Customized Solutions
								</h3>
								<p className="text-gray-600">
									We develop personalized moving plans tailored to your specific
									items and requirements, ensuring maximum protection and
									efficiency.
								</p>
							</div>
						</div>
					</section>

					{/* Additional Services */}
					<section className="bg-white rounded-lg shadow-md p-6">
						<h2 className="text-3xl font-bold mb-4">Our Commitment</h2>
						<p className="text-gray-600 mb-4">
							We understand that specialty items often hold significant value,
							both monetary and sentimental. Our commitment to excellence
							includes:
						</p>
						<ul className="list-disc pl-6 text-gray-600 space-y-2">
							<li>Comprehensive insurance coverage</li>
							<li>Specialized packing materials and techniques</li>
							<li>Experienced and trained moving specialists</li>
							<li>Careful documentation and inventory management</li>
							<li>Climate-controlled transportation when needed</li>
						</ul>
					</section>
				</div>
			</div>
			<RelatedLocalMoving services={specialtyMovingServices} />
			<RequestQuote />
			<FAQs faqs={specialtyMovingFAQs} />
			<ServicesSection />
			<OurLocations />
		</ServiceLayout>
	);
};

export default SpecialtyMovingPage;

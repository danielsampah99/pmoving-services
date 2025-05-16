import { OurLocations } from "@/components/OurLocations";
import { ServiceLayout } from "@/components/ServiceLayout";
import { Info } from "lucide-react";
import { FAQs } from "../../local-moving/residential-movers/faq";
import { frequentQuestions } from "@/data/moving-tips";
import { RequestQuote } from "../../local-moving/residential-movers/request-quote";
import { RelatedServices } from "../related-services";
import { commercialMovingServices } from "@/data/services";
import { ServicesSection } from "@/components/ServicesSection";

const CorporateRelocation = () => {
	return (
		<ServiceLayout
			image="/corporate-moving.webp"
			title="Corporate Relocation Services"
			desc="Professional corporate relocation solutions ensuring smooth transitions for businesses and employees."
		>
			<div className="py-12 px-4">
				<div className="max-w-7xl mx-auto space-y-12">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="rounded-lg overflow-hidden p-4 sm:p-6">
							<h1 className="text-4xl font-bold mb-2 sm:mb-4">
								Corporate Relocation Services
							</h1>
							<p className="text-background text-lg sm:text-xl mb-4 sm:mb-6">
								Streamlined business transitions across Minnesota
							</p>
							<div className="relative">
								<img
									src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/office-moving-1920w.jpg"
									alt="Corporate Relocation Services"
									className="w-full rounded-lg max-h-[700px] object-cover"
								/>
							</div>
						</div>

						<div className="flex flex-col justify-center space-y-3">
							<div className="flex items-center space-x-2 text-background">
								<Info className="w-6 h-6" />
								<h2 className="text-xl md:text-2xl font-bold">
									Comprehensive Relocation Solutions
								</h2>
							</div>
							<p className="text-background">
								We provide end-to-end corporate relocation services designed to
								minimize business disruption and maximize efficiency.
							</p>
							<p className="text-gray-700">
								Our experienced team handles every aspect of your corporate move
								with precision and professionalism.
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>Complete office and employee relocation management</li>
								<li>Secure handling of sensitive documents and equipment</li>
								<li>Customized moving timeline and logistics planning</li>
								<li>Employee relocation assistance programs</li>
								<li>Storage solutions during transition</li>
								<li>International relocation coordination</li>
							</ul>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="space-y-4">
							<h2 className="text-xl md:text-2xl font-bold">
								Expert Corporate Relocation Services
							</h2>
							<p className="text-gray-700">
								Our corporate relocation services are tailored to meet the
								unique needs of businesses and their employees. We understand
								the complexities involved in corporate moves and provide
								comprehensive solutions to ensure a smooth transition.
							</p>
							<p className="text-gray-700">
								With years of experience in corporate relocations, we've
								developed efficient systems to handle moves of any scale, from
								single employee transfers to complete office relocations.
							</p>

							<h2 className="text-xl md:text-2xl font-bold pt-6">
								Our Corporate Moving Process
							</h2>
							<p className="text-gray-700">
								We follow a comprehensive approach to ensure your corporate
								relocation is executed flawlessly:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>Initial consultation and needs assessment</li>
								<li>Customized relocation strategy development</li>
								<li>Detailed timeline and logistics planning</li>
								<li>Professional packing and inventory management</li>
								<li>Secure transportation and delivery</li>
								<li>Setup and installation at new location</li>
							</ul>
						</div>

						<div className="rounded-lg overflow-hidden h-full">
							<img
								className="w-full h-auto rounded-lg object-cover"
								src="/moving-process.webp"
								alt="Corporate Moving Process"
							/>
						</div>
					</div>
				</div>
			</div>
			<RelatedServices services={commercialMovingServices} />
			<RequestQuote />
			<FAQs faqs={frequentQuestions} />
			<ServicesSection />
			<OurLocations />
		</ServiceLayout>
	);
};

export default CorporateRelocation;

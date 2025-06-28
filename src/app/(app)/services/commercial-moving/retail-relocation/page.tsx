import { ServiceLayout } from "@/components/ServiceLayout";
import { Info } from "lucide-react";
import { FAQs } from "../../local-moving/residential-movers/faq";
import { frequentQuestions } from "@/data/moving-tips";
import { RequestQuote } from "../../local-moving/residential-movers/request-quote";
import { RelatedServices } from "../related-services";
import { commercialMovingServices } from "@/data/services";
import { OurLocations } from "@/components/OurLocations";
import { ServicesSection } from "@/components/ServicesSection";

const RetailRelocation = () => {
	return (
		<ServiceLayout
			image="/api/media/file/retail-relocation.webp"
			title="Retail Relocation Services"
			desc="Professional retail relocation solutions ensuring seamless transitions for retail businesses."
		>
			<div className="py-12 px-4">
				<div className="max-w-7xl mx-auto space-y-12">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="rounded-lg overflow-hidden p-4 sm:p-6">
							<h1 className="text-4xl font-bold mb-2 sm:mb-4">
								Retail Relocation Services
							</h1>
							<p className="text-background text-lg sm:text-xl mb-4 sm:mb-6">
								Efficient retail store transitions across Minnesota
							</p>
							<div className="relative">
								<img
									src="/api/media/file/retail-display-shelf.webp"
									alt="Retail Relocation Services"
									className="w-full rounded-lg max-h-[700px] object-cover"
								/>
							</div>
						</div>

						<div className="flex flex-col justify-center space-y-3">
							<div className="flex items-center space-x-2 text-background">
								<Info className="w-6 h-6" />
								<h2 className="text-xl md:text-2xl font-bold">
									What is Retail Relocation?
								</h2>
							</div>
							<p className="text-background">
								The clients at our retail moving company understand that
								planning is everything. There are a lot of equipment, boxes, and
								inventory that need to move between retail stores.
							</p>
							<p className="text-gray-700">
								Any missing inventory or products can be a massive headache, and
								employees usually don't want to do forced heavy labour. The
								planning and logistics to carry over tens of thousands of units
								can be done with our crews.
							</p>
							<p className="text-gray-700">
								Our Minneapolis/St. Paul based movers offer retail relocation
								services to companies both big and small. Our moving
								professionals assist in all planning stages and handle
								loading/unloading on move day.
							</p>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="space-y-4">
							<h2 className="text-xl md:text-2xl font-bold">
								Expert Retail Moving Services
							</h2>
							<p className="text-gray-700">
								Our retail relocation services are tailored to meet the unique
								needs of retail businesses. We understand the importance of
								minimizing disruption to your operations and ensuring your
								merchandise arrives safely.
							</p>
							<p className="text-gray-700">
								With years of experience in retail relocations, we've developed
								efficient systems to handle moves of any scale, from small
								boutiques to large retail chains.
							</p>

							<h2 className="text-xl md:text-2xl font-bold pt-6">
								Our Retail Moving Process
							</h2>
							<p className="text-gray-700">
								We follow a systematic approach to ensure your retail relocation
								is executed perfectly:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>Initial site survey and planning</li>
								<li>Custom relocation strategy development</li>
								<li>Detailed inventory management</li>
								<li>Professional packing and labeling</li>
								<li>Secure transportation</li>
								<li>Store setup and fixture installation</li>
							</ul>
						</div>

						<div className="rounded-lg overflow-hidden h-full">
							<img
								className="w-full h-auto rounded-lg object-cover"
								src="/moving-process.webp"
								alt="Retail Moving Process"
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

export default RetailRelocation;

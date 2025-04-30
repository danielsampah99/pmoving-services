import { ServiceLayout } from "@/components/ServiceLayout";
import { Info } from "lucide-react";
import React from "react";
import { FAQs } from "../../local-moving/residential-movers/faq";
import { frequentQuestions } from "@/data/moving-tips";
import { RequestQuote } from "../../local-moving/residential-movers/request-quote";
import { RelatedServices } from "../related-services";
import { commercialMovingServices } from "@/data/services";
import { OurLocations } from "@/components/OurLocations";

const OfficeMovers = () => {
	return (
		<ServiceLayout
			image="/office-moving.webp"
			title="Office Moving Services"
			desc="Professional office relocation services ensuring minimal business disruption and maximum efficiency."
		>
			<div className="py-12 px-4">
				<div className="max-w-7xl mx-auto space-y-12">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="rounded-lg overflow-hidden p-4 sm:p-6">
							<h1 className="text-4xl font-bold mb-2 sm:mb-4">
								Professional Office Moving
							</h1>
							<p className="text-background text-lg sm:text-xl mb-4 sm:mb-6">
								Trusted commercial movers in Minnesota
							</p>
							<div className="relative">
							<img
								className="w-full h-auto rounded-lg object-cover"
								src="/moving-process.webp"
								alt="Office Moving Process"
							/>
							</div>
						</div>

						<div className="flex flex-col justify-center space-y-3">
							<div className="flex items-center space-x-2 text-background">
								<Info className="w-6 h-6" />
								<h2 className="text-xl md:text-2xl font-bold">
									What are Office Movers?
								</h2>
							</div>
							<p className="text-background">
								Our Minneapolis/St. Paul office movers are trained to quickly and safely 
								move business furniture, equipment, and sensitive file systems.
							</p>
							<p className="text-gray-700">
								Moving exposes valuable equipment to loss and damage, but our professional 
								commercial movers help you organize, plan, and execute your office move 
								while limiting risks.
							</p>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="space-y-4">
							<h2 className="text-xl md:text-2xl font-bold">
								Why Hire Office Movers?
							</h2>
							<p className="text-gray-700">
								Our professional moving crews will work with great speed and agility to pack 
								and load your Office items, maximizing the capacity of the moving containers 
								and the moving truck.
							</p>
							<p className="text-gray-700">
								Both time and space will be saved when utilizing the skill and experience 
								of your hired movers.
							</p>
							<p className="text-gray-700">
								Another factor that guarantees a successful outcome of your move when you 
								take advantage of our services is the advanced equipment we use in our 
								relocation process.
							</p>

							<h2 className="text-xl md:text-2xl font-bold pt-6">
								Our Commercial Moving Process
							</h2>
							<p className="text-gray-700">
								We follow a systematic approach to ensure your office move is
								executed perfectly:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>Detailed pre-move planning and assessment</li>
								<li>Custom packing and labeling system</li>
								<li>Coordinated moving schedule</li>
								<li>Professional installation at new location</li>
								<li>Post-move support and cleanup</li>
							</ul>
						</div>

						<div className="rounded-lg overflow-hidden h-full">
							<img
								className="w-full h-auto rounded-lg object-cover"
								src="/moving-process.webp"
								alt="Office Moving Process"
							/>
						</div>
					</div>
				</div>
			</div>
			<RelatedServices services={commercialMovingServices} />
			<RequestQuote />
			<FAQs faqs={frequentQuestions} />
			<OurLocations />
		</ServiceLayout>
	);
};

export default OfficeMovers;

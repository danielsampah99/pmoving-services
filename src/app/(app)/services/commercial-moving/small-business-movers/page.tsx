import { ServiceLayout } from "@/components/ServiceLayout";
import { Info } from "lucide-react";
import { FAQs } from "../../local-moving/residential-movers/faq";
import { frequentQuestions } from "@/data/moving-tips";
import { RequestQuote } from "../../local-moving/residential-movers/request-quote";
import { RelatedServices } from "../related-services";
import { commercialMovingServices } from "@/data/services";
import { OurLocations } from "@/components/OurLocations";

const SmallBusinessMovers = () => {
	return (
		<ServiceLayout
			image="/residential-moving.webp"
			title="Small Business Moving Services"
			desc="Reliable and efficient moving solutions tailored for small businesses"
		>
			{/* Trusted Brands Section */}

			<div className="py-12 px-4">
				<div className="max-w-7xl mx-auto space-y-12">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="rounded-lg overflow-hidden p-4 sm:p-6">
							<h1 className="text-4xl font-bold mb-2 sm:mb-4">
								Small Business Moving Solutions
							</h1>
							<p className="text-background text-lg sm:text-xl mb-4 sm:mb-6">
								Expert moving services for small businesses in Minnesota
							</p>
							<div className="relative">
								<img
									src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/office-moving-1920w.jpg"
									alt="Small Business Moving Services"
									className="w-full rounded-lg max-h-[700px] object-cover"
								/>
							</div>
						</div>
						<div className="flex flex-col justify-center space-y-3">
							<div className="flex items-center space-x-2 text-background">
								<Info className="w-6 h-6" />
								<h2 className="text-xl md:text-2xl font-bold">
									What is Small Business Moving?
								</h2>
							</div>
							<p className="text-background">
								As small business movers, we make relocations organized,
								seamless, and FAST! Our goal is to get you moved and back to
								business quickly.
							</p>
							<p className="text-gray-700">
								We handle more than just furniture and fixtures - our executive
								relocation services work for local, statewide, national, and
								international moves.
							</p>
							{/* Removed duplicate paragraph */}
							<p className="text-gray-700">
								Our experienced team ensures a smooth transition with minimal
								disruption to your business operations.
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>Flexible scheduling options</li>
								<li>Careful handling of equipment and inventory</li>
								<li>Efficient packing and unpacking services</li>
								<li>Storage solutions if needed</li>
								<li>Professional project management</li>
							</ul>
						</div>{" "}
						{/* Properly closed container div */}
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="space-y-4">
							<h2 className="text-xl md:text-2xl font-bold">
								Our Small Business Moving Process
							</h2>
							<p className="text-gray-700">
								We follow a systematic approach to ensure your business
								relocation is executed perfectly:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>Initial consultation and needs assessment</li>
								<li>Customized moving plan development</li>
								<li>Professional packing and labeling</li>
								<li>Safe transportation of all items</li>
								<li>Setup at new location</li>
								<li>Post-move support</li>
							</ul>
						</div>

						<div className="rounded-lg overflow-hidden h-full">
							<img
								className="w-full h-auto rounded-lg object-cover"
								src="/moving-process.webp"
								alt="Small Business Moving Process"
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

export default SmallBusinessMovers;

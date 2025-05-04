import { ServiceLayout } from "@/components/ServiceLayout";
import { Info } from "lucide-react";
import { FAQs } from "../../local-moving/residential-movers/faq";
import { longDistanceQuestions } from "@/data/moving-tips";
import { RequestQuote } from "../../local-moving/residential-movers/request-quote";
import { RelatedMovingServices } from "../related-services";
import { longDistanceMovingServices } from "@/data/services";
import { OurLocations } from "@/components/OurLocations";

const LongDistanceCommercial = () => {
	return (
		<ServiceLayout
			image="/residential-moving.webp"
			title="Long Distance Commercial Moving"
			desc="Professional cross-country commercial moving services with expert logistics and business continuity planning."
		>
			<div className="py-12 px-4">
				<div className="max-w-7xl mx-auto space-y-12">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="rounded-lg overflow-hidden">
							<div className="relative group cursor-pointer overflow-hidden rounded-lg mb-6">
								<div className="aspect-w-16 aspect-h-9">
									<img
										src="/moving-process.webp"
										alt="Commercial Moving Solutions"
										className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
									/>
								</div>
							</div>
						</div>

						<div className="flex flex-col justify-center space-y-3">
							<div className="flex items-center space-x-2 text-background">
								<Info className="w-6 h-6" />
								<h2 className="text-xl md:text-2xl font-bold">
									Commercial Moving Specialists
								</h2>
							</div>
							<p className="text-background">
								Premium Moving Services excels in long-distance commercial
								relocations, providing comprehensive solutions for businesses of
								all sizes.
							</p>
							<p className="text-gray-700">
								Our team understands the complexities of commercial moves and
								ensures minimal disruption to your business operations during
								the transition.
							</p>
							<p className="font-semibold text-gray-800 mt-4">
								Our commercial moving services include:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>Office furniture and equipment relocation</li>
								<li>IT and electronics moving</li>
								<li>Secure document and file transfer</li>
								<li>Warehouse and inventory relocation</li>
								<li>Project management and coordination</li>
								<li>Business continuity planning</li>
							</ul>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="space-y-4">
							<h2 className="text-xl md:text-2xl font-bold">
								Long Distance Commercial Movers Near You
							</h2>
							<p className="text-gray-700">
								Premium Moving Services sets ourselves apart with our dedication
								to ensuring quality service coupled with safety and efficiency
								at the fore-front for your commercial long distance move.
							</p>
							<p className="text-gray-700">
								We offer flexibility for each project and can meet your needs
								whatever they may be.
							</p>

							<p className="font-semibold text-gray-800 mt-4">
								Through our relationship from start to finish you can expect:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>Courteous, friendly, and professional service</li>
								<li>
									Experienced and trained movers that adapt to any situation
								</li>
								<li>Comprehensive packing and unpacking services</li>
								<li>Scheduling around your business hours</li>
								<li>Community-focused safety and efficiency</li>
							</ul>

							<p className="text-gray-700 mt-4">
								We strive to exceed expectations through our adaptability and
								flexibility in every commercial relocation project.
							</p>

							<h2 className="text-xl md:text-2xl font-bold">
								Our Commercial Moving Process
							</h2>
							<p className="text-gray-700">
								We follow a systematic approach to ensure your commercial move
								is executed with precision:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>Comprehensive site survey and needs assessment</li>
								<li>Detailed moving plan and timeline development</li>
								<li>Asset inventory and tracking system</li>
								<li>Professional packing and labeling</li>
								<li>Specialized equipment handling</li>
								<li>Post-move setup and verification</li>
							</ul>
						</div>

						<div className="rounded-lg overflow-hidden h-full">
							<img
								className="w-full h-auto max-h-[800px] rounded-lg object-contain"
								src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/U+shape+desk+-092cc8d0-1920w.JPG"
								alt="Commercial Moving Team"
							/>
						</div>
					</div>
				</div>
			</div>

			<RelatedMovingServices services={longDistanceMovingServices} />
			<RequestQuote />
			<FAQs faqs={longDistanceQuestions} />
			<OurLocations />
		</ServiceLayout>
	);
};

export default LongDistanceCommercial;

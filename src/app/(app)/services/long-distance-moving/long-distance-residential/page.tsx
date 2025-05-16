import { ServiceLayout } from "@/components/ServiceLayout";
import { Info } from "lucide-react";
import { FAQs } from "../../local-moving/residential-movers/faq";
import { longDistanceQuestions } from "@/data/moving-tips";
import { RequestQuote } from "../../local-moving/residential-movers/request-quote";
import { RelatedMovingServices } from "../related-services";
import { longDistanceMovingServices } from "@/data/services";
import { OurLocations } from "@/components/OurLocations";
import { ServicesSection } from "@/components/ServicesSection";

const LongDistanceResidential = () => {
	return (
		<ServiceLayout
			image="/residential-moving.webp"
			title="Long Distance Residential Moving"
			desc="Professional cross-country residential moving services with expert care and attention to detail."
		>
			<div className="py-12 px-4">
				<div className="max-w-7xl mx-auto space-y-12">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="rounded-lg overflow-hidden">
							<div className="relative group cursor-pointer overflow-hidden rounded-lg mb-6">
								<div className="aspect-w-16 aspect-h-9">
									<img
										src="/moving-process.webp"
										alt="Long Distance Moving Guide"
										className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
									/>
								</div>
							</div>
						</div>

						<div className="flex flex-col justify-center space-y-3">
							<div className="flex items-center space-x-2 text-background">
								<Info className="w-6 h-6" />
								<h2 className="text-xl md:text-2xl font-bold">
									Long Distance Home Moving Experts
								</h2>
							</div>
							<p className="text-background">
								Premium Moving Services specializes in long-distance residential
								moves, ensuring a seamless transition to your new home across
								state lines.
							</p>
							<p className="text-gray-700">
								We understand that long-distance moves require extra care and
								planning, which is why we offer comprehensive services tailored
								to your needs.
							</p>
							<p className="font-semibold text-gray-800 mt-4">
								Our long-distance residential moving services include:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>Detailed moving plan and timeline</li>
								<li>Professional packing and unpacking services</li>
								<li>Secure transportation with GPS tracking</li>
								<li>Climate-controlled storage solutions</li>
								<li>Furniture disassembly and reassembly</li>
								<li>Dedicated move coordinator</li>
							</ul>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="space-y-4">
							<h2 className="text-xl md:text-2xl font-bold">
								Why Choose Us for Long Distance Moving?
							</h2>

							<p className="text-gray-700">
								Premium Moving Services sets ourselves apart with our dedication
								to ensuring quality service coupled with safety and efficiency
								at the fore-front for your long distance residential needs.
							</p>
							<p className="text-gray-700">
								We offer flexibility for each project and can meet your needs
								whatever they may be.
							</p>
							<p className="font-semibold text-gray-800">
								Through our relationship from start to finish you can expect:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>Courteous, friendly, and professional service</li>
								<li>
									Experienced and trained movers that can adapt to any situation
								</li>
								<li>Packing and unpacking services</li>
								<li>Convenience to work around your schedule</li>
								<li>Safety, efficiency, and respect for communities</li>
							</ul>
							<p className="text-gray-700">
								In any project we strive to exceed any expectations through our
								adaptability and flexibility.
							</p>

							{/* Existing Process Section */}
							<h2 className="text-xl md:text-2xl font-bold">
								Our Long Distance Moving Process
							</h2>
							<p className="text-gray-700">
								We follow a systematic approach to ensure your long-distance
								move is executed flawlessly:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>Initial consultation and detailed quote</li>
								<li>Custom moving plan development</li>
								<li>Professional packing and inventory</li>
								<li>Secure loading and transportation</li>
								<li>Coordinated delivery and unpacking</li>
								<li>Final walkthrough and satisfaction check</li>
							</ul>
						</div>

						<div className="rounded-lg overflow-hidden h-full">
							<img
								className="w-full h-auto max-h-[800px] rounded-lg object-contain"
								src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/26-+moving+truck+en+route+-1920w.JPG"
								alt="Long Distance Movers"
							/>
						</div>
					</div>
				</div>
			</div>
			<RelatedMovingServices services={longDistanceMovingServices} />
			<RequestQuote />
			<FAQs faqs={longDistanceQuestions} />
			<ServicesSection />
			<OurLocations />
		</ServiceLayout>
	);
};

export default LongDistanceResidential;

import { ServiceLayout } from "@/components/ServiceLayout";
import { Info } from "lucide-react";
import {
	internationalMovingFAQs,
	internationalMovingProcess,
} from "@/data/moving-tips";
import { RelatedMovingServices } from "../long-distance-moving/related-services";
import { longDistanceMovingServices } from "@/data/services";
import { OurLocations } from "@/components/OurLocations";
import { RequestQuote } from "../local-moving/residential-movers/request-quote";
import { FAQs } from "../local-moving/residential-movers/faq";
import { ServicesSection } from "@/components/ServicesSection";
import { Metadata } from "next";
import { BASE_URL } from "@/utils";

export const metadata: Metadata = {
	title: "Moving Company Near Me for International Moving Services",
	description:
		"Move your essential internationally with one of the best cross country moving companies. Get global storage solutions and door-to-door international shipping.",
	openGraph: {
		title: "Moving Company Near Me for International Moving Services",
		description:
			"Move your essential internationally with one of the best cross country moving companies. Get global storage solutions and door-to-door international shipping.",
		type: "website",
		url: `${BASE_URL}/services/international-moving`,
		images: [
			{
				url: `${BASE_URL}/api/media/file/Moving%20labour.webp`,
				width: 1200,
				height: 630,
				alt: "A team of professional movers doing manual labor",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Moving Company Near Me for International Moving Services",
		description:
			"Move your essential internationally with one of the best cross country moving companies. Get global storage solutions and door-to-door international shipping.",
		images: [`${BASE_URL}/api/media/file/Moving%20labour.webp`],
	},
};

const InternationalMoving = () => {
	return (
		<ServiceLayout
			image="/long-distance-moving.webp"
			title="International Moving Services"
			desc="Professional international relocation services ensuring secure and efficient overseas moves with comprehensive logistics support."
		>
			<div className="py-12 px-4">
				<div className="max-w-7xl mx-auto space-y-12">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="rounded-lg overflow-hidden">
							<div className="relative group cursor-pointer overflow-hidden rounded-lg mb-6">
								<div className="aspect-w-16 aspect-h-9">
									<img
										src="/moving-process.webp"
										alt="International Moving Solutions"
										className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
									/>
								</div>
							</div>
						</div>

						<div className="flex flex-col justify-center space-y-3">
							<div className="flex items-center space-x-2 text-background">
								<Info className="w-6 h-6" />
								<h2 className="text-xl md:text-2xl font-bold">
									International Moving Specialists
								</h2>
							</div>
							<p className="text-background">
								Premium Moving Services excels in international relocations,
								providing comprehensive solutions for both residential and
								commercial moves worldwide.
							</p>
							<p className="text-gray-700">
								Our team understands the complexities of international moves and
								ensures a smooth transition to your new country.
							</p>
							<p className="font-semibold text-gray-800 mt-4">
								Our international moving services include:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>Door-to-door international shipping</li>
								<li>Custom crating and packing</li>
								<li>International documentation assistance</li>
								<li>Customs clearance support</li>
								<li>Global logistics coordination</li>
								<li>Storage solutions worldwide</li>
							</ul>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="space-y-4">
							<h2 className="text-xl md:text-2xl font-bold">
								Why Choose Our International Moving Services?
							</h2>
							<p className="text-gray-700">
								Moving internationally requires extensive planning, expertise,
								and attention to detail. Our experienced team handles all
								aspects of your international move with precision and care.
							</p>
							<p className="text-gray-700">
								We coordinate with global partners to ensure seamless
								transitions across borders and continents.
							</p>

							<p className="font-semibold text-gray-800 mt-4">
								Our international moving process includes:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>Detailed pre-move consultation</li>
								<li>Custom packing for international transport</li>
								<li>Documentation and customs guidance</li>
								<li>International shipping coordination</li>
								<li>Destination services and setup</li>
								<li>Global tracking and support</li>
							</ul>

							<p className="text-gray-700 mt-4">
								We strive to make your international move as smooth and
								stress-free as possible, handling all the complex details while
								you focus on your new adventure.
							</p>
						</div>

						<div className="rounded-lg overflow-hidden h-full">
							<img
								className="w-full h-auto max-h-[800px] rounded-lg object-cover"
								src="/residential-moving.webp"
								alt="International Moving Process"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Added Process Timeline */}
			<div className="py-12 px-4">
				<div className="max-w-7xl mx-auto">
					<h2 className="text-3xl font-bold text-center mb-12">
						Your International Moving Journey
					</h2>
					<div className="relative">
						<div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-background" />
						<div className="space-y-12">
							{internationalMovingProcess.map((step, index) => {
								const mappingIndex = `step-${index}`;

								return (
									<div
										key={mappingIndex}
										className={`flex ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center`}
									>
										<div className="flex-1 p-6 bg-white rounded-lg shadow-md">
											<h3 className="text-xl font-semibold mb-2">
												{step.title}
											</h3>
											<p className="text-gray-600">{step.description}</p>
										</div>
										<div className="hidden md:block w-16 relative">
											<div className="absolute left-1/2 transform -translate-x-1/2 size-4 bg-moving-gray rounded-full" />
										</div>
										<div className="flex-1" />
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>

			<RelatedMovingServices services={longDistanceMovingServices} />
			<RequestQuote />
			<FAQs faqs={internationalMovingFAQs} />
			<ServicesSection />
			<OurLocations />
		</ServiceLayout>
	);
};

export default InternationalMoving;

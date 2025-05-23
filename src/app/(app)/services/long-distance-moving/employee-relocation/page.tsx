import { ServiceLayout } from "@/components/ServiceLayout";
import { Info } from "lucide-react";
import { FAQs } from "../../local-moving/residential-movers/faq";
import { longDistanceQuestions } from "@/data/moving-tips";
import { RequestQuote } from "../../local-moving/residential-movers/request-quote";
import { RelatedMovingServices } from "../related-services";
import { longDistanceMovingServices } from "@/data/services";
import { OurLocations } from "@/components/OurLocations";
import { ServicesSection } from "@/components/ServicesSection";

const EmployeeRelocation = () => {
	return (
		<ServiceLayout
			image="/residential-moving.webp"
			title="Employee Relocation Services"
			desc="Professional employee relocation solutions ensuring smooth transitions for your workforce."
		>
			<div className="py-12 px-4">
				<div className="max-w-7xl mx-auto space-y-12">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="rounded-lg overflow-hidden p-4 sm:p-6">
							<h1 className="text-4xl font-bold mb-2 sm:mb-4">
								Employee Relocation Services
							</h1>
							<p className="text-background text-lg sm:text-xl mb-4 sm:mb-6">
								Seamless employee transitions across the country
							</p>
							<div className="relative">
								<img
									src="/moving-process.webp"
									alt="Employee Relocation Services"
									className="w-full rounded-lg max-h-[700px] object-cover"
								/>
							</div>
						</div>

						<div className="flex flex-col justify-center space-y-3">
							<div className="flex items-center space-x-2 text-background">
								<Info className="w-6 h-6" />
								<h2 className="text-xl md:text-2xl font-bold">
									Employee Relocation Excellence
								</h2>
							</div>
							<p className="text-background">
								Premium Moving Services sets ourselves apart with our dedication
								to ensuring quality service coupled with safety and efficiency
								at the fore-front.
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
									Experienced and trained movers that adapt to any situation
								</li>
								<li>Complete packing and unpacking services</li>
								<li>Schedule flexibility around your operations</li>
								<li>Community-focused safety measures</li>
							</ul>
							<p className="text-gray-700">
								In every project we strive to exceed expectations through our
								adaptability and commitment to service excellence.
							</p>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="space-y-4">
							<h2 className="text-xl md:text-2xl font-bold">
								Expert Employee Relocation Services
							</h2>
							<p className="text-gray-700">
								Our employee relocation services are designed to support both
								employers and employees through the entire moving process. We
								understand the importance of maintaining productivity and
								minimizing disruption during workforce transitions.
							</p>
							<p className="text-gray-700">
								With years of experience in employee relocations, we've
								developed efficient systems to handle moves of any scale,
								ensuring a smooth transition for your valued team members.
							</p>

							<h2 className="text-xl md:text-2xl font-bold pt-6">
								Our Employee Moving Process
							</h2>
							<p className="text-gray-700">
								We follow a comprehensive approach to ensure your employee
								relocation is executed flawlessly:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>Initial consultation and needs assessment</li>
								<li>Customized moving plan development</li>
								<li>Detailed timeline and logistics planning</li>
								<li>Professional packing and inventory management</li>
								<li>Secure transportation and delivery</li>
								<li>Setup assistance at new location</li>
							</ul>
						</div>

						<div className="rounded-lg overflow-hidden h-full">
							<img
								className="w-full h-auto rounded-lg object-cover"
								src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/IMG_2716c-1920w.jpg"
								alt="Employee Moving Process"
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

export default EmployeeRelocation;

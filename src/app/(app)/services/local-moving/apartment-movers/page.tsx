import { ServiceLayout } from "@/components/ServiceLayout";
import { Info } from "lucide-react";
import { FAQs } from "../residential-movers/faq";
import { RequestQuote } from "../residential-movers/request-quote";
import { RelatedLocalMoving } from "../residential-movers/related-services";
import { OurLocations } from "@/components/OurLocations";
import { frequentQuestions } from "@/data/moving-tips";
import { localMovingServices } from "@/data/services";
import { ServicesSection } from "@/components/ServicesSection";
import React from "react";

const ApartmentMovers = () => {
	return (
		<ServiceLayout
			image="/apartment-moving.webp"
			title="Apartment Moving Services"
			desc="Professional apartment moving services specializing in efficient and secure relocations for apartments of all sizes."
		>
			<div className="py-12 px-4">
				<div className="max-w-7xl mx-auto space-y-12">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="rounded-lg overflow-hidden p-4 sm:p-6">
							<h1 className="text-4xl font-bold mb-2 sm:mb-4">
								Expert Apartment Moving
							</h1>
							<p className="text-background text-lg sm:text-xl mb-4 sm:mb-6">
								Specialized apartment movers near you in Minnesota
							</p>
							<div className="relative">
								<img
									src="/moving-process.webp"
									alt="Professional Apartment Moving Services"
									className="w-full rounded-lg max-h-[700px] object-cover"
								/>
							</div>
						</div>

						<div className="flex flex-col justify-center space-y-3">
							<div className="flex items-center space-x-2 text-background">
								<Info className="w-6 h-6" />
								<h2 className="text-xl md:text-2xl font-bold">
									Apartment Moving Solutions
								</h2>
							</div>
							<p className="text-background">
								We specialize in navigating the unique challenges of apartment
								moves, from tight corridors to elevator coordination and parking
								logistics.
							</p>
							<p className="text-gray-700">
								Our experienced team ensures a smooth transition whether you're
								moving up several floors or to a new apartment complex.
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>Expert handling of stairs and elevators</li>
								<li>Protection for hallways and common areas</li>
								<li>Efficient parking and loading zone management</li>
								<li>Careful furniture disassembly and reassembly</li>
								<li>Property-compliant moving procedures</li>
								<li>Time-slot scheduling for minimal disruption</li>
							</ul>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="space-y-4">
							<h2 className="text-xl md:text-2xl font-bold">
								What is apartment moving?
							</h2>
							<p className="text-gray-700">
								Our apartment movers will help with our process to pack and
								unpack, ship and move your items to the right destination for
								you to get your goods safely transported between apartments.
							</p>
							<p className="text-gray-700">
								We know the right ways to handle most apartments' items, to
								navigate through staircases, calling to reserve the elevator for
								you, and making sure we don't call you every 5 minutes saying
								"hey we got locked out again".
							</p>

							<h2 className="text-xl capitalize md:text-2xl font-bold pt-6">
								Why use our Apartment moving service?
							</h2>
							<p className="text-gray-700">
								Our apartment movers are well trained and pass a strict standard
								to make sure they are able to hold and move anyone's goods. This
								process exceeds most movers and after doing apartment moves for
								almost a decade, Premium Moving Services allows for apartment
								moves in to be done quickly, within budget, and done without
								headaches like getting texts saying, "no one is at the front
								desk let us in " again and again.
							</p>
							<p className="text-gray-700">
								We know how to do a Minnesota apartment move properly and to do
								it well the first time through.
							</p>
						</div>

						<div className="rounded-lg overflow-hidden h-full">
							<img
								className="w-full h-auto rounded-lg object-cover"
								src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/Unloading+at+Aspire+apt+Woodbury+Oct+19+22-1920w.JPG"
								alt="Apartment Moving Process"
							/>
						</div>
					</div>
				</div>
			</div>

			<FAQs faqs={frequentQuestions} />
			<RequestQuote />
			<RelatedLocalMoving services={localMovingServices} />
			<ServicesSection />
			<OurLocations />
		</ServiceLayout>
	);
};

export default ApartmentMovers;

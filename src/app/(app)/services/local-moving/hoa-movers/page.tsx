import { ServiceLayout } from "@/components/ServiceLayout";
import { Info } from "lucide-react";
import React from "react";
import { FAQs } from "../residential-movers/faq";
import { RequestQuote } from "../residential-movers/request-quote";
import { RelatedLocalMoving } from "../residential-movers/related-services";
import { OurLocations } from "@/components/OurLocations";
import { frequentQuestions } from "@/data/moving-tips";
import { localMovingServices } from "@/data/services";
import { ServicesSection } from "@/components/ServicesSection";

const HOAMovers = () => {
	return (
		<ServiceLayout
			image="/residential-moving.webp"
			title="HOA Moving Services"
			desc="Professional HOA moving services that comply with all homeowner association regulations and requirements."
		>
			<div className="py-12 px-4">
				<div className="max-w-7xl mx-auto space-y-12">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="rounded-lg overflow-hidden p-4 sm:p-6">
							<h1 className="text-4xl font-bold mb-2 sm:mb-4">
								HOA Moving Specialists
							</h1>
							<p className="text-background text-lg sm:text-xl mb-4 sm:mb-6">
								Expert HOA movers near you in Minnesota
							</p>
							<div className="relative">
								<img
									src="/moving-process.webp"
									alt="Professional HOA Moving Services"
									className="w-full rounded-lg max-h-[700px] object-cover"
								/>
							</div>
						</div>

						<div className="flex flex-col justify-center space-y-3">
							<div className="flex items-center space-x-2 text-background">
								<Info className="w-6 h-6" />
								<h2 className="text-xl md:text-2xl font-bold">
									What is HOA moving?
								</h2>
							</div>
							<p className="text-background">
								Moving in or out of an HOA community requires special attention
								to rules, regulations, and time restrictions. Our team is
								experienced in handling these unique requirements.
							</p>
							<p className="text-gray-700">
								We understand HOA protocols and ensure a smooth transition while
								maintaining community guidelines and property protection.
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>HOA-compliant moving procedures</li>
								<li>Protection for common areas</li>
								<li>Time restriction compliance</li>
								<li>Property rules adherence</li>
								<li>Insurance requirements met</li>
								<li>Professional documentation</li>
							</ul>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="space-y-4">
							<h2 className="text-xl md:text-2xl font-bold">
								What is a HOA Mover?
							</h2>
							<p className="text-gray-700">
								Your move out of or to an HOA neighborhood requires finesse -
								we'll be able to move your goods, furniture, and items to our
								truck and haul it to be unpacked in the right room in your house
								in the HOA. We'll make sure that we follow the HOA standards
								that may be there so we do things right, without disturbing your
								neighbors, and with the utmost care when carrying and handling
								your goods.
							</p>

							<h2 className="text-xl md:text-2xl font-bold pt-6">
								Why use us for your HOA move?
							</h2>
							<p className="text-gray-700">
								Our movers need to be certified in our training standards before
								we can approve them for hauling anyone's goods. There is also a
								location-based standard that they need to understand the ins and
								outs so any mover or lead mover can make sure that the move does
								not disturb any HOA guidelines or proper procedures that you
								need to follow during this move.
							</p>
							<p className="text-gray-700">
								We know of common HOA guidelines that we'll make sure to follow,
								and usually one of the most common ones is to not just park the
								moving truck anywhere - even if its convenient for our movers.
								We'll make sure the HOA moving job is done right, and
								respectfully done with the HOA in mind.
							</p>
						</div>

						<div className="rounded-lg overflow-hidden h-full">
							{/* TODO: replace this image with a nicer one */}
							<img
								className="w-full h-auto rounded-lg object-cover"
								src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/IMG_1078-1920w.jpg"
								alt="HOA Moving Process"
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

export default HOAMovers;

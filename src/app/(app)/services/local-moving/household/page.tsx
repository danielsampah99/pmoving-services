import { ServiceLayout } from "@/components/ServiceLayout";
import { Info } from "lucide-react";
import React from "react";
import { FAQs } from "../residential-movers/faq";
import { RequestQuote } from "../residential-movers/request-quote";
import { RelatedLocalMoving } from "../residential-movers/related-services";
import { OurLocations } from "@/components/OurLocations";
import { frequentQuestions } from "@/data/moving-tips";
import { localMovingServices } from "@/data/services";

const HouseHoldMoving = () => {
	return (
		<ServiceLayout
			image="/household-moving.webp"
			title="Household Moving"
			desc="We provide top-quality household moving services, ensuring your belongings are safely transported to your new home."
		>
			<div className="py-12 px-4">
				<div className="max-w-7xl mx-auto space-y-12">
					{/* First Section */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{/* YouTube Video Embed */}
						<div className="rounded-lg overflow-hidden">
							<div className="relative group cursor-pointer overflow-hidden rounded-lg mb-6">
								<div className="aspect-w-16 aspect-h-9">
									<img
										src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/13%2Bways%2Bto%2Bexpedite%2Byour%2Bmoving-640w-1920w.png"
										alt="Moving Guide"
										className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
									/>
								</div>
							</div>
						</div>

						{/* Text Content */}
						<div className="flex flex-col justify-center space-y-3">
							<div className="flex items-center space-x-2 text-background">
								<Info className="w-6 h-6" />
								<h2 className="text-xl md:text-2xl font-bold">
									Household Moving Experts
								</h2>
							</div>
							<p className="text-background">
								From small apartments to large family homes, we specialize in
								making your household move seamless and stress-free, handling
								everything from delicate china to bulky furniture.
							</p>
							<p className="text-gray-700">
								Our comprehensive household moving service covers every aspect
								of your relocation needs, ensuring a smooth transition to your
								new home.
							</p>
							<p className="font-semibold text-gray-800 mt-4">
								Our household moving services include:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>Full packing and unpacking of household items</li>
								<li>Special handling for fragile items and antiques</li>
								<li>Furniture disassembly and reassembly</li>
								<li>Kitchen and bathroom specialized packing</li>
								<li>Electronics and appliance moving expertise</li>
								<li>Room-by-room organization system</li>
								<li>Custom crating for valuable items</li>
							</ul>
							<p className="text-gray-700 mt-4">
								Whether you're moving a studio apartment or a multi-bedroom
								house, our experienced team ensures your household belongings
								are handled with the utmost care and attention to detail.
							</p>
						</div>
					</div>

					{/* Second Section */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{/* Left Text */}
						<div className="space-y-4">
							<h2 className="text-xl md:text-2xl font-bold">
								What does household goods movers mean?
							</h2>
							<p className="text-gray-700">
								With all of the household items to move in your home, from the
								dozen or so boxes that make up your kitchen to the mountain of
								boxes that might make up your closet - moving them is no easy
								task.
							</p>

							<p className="text-gray-700">
								We can move you from an apartment to a home, or from your house
								to a new home across the state or country.
							</p>

							<h2 className="text-xl md:text-2xl font-bold">
								Why use us to move household goods?
							</h2>
							<p className="text-gray-700">
								Even if its a quick or short job, we can replace what is a day's
								job within a few hours of backbreaking work that no one really
								wants to do with our moving truck and crews.
							</p>

							<p className="text-gray-700">
								We are reliable and affordable and We'd be able to bring your
								household items to your new location and put them in the right
								room for you all for an affordable rate that you can get an
								estimate with over a call.
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li className="font-bold">House movers Minnesota</li>
								<li className="font-bold">House moving labor in Minnesota</li>
								<li className="font-bold">
									Climate - controlled storage for house moving in Minnesota{" "}
								</li>
								<li className="font-bold">House movers near me Minnesota</li>
							</ul>
						</div>

						{/* Right Image */}
						<div className="rounded-lg overflow-hidden h-full">
							<img
								className="w-full h-auto max-h-[800px] rounded-lg object-contain"
								src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/_MG_3094c-1920w.jpg"
								alt="Movers"
							/>
						</div>
					</div>
				</div>
			</div>

			<FAQs faqs={frequentQuestions} />
			<RequestQuote />
			<RelatedLocalMoving services={localMovingServices} />
			<OurLocations />
		</ServiceLayout>
	);
};

export default HouseHoldMoving;

import { ServiceLayout } from "@/components/ServiceLayout";
import { Info } from "lucide-react";
import React from "react";
import { FAQs } from "../residential-movers/faq";
import { RequestQuote } from "../residential-movers/request-quote";
import { RelatedLocalMoving } from "../residential-movers/related-services";
import { OurLocations } from "@/components/OurLocations";
import { frequentQuestions } from "@/data/moving-tips";
import { localMovingServices } from "@/data/services";

const CondoMovers = () => {
	return (
		<ServiceLayout
			image="/condo.jpg"
			title="Condo Moving Services"
			desc="Expert condo moving services with specialized care for high-rise buildings and luxury properties."
		>
			<div className=" py-12 px-4">
				<div className="max-w-7xl mx-auto space-y-12">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="rounded-lg overflow-hidden p-4 sm:p-6">
							<h1 className="text-4xl font-bold mb-2 sm:mb-4">
								Professional Condo Moving
							</h1>
							<p className="text-background text-lg sm:text-xl mb-4 sm:mb-6">
								Specialized condo movers near you in Minnesota
							</p>
							<div className="relative">
								<img
									src="/moving-process.webp"
									alt="Professional Condo Moving Services"
									className="w-full rounded-lg max-h-[700px] object-cover"
								/>
							</div>
						</div>

						<div className="flex flex-col justify-center space-y-3">
							<div className="flex items-center space-x-2 text-background">
								<Info className="w-6 h-6" />
								<h2 className="text-xl md:text-2xl font-bold">
									What is condo moving?
								</h2>
							</div>
							<p className="text-background">
								Our condo movers specialize in handling the unique challenges of
								moving in and out of condominiums, from coordinating with
								building management to protecting common areas.
							</p>
							<p className="text-gray-700">
								We understand the specific requirements of condo moves,
								including elevator reservations, insurance requirements, and
								time restrictions.
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>High-rise building expertise</li>
								<li>Elevator and loading dock coordination</li>
								<li>Protection for common areas</li>
								<li>Association-compliant procedures</li>
								<li>Proper insurance coverage</li>
								<li>Time-slot scheduling</li>
							</ul>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="space-y-4">
							<h2 className="text-xl md:text-2xl font-bold">
								Looking reliable Condo Movers?
							</h2>
							<p className="text-gray-700 font-semibold">
								Condo Movers near me
							</p>
							<h3 className="text-lg font-semibold">
								What is condo moving company in Minnesota?
							</h3>
							<p className="text-gray-700">
								Moving between condos in Minnesota requires diligence for all of
								your items and goods. Making sure that we can grab the truck for
								you, fill it up with packed goods, haul it over to your
								destination to carry all of the heavy and nice things you own so
								it comes back as the same condition as it left in is our number
								goal.
							</p>
							<p className="text-gray-700">
								We take our what would be a days work for your minnesota move
								and make it very easy for you to handle the other work in the
								move, such as just unpacking and making sure all of your things
								go to where you want them to be.
							</p>

							<h2 className="text-xl md:text-2xl font-bold pt-6">
								Why use us for your Condo Moving?
							</h2>
							<p className="text-gray-700">
								Our movers need to pass a moving certification standard before
								they are allowed to touch anyones goods. This is especially
								relevant for condo moving as usually condo owners have more
								expensive goods and furniture that need to stay in that
								condition between moves.
							</p>
							<p className="text-gray-700">
								We've seen other moving companies in Minnesota completely mess
								up condo moving jobs that require that finesse to travel up and
								down staircases, elevators, with more luxurious furniture that
								they might treat as any other funiture.
							</p>

							<ul className="list-disc pl-6 space-y-2 text-gray-700 mt-6">
								<li className="font-bold">Condo movers Minnesota</li>
								<li className="font-bold">Condo moving labor in Minnesota</li>
								<li className="font-bold">Condo storage in Minnesota</li>
								<li className="font-bold">Condo movers near me Minnesota</li>
							</ul>
						</div>

						<div className="rounded-lg overflow-hidden h-full">
							<img
								className="w-full h-auto rounded-lg object-cover"
								src="https://images.unsplash.com/photo-1703489583404-4ee76c06482b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q29uZG8lMjBNb3ZpbmclMjBTZXJ2aWNlc3xlbnwwfHwwfHx8MA%3D%3D"
								alt="Condo Moving Process"
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

export default CondoMovers;

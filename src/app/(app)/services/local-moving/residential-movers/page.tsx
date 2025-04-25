import { Hero } from "./hero";
import { MovingProcess } from "./moving-process";
import { OurLocations } from "@/components/OurLocations";
import { FAQs } from "./faq";
import { RelatedLocalMoving } from "./related-services";
import { localMovingServices } from "@/data/services";
import { RequestQuote } from "./request-quote";
import { frequentQuestions, residentialExpectations } from "@/data/moving-tips";

const ResidentialMoving = () => {
	return (
		<section className="px-6 lg:px-8">
			<Hero
				description="Premium Moving Services sets ourselves apart with our dedication to ensuring quality service coupled with safety and efficiency at the fore-front."
				image="/residential-moving.webp"
				alt="Residential moving images"
				title="Residential Moving Services"
			/>

			<MovingProcess
				description="Premium Moving Services sets ourselves apart with our
				dedication to ensuring quality service coupled with safety and
				efficiency at the fore-front. We offer flexibility for each project and can meet your needs
				whatever they may be."
				expectations={residentialExpectations}
				image={{ src: "/moving-process.webp", alt: "Moving process image" }}
				title="House Movers"
			/>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{/* Left Text */}
				<div className="space-y-4">
					<h2 className="text-xl md:text-2xl font-bold">
						Who are residential movers?
					</h2>
					<p className="text-gray-700">
						Our residential moving company lets us move boxes, appliances,
						furniture and equipment between two homes. We can move and do the
						heavy lifting and transporting all for you.
					</p>

					<p className="text-gray-700">
						We can move you from an apartment to a home, or from your house to a
						new home across the state or country.
					</p>

					<h2 className="text-xl md:text-2xl font-bold">
						Our moving company values training quality
					</h2>
					<p className="text-gray-700">
						We train our movers through a very special training process to help
						ensure that your belongings makes the trip in the same condition it
						started in. We've seen other moving companies spring up and get work
						without getting their moving crews the right training to make sure
						they're able to handle your move.
					</p>
					<ul className="list-disc pl-6 space-y-2 text-gray-700">
						<li className="font-bold">Residential movers Minnesota</li>
						<li className="font-bold">Residential moving labor in Minnesota</li>
						<li className="font-bold">
							Climate - controlled storage for residential move in Minnesota{" "}
						</li>
						<li className="font-bold">Residential movers near me Minnesota</li>
					</ul>
				</div>

				{/* Right Image */}
				<div className="rounded-lg overflow-hidden h-full">
					<img
						className="w-full h-auto max-h-[800px] rounded-lg object-contain"
						src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/Deshun+unloadingc-1920w.JPG"
						alt="Movers"
					/>
				</div>
			</div>
			<FAQs faqs={frequentQuestions} />
			<RequestQuote />
			<RelatedLocalMoving services={localMovingServices} />
			<OurLocations />
		</section>
	);
};

export default ResidentialMoving;

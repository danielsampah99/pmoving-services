import { ServiceLayout } from "@/components/ServiceLayout";
import { Info } from "lucide-react";

const ResidentialMoving = () => {
	return (
		<ServiceLayout
			image="/residential.jpg"
			title="Residential Moving Services"
			desc="We make home moving stress-free with professional packing, transport, and unpacking services."
		>
			<div className=" py-12">
				<div className="max-w-7xl mx-auto px-4">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
						<div className="flex justify-center">
							<img
								src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/business-1920w.png"
								alt="Business Logo"
								className="h-20 w-auto object-contain max-w-[280px]"
								loading="eager"
							/>
						</div>
						<div className="flex justify-center">
							<img
								src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/AngiesList_SSA_2019-1920w.png"
								alt="Angie's List Logo"
								className="h-20 w-auto object-contain max-w-[280px]"
								loading="eager"
							/>
						</div>
						<div className="flex justify-center">
							<img
								src="https://irp-cdn.multiscreensite.com/b0f4adc5/dms3rep/multi/inline.svg"
								alt="Inline Logo"
								className="h-20 w-auto object-contain max-w-[280px]"
								loading="eager"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-gray-100 py-12 px-4">
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
								<h2 className="text-xl md:text-2xl font-bold">House Movers</h2>
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
							<p className="font-semibold text-gray-800 mt-4">
								Through our relationship from start to finish you can expect the
								following from us:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>Courteous, friendly, and professional service</li>
								<li>
									Experienced and trained movers that can adapt to any situation
								</li>
								<li>Packing and unpacking services</li>
								<li>Convenience to work around your schedule</li>
								<li>
									Safety, efficiency, and respect for those in your current and
									new community
								</li>
							</ul>
							<p className="text-gray-700 mt-4">
								In any project we strive to exceed any expectations you may have
								of us through our adaptability and flexibility.
							</p>
						</div>
					</div>

					{/* Second Section */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{/* Left Text */}
						<div className="space-y-4">
							<h2 className="text-xl md:text-2xl font-bold">
								Who are residential movers?
							</h2>
							<p className="text-gray-700">
								Our residential moving company lets us move boxes, appliances,
								furniture and equipment between two homes. We can move and do
								the heavy lifting and transporting all for you.
							</p>

							<p className="text-gray-700">
								We can move you from an apartment to a home, or from your house
								to a new home across the state or country.
							</p>

							<h2 className="text-xl md:text-2xl font-bold">
								Our moving company values training quality
							</h2>
							<p className="text-gray-700">
								We train our movers through a very special training process to
								help ensure that your belongings makes the trip in the same
								condition it started in. We've seen other moving companies
								spring up and get work without getting their moving crews the
								right training to make sure they're able to handle your move.
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li className="font-bold">Residential movers Minnesota</li>
								<li className="font-bold">
									Residential moving labor in Minnesota
								</li>
								<li className="font-bold">
									Climate - controlled storage for residential move in Minnesota{" "}
								</li>
								<li className="font-bold">
									Residential movers near me Minnesota
								</li>
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
				</div>
			</div>
		</ServiceLayout>
	);
};

export default ResidentialMoving;

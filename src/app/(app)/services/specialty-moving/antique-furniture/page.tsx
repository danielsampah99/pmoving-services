import { ServiceLayout } from "@/components/ServiceLayout";
import { OurLocations } from "@/components/OurLocations";
import { RelatedServices } from "@/components/RelatedServices";

const AntiqueFurnitureMovingPage = () => {
	return (
		<ServiceLayout
			image="/residential.jpg"
			title="Antique Furniture Moving Services"
			desc="Professional and specialized moving services for your valuable antique furniture. Our expert movers handle your precious pieces with utmost care and precision."
		>
			<div className="max-w-7xl mx-auto px-4 py-12">
				<div className="space-y-8">
					<section className="bg-white rounded-lg shadow-md p-6">
						<h2 className="text-3xl font-bold mb-4">
							Specialized Antique Moving Care
						</h2>
						<p className="text-gray-600 mb-4">
							Our antique furniture moving service is designed to provide the
							highest level of protection for your valuable and irreplaceable
							pieces. We understand that each antique item requires unique
							handling and specialized packing techniques.
						</p>
						<ul className="list-disc pl-6 text-gray-600 space-y-2">
							<li>Custom crating and padding for delicate pieces</li>
							<li>Climate-controlled transportation options</li>
							<li>Expert handling by trained antique specialists</li>
							<li>Comprehensive insurance coverage</li>
						</ul>
					</section>

					<section className="bg-white rounded-lg shadow-md p-6">
						<h2 className="text-3xl font-bold mb-4">Our Process</h2>
						<div className="grid md:grid-cols-2 gap-6">
							<div>
								<h3 className="text-xl font-semibold mb-2">
									Assessment & Planning
								</h3>
								<p className="text-gray-600">
									Our experts carefully evaluate each piece and develop a
									customized moving plan that ensures maximum protection during
									transit.
								</p>
							</div>
							<div>
								<h3 className="text-xl font-semibold mb-2">
									Professional Packing
								</h3>
								<p className="text-gray-600">
									We use premium packing materials and techniques specifically
									designed for antique furniture protection.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
			<RelatedServices />
			<OurLocations />
		</ServiceLayout>
	);
};

export default AntiqueFurnitureMovingPage;

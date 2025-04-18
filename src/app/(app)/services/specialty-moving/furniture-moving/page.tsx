import { ServiceLayout } from '@/components/ServiceLayout'
import { OurLocations } from '@/components/OurLocations'
import { RelatedServices } from '@/components/RelatedServices'

const FurnitureMovingPage = () => {
	return (
		<ServiceLayout
			image="/residential.jpg"
			title="Professional Furniture Moving Services"
			desc="Expert furniture moving services with careful handling and protection. Our skilled team ensures your furniture arrives safely at its destination."
		>
			<div className="max-w-7xl mx-auto px-4 py-12">
				<div className="space-y-8">
					<section className="bg-white rounded-lg shadow-md p-6">
						<h2 className="text-3xl font-bold mb-4">Comprehensive Furniture Moving Solutions</h2>
						<p className="text-gray-600 mb-4">
							Our furniture moving service is designed to provide complete protection and care for your valuable pieces. We use industry-leading techniques and equipment to ensure safe transportation.
						</p>
						<ul className="list-disc pl-6 text-gray-600 space-y-2">
							<li>Professional wrapping and padding for all furniture</li>
							<li>Specialized equipment for heavy and bulky items</li>
							<li>Experienced moving crews</li>
							<li>Full insurance coverage</li>
						</ul>
					</section>

					<section className="bg-white rounded-lg shadow-md p-6">
						<h2 className="text-3xl font-bold mb-4">Our Moving Process</h2>
						<div className="grid md:grid-cols-2 gap-6">
							<div>
								<h3 className="text-xl font-semibold mb-2">Initial Assessment</h3>
								<p className="text-gray-600">
									We carefully evaluate your furniture and create a detailed moving plan to ensure efficient and safe transportation.
								</p>
							</div>
							<div>
								<h3 className="text-xl font-semibold mb-2">Expert Handling</h3>
								<p className="text-gray-600">
									Our trained professionals use proper techniques and equipment to protect your furniture during the entire moving process.
								</p>
							</div>
						</div>
					</section>
				</div>
			</div>
			<RelatedServices />
			<OurLocations />
		</ServiceLayout>
	)
}

export default FurnitureMovingPage
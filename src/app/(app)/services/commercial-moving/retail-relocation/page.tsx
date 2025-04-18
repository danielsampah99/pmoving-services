import { ServiceLayout } from '@/components/ServiceLayout'
import { Info } from 'lucide-react'
import Link from 'next/link'

const RetailRelocation = () => {
	return (
		<ServiceLayout
			image='/retail.jpg'
			title="Retail Relocation Services"
			desc="Professional retail relocation solutions ensuring seamless transitions for retail businesses."
		>
			<div className="py-12">
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
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="rounded-lg overflow-hidden p-4 sm:p-6">
							<h1 className='text-4xl font-bold mb-2 sm:mb-4'>
								Retail Relocation Services
							</h1>
							<p className='text-background text-lg sm:text-xl mb-4 sm:mb-6'>
								Efficient retail store transitions across Minnesota
							</p>
							<div className="relative">
								<img
									src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/retail-moving-1920w.jpg"
									alt="Retail Relocation Services"
									className="w-full rounded-lg max-h-[700px] object-cover"
								/>
							</div>
						</div>

						<div className="flex flex-col justify-center space-y-3">
							<div className="flex items-center space-x-2 text-background">
								<Info className="w-6 h-6" />
								<h2 className="text-xl md:text-2xl font-bold">Specialized Retail Moving Solutions</h2>
							</div>
							<p className="text-background">
								We provide comprehensive retail relocation services designed to minimize business downtime and protect your valuable inventory.
							</p>
							<p className="text-gray-700">
								Our experienced team handles every aspect of your retail move with care and efficiency.
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>Complete store relocation management</li>
								<li>Secure handling of merchandise and fixtures</li>
								<li>Inventory management and tracking</li>
								<li>Point of sale and IT equipment moving</li>
								<li>Temporary storage solutions</li>
								<li>After-hours moving services</li>
							</ul>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="space-y-4">
							<h2 className="text-xl md:text-2xl font-bold">Expert Retail Moving Services</h2>
							<p className="text-gray-700">
								Our retail relocation services are tailored to meet the unique needs of retail businesses. We understand the importance of minimizing disruption to your operations and ensuring your merchandise arrives safely.
							</p>
							<p className="text-gray-700">
								With years of experience in retail relocations, we've developed efficient systems to handle moves of any scale, from small boutiques to large retail chains.
							</p>

							<h2 className="text-xl md:text-2xl font-bold pt-6">Our Retail Moving Process</h2>
							<p className="text-gray-700">
								We follow a systematic approach to ensure your retail relocation is executed perfectly:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>Initial site survey and planning</li>
								<li>Custom relocation strategy development</li>
								<li>Detailed inventory management</li>
								<li>Professional packing and labeling</li>
								<li>Secure transportation</li>
								<li>Store setup and fixture installation</li>
							</ul>

							<Link href="/free-quote" className="inline-block mt-6">
								<button className="bg-background cursor-pointer text-white px-6 py-3 rounded-lg font-semibold hover:bg-background-100 transition-colors duration-300">
									GET A FREE QUOTE
								</button>
							</Link>
						</div>

						<div className="rounded-lg overflow-hidden h-full">
							<img
								className="w-full h-auto rounded-lg object-cover"
								src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/retail-store-moving-1920w.jpg"
								alt="Retail Moving Process"
							/>
						</div>
					</div>
				</div>
			</div>
		</ServiceLayout>
	)
}

export default RetailRelocation
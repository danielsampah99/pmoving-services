import { ServiceLayout } from '@/components/ServiceLayout'
import { Info } from 'lucide-react'
import Link from 'next/link'

const CorporateRelocation = () => {
	return (
		<ServiceLayout
			image='/corporate.jpg'
			title="Corporate Relocation Services"
			desc="Professional corporate relocation solutions ensuring smooth transitions for businesses and employees."
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
								Corporate Relocation Services
							</h1>
							<p className='text-background text-lg sm:text-xl mb-4 sm:mb-6'>
								Streamlined business transitions across Minnesota
							</p>
							<div className="relative">
								<img
									src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/office-moving-1920w.jpg"
									alt="Corporate Relocation Services"
									className="w-full rounded-lg max-h-[700px] object-cover"
								/>
							</div>
						</div>

						<div className="flex flex-col justify-center space-y-3">
							<div className="flex items-center space-x-2 text-background">
								<Info className="w-6 h-6" />
								<h2 className="text-xl md:text-2xl font-bold">Comprehensive Relocation Solutions</h2>
							</div>
							<p className="text-background">
								We provide end-to-end corporate relocation services designed to minimize business disruption and maximize efficiency.
							</p>
							<p className="text-gray-700">
								Our experienced team handles every aspect of your corporate move with precision and professionalism.
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>Complete office and employee relocation management</li>
								<li>Secure handling of sensitive documents and equipment</li>
								<li>Customized moving timeline and logistics planning</li>
								<li>Employee relocation assistance programs</li>
								<li>Storage solutions during transition</li>
								<li>International relocation coordination</li>
							</ul>
						</div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="space-y-4">
							<h2 className="text-xl md:text-2xl font-bold">Expert Corporate Relocation Services</h2>
							<p className="text-gray-700">
								Our corporate relocation services are tailored to meet the unique needs of businesses and their employees. We understand the complexities involved in corporate moves and provide comprehensive solutions to ensure a smooth transition.
							</p>
							<p className="text-gray-700">
								With years of experience in corporate relocations, we've developed efficient systems to handle moves of any scale, from single employee transfers to complete office relocations.
							</p>

							<h2 className="text-xl md:text-2xl font-bold pt-6">Our Corporate Moving Process</h2>
							<p className="text-gray-700">
								We follow a comprehensive approach to ensure your corporate relocation is executed flawlessly:
							</p>
							<ul className="list-disc pl-6 space-y-2 text-gray-700">
								<li>Initial consultation and needs assessment</li>
								<li>Customized relocation strategy development</li>
								<li>Detailed timeline and logistics planning</li>
								<li>Professional packing and inventory management</li>
								<li>Secure transportation and delivery</li>
								<li>Setup and installation at new location</li>
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
								src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/commercial-moving-1920w.jpg"
								alt="Corporate Moving Process"
							/>
						</div>
					</div>
				</div>
			</div>
		</ServiceLayout>
	)
}

export default CorporateRelocation
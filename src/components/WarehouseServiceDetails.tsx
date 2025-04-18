'use client'

import { motion } from 'motion/react'
import { Truck, Package, Shield, Clock } from 'lucide-react'

export const WarehouseServiceDetails = () => {
	return (
		<section className="py-12 px-4 bg-white">
			<div className="container mx-auto max-w-6xl">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					{/* Overview Section */}
					<div>
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="text-3xl font-bold text-moving-navy mb-4 md:mt-3"
						>
							Warehouse & Industrial Moving
						</motion.h2>

						<motion.div
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 0.8 }}
						>
							<h3 className="text-2xl font-semibold text-moving-navy mb-4">
								Comprehensive Warehouse Relocation
							</h3>
							<p className="text-gray-700 mb-6 text-lg">
								Our specialized team handles complete warehouse relocations, from planning to execution.
								We ensure minimal disruption to your operations with efficient moving solutions for
								inventory, equipment, and machinery.
							</p>

							<h3 className="text-2xl font-semibold text-moving-navy mb-4 mt-8">
								Industrial Equipment Moving
							</h3>
							<p className="text-gray-700 mb-6 text-lg">
								We specialize in moving heavy machinery and industrial equipment with precision and care.
								Our team utilizes specialized equipment and follows strict safety protocols to ensure
								secure transportation.
							</p>
						</motion.div>

						<motion.ul
							initial="hidden"
							whileInView="visible"
							variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
							className="list-disc pl-6 space-y-3 mb-6"
						>
							{[
								"Customized moving plans for warehouses of all sizes",
								"Specialized equipment for heavy machinery transport",
								"Inventory management and tracking systems",
								"Experienced team for safe equipment handling"
							].map((item, index) => (
								<motion.li
									key={item}
									variants={{
										hidden: { opacity: 0, x: -20 },
										visible: { opacity: 1, x: 0 }
									}}
									transition={{ delay: index * 0.1 }}
									className="text-gray-700"
								>
									{item}
								</motion.li>
							))}
						</motion.ul>
					</div>

					{/* Features Section */}
					<div className="space-y-8">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="bg-moving-light-gray p-6 rounded-lg"
						>
							<h3 className="text-2xl font-semibold text-moving-navy mb-6">Our Services Include</h3>
							<div className="grid grid-cols-1 gap-6">
								{[
									{
										icon: Truck,
										title: 'Specialized Transport',
										desc: 'Custom solutions for heavy machinery and equipment'
									},
									{
										icon: Package,
										title: 'Inventory Management',
										desc: 'Systematic tracking and organization of warehouse items'
									},
									{
										icon: Shield,
										title: 'Safety Protocols',
										desc: 'Strict adherence to safety standards and regulations'
									},
									{
										icon: Clock,
										title: 'Efficient Timeline',
										desc: 'Minimizing downtime during relocation process'
									}
								].map((service, index) => (
									<motion.div
										key={service.title}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										transition={{ delay: index * 0.1 }}
										className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm"
									>
										<service.icon className="text-yellow-400 w-6 h-6" />
										<div>
											<h4 className="text-lg font-semibold text-moving-navy">{service.title}</h4>
											<p className="text-gray-600">{service.desc}</p>
										</div>
									</motion.div>
								))}
							</div>
						</motion.div>
					</div>
				</div>
			</div>
		</section>
	)
}
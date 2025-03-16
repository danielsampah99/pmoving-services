'use client'

import { Button } from '@headlessui/react'
import { ArrowRight, Truck } from 'lucide-react'
import { motion } from 'motion/react'
import React from 'react'
import { Footer } from '../Footer'

const QuoteComponent = () => {
	return (
		<div>
			<section className="relative py-16 md:py-24 bg-primary/5 overflow-hidden border border-gray-200">
				<div className="max-w-7xl mx-auto px-6">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}
							className="text-center lg:text-left"
						>
							<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
								Moving Made <span className="text-primary">Simple</span> and Stress-Free
							</h1>
							<p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
								Let our professional team handle your move while you focus on what matters most. Get your personalized quote today.
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
								{/* Button 1: Get Started */}
								<button
									style={{
										padding: "0.75rem 1.5rem",
										backgroundColor: "#3b82f6", // Blue color
										color: "#ffffff", // White text
										borderRadius: "0.375rem",
										fontSize: "1rem",
										fontWeight: "500",
										display: "flex",
										alignItems: "center",
										gap: "0.5rem",
										transition: "background-color 0.2s ease",
									}}
									onMouseEnter={(e) => {
										e.currentTarget.style.backgroundColor = "#2563eb"; // Darker blue on hover
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.backgroundColor = "#3b82f6"; // Original blue on leave
									}}
								>
									Get Started
									<ArrowRight
										style={{
											width: "1rem",
											height: "1rem",
											transition: "transform 0.2s ease",
										}}
										className="group-hover:translate-x-1"
									/>
								</button>

								{/* Button 2: Learn More */}
								<button
									style={{
										padding: "0.75rem 1.5rem",
										backgroundColor: "transparent",
										color: "#3b82f6", // Blue text
										border: "2px solid #3b82f6", // Blue border
										borderRadius: "0.375rem",
										fontSize: "1rem",
										fontWeight: "500",
										transition: "background-color 0.2s ease, color 0.2s ease",
									}}
									onMouseEnter={(e) => {
										e.currentTarget.style.backgroundColor = "#3b82f6"; // Blue background on hover
										e.currentTarget.style.color = "#ffffff"; // White text on hover
									}}
									onMouseLeave={(e) => {
										e.currentTarget.style.backgroundColor = "transparent"; // Transparent background on leave
										e.currentTarget.style.color = "#3b82f6"; // Blue text on leave
									}}
								>
									Learn More
								</button>
							</div>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="relative hidden lg:block"
						>
							<img
								src="https://www.creativefabrica.com/wp-content/uploads/2021/03/03/Hero-Header-for-Packers-Movers-Website-Graphics-9151231-1.jpg"
								alt="Professional moving service"
								className="rounded-2xl shadow-elevation-3 object-cover h-[500px] w-full"
							/>
							<div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-elevation-2 border max-w-xs">
								<div className="flex items-center gap-3 mb-3">
									<div className="bg-primary/10 p-2 rounded-full">
										<Truck className="h-6 w-6 text-primary" />
									</div>
									<h3 className="font-semibold">5,000+ Successful Moves</h3>
								</div>
								<p className="text-muted-foreground text-sm">
									Join thousands of satisfied customers who trusted us with their moving needs
								</p>
							</div>
						</motion.div>
					</div>
				</div>

				{/* Decorative elements */}
				<div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
				<div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
			</section>

			{/* Quote Form Section */}
			<section className="py-16 md:py-24">
				<div className="max-w-7xl mx-auto px-6">
					<motion.div
						className="text-center mb-12"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Get Your Moving Quote</h2>
						<p className="text-muted-foreground max-w-2xl mx-auto">
							Fill out the form below and we'll create a personalized quote for your upcoming move.
						</p>
					</motion.div>

					{/* Form and Image Layout */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						{/* Form */}
						<form className="bg-white p-8 rounded-lg shadow-elevation-3">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
								{/* Full Name */}
								<div className="sm:col-span-2">
									<label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
										Full Name
									</label>
									<input
										type="text"
										id="fullName"
										name="fullName"
										className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-primary focus:border-primary"
										placeholder="John Doe"
									/>
								</div>

								{/* Email */}
								<div className="sm:col-span-2">
									<label htmlFor="email" className="block text-sm font-medium text-gray-700">
										Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-primary focus:border-primary"
										placeholder="johndoe@example.com"
									/>
								</div>

								{/* Phone Number */}
								<div className="sm:col-span-2">
									<label htmlFor="phone" className="block text-sm font-medium text-gray-700">
										Phone Number
									</label>
									<input
										type="tel"
										id="phone"
										name="phone"
										className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-primary focus:border-primary"
										placeholder="+1 (555) 123-4567"
									/>
								</div>

								{/* Move Date */}
								<div>
									<label htmlFor="moveDate" className="block text-sm font-medium text-gray-700">
										Move Date
									</label>
									<input
										type="date"
										id="moveDate"
										name="moveDate"
										className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-primary focus:border-primary"
									/>
								</div>

								{/* Move Size */}
								<div>
									<label htmlFor="moveSize" className="block text-sm font-medium text-gray-700">
										Move Size
									</label>
									<select
										id="moveSize"
										name="moveSize"
										className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-primary focus:border-primary"
									>
										<option value="small">Small (Studio/1 Bedroom)</option>
										<option value="medium">Medium (2-3 Bedrooms)</option>
										<option value="large">Large (4+ Bedrooms)</option>
									</select>
								</div>

								{/* Current Address */}
								<div className="sm:col-span-2">
									<label htmlFor="currentAddress" className="block text-sm font-medium text-gray-700">
										Current Address
									</label>
									<input
										type="text"
										id="currentAddress"
										name="currentAddress"
										className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-primary focus:border-primary"
										placeholder="123 Main St, City, State, ZIP"
									/>
								</div>

								{/* Destination Address */}
								<div className="sm:col-span-2">
									<label htmlFor="destinationAddress" className="block text-sm font-medium text-gray-700">
										Destination Address
									</label>
									<input
										type="text"
										id="destinationAddress"
										name="destinationAddress"
										className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-primary focus:border-primary"
										placeholder="456 Elm St, City, State, ZIP"
									/>
								</div>

								{/* Additional Notes */}
								<div className="sm:col-span-2">
									<label htmlFor="notes" className="block text-sm font-medium text-gray-700">
										Additional Notes
									</label>
									<textarea
										id="notes"
										name="notes"
										rows={4}
										className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-primary focus:border-primary"
										placeholder="Any special requirements or details?"
									/>
								</div>
							</div>

							{/* Submit Button */}
							<div className="mt-6">
								<button
									type="submit"
									className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors"
								>
									Get Quote
								</button>
							</div>
						</form>

						{/* Image */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.2 }}
							className="hidden lg:block"
						>
							<img
								src="https://www.creativefabrica.com/wp-content/uploads/2021/03/03/Hero-Header-for-Packers-Movers-Website-Graphics-9151231-1.jpg"
								alt="Moving Services"
								className="rounded-2xl shadow-elevation-3 object-cover h-[600px] w-full"
							/>
						</motion.div>
					</div>
				</div>
			</section>

			<Footer />
		</div>
	)
}

export default QuoteComponent

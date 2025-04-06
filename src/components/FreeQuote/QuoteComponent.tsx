"use client";

import { Field, Label, Input, Textarea } from "@headlessui/react";
import { motion } from "motion/react";
import React from "react";

export const QuoteComponent = () => {
	return (
		<div>
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
						<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
							Get Your Moving Quote
						</h2>
						<p className="text-muted-foreground max-w-2xl mx-auto">
							Fill out the form below and we'll create a personalized quote for
							your upcoming move.
						</p>
					</motion.div>

					{/* Form and Image Layout */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						{/* Form */}
						<form className="bg-white p-8 rounded-lg shadow-elevation-3">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
								{/* Full Name */}
								<Field className="sm:col-span-2">
									<Label
										htmlFor="fullName"
										className="block text-sm font-medium text-gray-700"
									>
										Full Name
									</Label>
									<Input
										type="text"
										id="fullName"
										name="fullName"
										autoComplete="name"
										className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-primary focus:border-primary"
										placeholder="John Doe"
									/>
								</Field>

								{/* Email */}
								<Field className="sm:col-span-2">
									<Label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700"
									>
										Email
									</Label>
									<Input
										type="email"
										id="email"
										name="email"
										autoComplete="email"
										className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-primary focus:border-primary"
										placeholder="johndoe@example.com"
									/>
								</Field>

								{/* Phone Number */}
								<Field className="sm:col-span-2">
									<Label
										htmlFor="phone"
										className="block text-sm font-medium text-gray-700"
									>
										Phone Number
									</Label>
									<Input
										type="tel"
										id="phone"
										name="phone"
										autoComplete="tel"
										className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-primary focus:border-primary"
										placeholder="+1 (555) 123-4567"
									/>
								</Field>

								{/* Move Date */}
								<Field>
									<Label
										htmlFor="moveDate"
										className="block text-sm font-medium text-gray-700"
									>
										Move Date
									</Label>
									<Input
										type="date"
										id="moveDate"
										name="moveDate"
										className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-primary focus:border-primary"
									/>
								</Field>

								{/* Move Size */}
								<Field>
									<Label
										htmlFor="moveSize"
										className="block text-sm font-medium text-gray-700"
									>
										Move Size
									</Label>
									<select
										id="moveSize"
										name="moveSize"
										className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-primary focus:border-primary"
									>
										<option value="small">Small (Studio/1 Bedroom)</option>
										<option value="medium">Medium (2-3 Bedrooms)</option>
										<option value="large">Large (4+ Bedrooms)</option>
									</select>
								</Field>

								{/* Current Address */}
								<Field className="sm:col-span-2">
									<Label
										htmlFor="currentAddress"
										className="block text-sm font-medium text-gray-700"
									>
										Current Address
									</Label>
									<Input
										type="text"
										id="currentAddress"
										name="currentAddress"
										className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-primary focus:border-primary"
										placeholder="123 Main St, City, State, ZIP"
									/>
								</Field>

								{/* Destination Address */}
								<Field className="sm:col-span-2">
									<Label
										htmlFor="destinationAddress"
										className="block text-sm font-medium text-gray-700"
									>
										Destination Address
									</Label>
									<Input
										type="text"
										id="destinationAddress"
										name="destinationAddress"
										className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-primary focus:border-primary"
										placeholder="456 Elm St, City, State, ZIP"
									/>
								</Field>

								{/* Additional Notes */}
								<Field className="sm:col-span-2">
									<Label
										htmlFor="notes"
										className="block text-sm font-medium text-gray-700"
									>
										Additional Notes
									</Label>
									<Textarea
										id="notes"
										name="notes"
										rows={4}
										className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-primary focus:border-primary"
										placeholder="Any special requirements or details?"
									/>
								</Field>
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
							className="hidden lg:block rounded-2xl"
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
		</div>
	);
};

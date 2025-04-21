"use client";

import { Field, Label, Input, Textarea, Button, Select } from "@headlessui/react";
import { motion } from "motion/react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { ReviewCarousel } from "../Reviews";
import { reviews } from "@/data/reviews";
import { adverts, moveSizeOptions } from "@/data/qoute";
import { ReviewWrapper } from "./review-carousel";

export const QuoteComponent = () => {


	return (
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
					<QuoteForm />

					{/* Image */}
					<div
						className="hidden self-start lg:block rounded-2xl"
					>
						<ReviewWrapper reviews={reviews} />
					</div>
				</div>
			</div>
		</section>
	);
};

export const QuoteForm = () => {

	const searchParams = useSearchParams();
	const [movingFrom, movingTo] = [
		searchParams.get("from"),
		searchParams.get("to"),
	];


	return (
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
						placeholder="Full Name"
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
						placeholder="Email"
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
						placeholder="Phone Number"
					/>
				</Field>

				<Field className="sm:col-span-2">
					<Label
						htmlFor="moveSize"
						className="block text-sm font-medium text-gray-700"
					>
						Phone Type
					</Label>
					<select
						id="moveSize"
						name="moveSize"
						defaultValue={''}
						className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-primary focus:border-primary"
					>
						<option value="home">Home</option>
						<option value="office">Office</option>
						<option value="mobile">Mobile</option>
					</select>
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
					<Select
						id="moveSize"
						name="moveSize"
						defaultValue={''}
						className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-primary focus:border-primary"
					>
						{moveSizeOptions.map(size => (
							<option key={size.id} value={size.value} className='capitalize'>{size.value}</option>
						))}

					</Select>
				</Field>

				{/* Current Address */}
				<Field className="sm:col-span-2">
					<Label
						htmlFor="movingFrom"
						className="block text-sm font-medium text-gray-700"
					>
						Origin Address/ Postal Code
					</Label>
					<Input
						type="text"
						defaultValue={movingFrom ?? ""}
						id="movingFrom"
						name="movingFrom"
						className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-primary focus:border-primary"
						placeholder="Origin"
					/>
				</Field>

				{/* Destination Address */}
				<Field className="sm:col-span-2">
					<Label
						htmlFor="movingTo"
						className="block text-sm font-medium text-gray-700"
					>
						Destination Address/ Postal Code
					</Label>
					<Input
						type="text"
						defaultValue={movingTo ?? ""}
						id="movingTo"
						name="movingTo"
						className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-primary focus:border-primary"
						placeholder="Destination"
					/>
				</Field>

				{/* how did you hear about us? */}
				<Field className={'sm:col-span-2'}>
					<Label htmlFor="advert"
						className="block text-sm font-medium text-gray-700">How did you hear about us?</Label>
					<Select
						id="advert"
						name="advert"
						className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-primary focus:border-primary"
					>
						{adverts.map(advert => (
							<option key={advert.id} value={advert.value} className='capitalize'>{advert.name}</option>
						))}
					</Select>
				</Field>

				{/* stairs - origin */}
				<Field className="sm:col-span-2">
					<Label
						htmlFor="stairs-origin"
						className="block text-sm font-medium text-gray-700"
					>
						Stairs (Origin)
					</Label>
					<Input
						type="number"
						defaultValue={0}
						id="movingFrom"
						name="movingFrom"
						className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-primary focus:border-primary"
						placeholder=""
					/>
				</Field>

				{/* stairs - destination */}
				<Field className="sm:col-span-2">
					<Label
						htmlFor="stairs-destination"
						className="block text-sm font-medium text-gray-700"
					>
						Stairs (Destination)
					</Label>
					<Input
						type="number"
						defaultValue={0}
						id="movingFrom"
						name="movingFrom"
						className="mt-1 block w-full rounded-md border border-gray-300 p-2 focus:ring-primary focus:border-primary"
						placeholder=""
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

			<Field className="flex my-4 items-center">
				<Input
					id="consent"
					name="consent"
					type="checkbox"
					className="size-4 rounded border-gray-300 text-moving-yellow focus:ring-moving-yellow"
				/>
				<Label
					htmlFor="consent"
					className="ml-3 block text-sm leading-6 text-pretty text-gray-700"
				>
					By checking this box, you agree to receive text messages from{" "}
					<Link
						target="_blank"
						href="/"
						className="underline text-gray-800 inline"
					>
						Premium Moving Services
					</Link>{" "}
					related to (conversational purposes) at the phone number
					provided above. You may reply <strong>STOP</strong> to opt-out
					at any time. Reply <strong>HELP</strong> for assistance.
					Messages and data rates may apply. Message frequency will vary.
					Learn more on our{" "}
					<Link
						target="_parent"
						href="/privacy-policy"
						className="underline text-gray-800 inline"
					>
						Privacy Policy Page
					</Link>{" "}
					and{" "}
					<Link
						target="_parent"
						className="underline text-gray-800 inline"
						href="/terms-and-conditions"
					>
						Terms and Conditions
					</Link>
				</Label>
			</Field>

			{/* Submit Button */}
			<div className="mt-6">
				<Button
					type="submit"
					className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition-colors"
				>
					Get Quote
				</Button>
			</div>
		</form>
	)
}

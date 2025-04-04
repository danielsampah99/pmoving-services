'use client'

import { Label, Input, Field } from "@headlessui/react";
import Link from 'next/link'
import { useState } from "react";


export const QuoteForm = () => {

	const [movingFrom, setMovingFrom] = useState<string>("")
	const [movingTo, setMovingTo] = useState<string>("")

	return (
		<div className="mt-10 bg-white text-black p-6 rounded-xl w-full max-w-3xl shadow-lg">
			<h2 className="text-xl font-bold mb-4">Get Your Free Estimate Now</h2>

			<div className="flex flex-col md:flex-row items-center gap-4">
				{/* Moving From */}
				<Field className="w-full relative">
					<Label className="block font-semibold mb-1">Starting Location:</Label>
					<Input
						type="text"
						placeholder="Enter Zip Code"
						value={movingFrom}
						onChange={event => setMovingFrom(event.target.value)}
						className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-background"
					/>
				</Field>

				{/* Moving To */}
				<Field className="w-full relative">
					<Label className="block font-semibold mb-1">Destination:</Label>
					<Input
						type="text"
						placeholder="Enter ZIP Code"
						value={movingTo}
						onChange={event => setMovingTo(event.target.value)}
						className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-background"
					/>
				</Field>
			</div>

			<Link
				href={`/free-quote?from=${movingFrom}&to=${movingTo}`}
				className="mt-5 block rounded-md shadow bg-background text-white px-6 py-3 w-full font-bold hover:bg-background-100 transition"
			>
				CONTINUE →
			</Link>
		</div>
	);
};

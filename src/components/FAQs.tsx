"use client";

import { useState } from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { motion } from "motion/react";

const faqs = [
	{
		question: "Where are you located?",
		answer: "We are located at XYZ street, ABC city.",
	},
	{
		question: "What are your working hours?",
		answer: "Our working hours are 9 AM - 6 PM, Monday to Saturday.",
	},
	{
		question: "How late in the day can I call for a same-day delivery?",
		answer: "You can call before 3 PM for same-day delivery.",
	},
	{
		question: "Ut enim ad minim veniam, quis nostrud",
		answer:
			"Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
	},
	{
		question: "Duis aute irure dolor in reprehenderit in voluptate",
		answer: "Velit esse cillum dolore eu fugiat nulla pariatur.",
	},
	{
		question: "Excepteur sint occaecat cupidatat non proident",
		answer: "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
	},
];

export default function FAQs() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="max-w-5xl mx-auto p-6">
			<h2 className="text-2xl font-semibold text-center mb-8 text-background">
				FAQs
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{faqs.map((faq, index) => (
					<motion.div
						key={index}
						className="bg-gradient-to-r from-yellow-50 to-yellow-100 shadow-md rounded-lg p-4 cursor-pointer hover:shadow-lg transition duration-300"
						onClick={() => toggleFAQ(index)}
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
					>
						<div className="flex justify-between items-center">
							<p className="font-medium text-lg text-background">
								{faq.question}
							</p>
							{openIndex === index ? (
								<MinusIcon className="w-6 h-6 text-background-100" />
							) : (
								<PlusIcon className="w-6 h-6 text-background-100" />
							)}
						</div>
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{
								opacity: openIndex === index ? 1 : 0,
								height: openIndex === index ? "auto" : 0,
							}}
							transition={{ duration: 0.3 }}
							className="mt-2"
						>
							<p className="text-gray-700 bg-white p-2 rounded-md shadow-sm">
								{faq.answer}
							</p>
						</motion.div>
					</motion.div>
				))}
			</div>
		</div>
	);
}

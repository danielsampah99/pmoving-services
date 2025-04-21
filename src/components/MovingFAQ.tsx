"use client";


import { ChevronDown } from "lucide-react";
import { cn } from "@/utils";
import { Disclosure, DisclosurePanel, DisclosureButton } from "@headlessui/react";

const faqs = [
	{
		question: "Get Started Early",
		answer:
			"Don't let procrastination win. Get an early start, sometimes planning a month in advance can assure a smooth transition and make your entire moving experience more enjoyable. Don’t wait until the last minute to start planning for moving day.",
	},
	{
		question: "Purge Purge Purge",
		answer:
			"Decluttering before your move can save time and effort. Get rid of unnecessary items and only pack what you truly need.",
	},
	{
		question: "Round Up All Good Boxes",
		answer:
			"Having sturdy and well-sized boxes can make a big difference in organizing your move efficiently. Label them properly for easy unpacking.",
	},
];

export const MovingFAQ = () => {
	return (
		<div className="max-w-3xl mx-auto py-12 px-4">
			{/* Header - unchanged */}

			{/* Fixed Accordion */}
			<div className="mt-8 space-y-4">
				{faqs.map((faq, index) => (
					<Disclosure key={index}>
						{({ open }) => (
							<div className="bg-gray-100 rounded-lg transition-colors hover:bg-gray-200/50">
								<DisclosureButton className="w-full px-4 py-3 text-left">
									<div className="flex justify-between items-center">
										<h3 className="text-lg font-semibold">{faq.question}</h3>
										<ChevronDown
											className={cn(
												"size-5 text-background transition-transform duration-200",
												open && "rotate-180",
											)}
										/>
									</div>
								</DisclosureButton>

								<DisclosurePanel className="px-4 pb-4 pt-2 text-gray-600">
									{faq.answer}
								</DisclosurePanel>
							</div>
						)}
					</Disclosure>
				))}
			</div>
		</div>
	);
};

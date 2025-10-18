import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { FaqItem } from './FaqItem'
import { Metadata } from "next";
import { BASE_URL } from "@/utils";

export type FaqItemType = {
	question: string;
	answer: string
}

const faqs: FaqItemType[] = [
	{
		question: "How do I book a move with Premium Moving Services?",
		answer:
			"You can us reach directly by calling 651-757-5135 or fill out our online quote form.",
	},
	{
		question: "We will come to you if you are within 50 miles of Saint Paul. ",
		answer:
			"A thorough assessment of the content to be moved and all surrounding factors. You will be given an estimated time and cost based the requested service. We will answer any questions or concerns to make sure everything is transparent.",
	},
	{
		question: "I have a problem with my move",
		answer:
			"Please contact us as soon as possible at 651-757-5135 or email: g1sackie@icloud.com",
	},
	{
		question: "What packing services do you offer?",
		answer:
			"Our experienced packers safely and efficiently pack boxes. We can provide all the packing supplies including:  Boxes, Packing tape, Shrink wrap, Mattress bags and more!",
	},
	{
		question: "How do I prepare before the movers moving?",
		answer:
			"Start your moving preparation well in advance and pay very close attention to small details. \nDeclutter your home.\n Create an inventory of all items to be moved. \n Clean and organize all items that will be packed and transported to your new home. \nUnplug all electrical appliances and electronics to be moved. \nArrange to be present on moving day",
	},
	{
		question: "Who should I notify of my moving?",
		answer:
			"A simple change of address is merely enough to get your mail forwarded. Also make sure, you notify: Family & friends. Uities, cable, phone and internet providers, Credit card and both health and insurance companies. Your child’s school and doctor office etc",
	},
];

export const metadata: Metadata = {
	title: "Frequently Asked Questions - Moving Assistance",
	description: "Get clear answers to your most common questions on pricing, scheduling, packing and more, for clear and precise information",
	openGraph: {
		type: "website",
		title: "Frequently Asked Questions - Moving Assistance",
		description: "Get clear answers to your most common questions on pricing, scheduling, packing and more, for clear and precise information",
		url: `${BASE_URL}/#faqs`
	}
}

export const FAQs = () => {
	return (
		<section id="faqs" className="bg-white">
			<div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:pt-10 pb-40">
				<div className="mx-auto max-w-4xl divide-y divide-gray-300">
					<h2 className="text-2xl font-bold leading-10 tracking-tight uppercase lg:text-3xl text-gray-900">
						Frequently asked questions
					</h2>
					<dl className="mt-10 space-y-6 divide-y divide-white/10">
						{faqs.map((faq) => (
							<FaqItem key={faq.question} faq={faq} />
						))}
					</dl>
				</div>
			</div>
		</section>
	);
};

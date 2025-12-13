import type { FC } from "react";
import Link from "next/link";

type FaqProps = {
	question: string;
	answer: string;
};

const faqList: FaqProps[] = [
	{
		question: "How far is considered a local move?",
		answer:
			"Generally under 50 miles or within the same metro area of Twin Cities (St. Paul & Minneapolis).",
	},
	{
		question: "Do movers empty dressers?",
		answer:
			"We recommend removing fragile or heavy items before your move date. Soft clothing is fine.",
	},
	{
		question: "Do movers take beds apart?",
		answer: "Yes, our crew handles disassembly and reassembly of basic beds.",
	},
	{
		question: "How long does a local move take?",
		answer:
			"Most 1–2 bedroom moves take 3–5 hours depending on stairs and packing needs.",
	},
	{
		question: "What’s the cheapest way to do Local moving?",
		answer: "Be fully packed, clear pathways, and reserve parking in advance.",
	},
];

export const LocalFaq = () => {
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
				<div className="lg:grid lg:grid-cols-12 lg:gap-8">
					<div className="lg:col-span-5">
						<h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
							Frequently asked questions
						</h2>
						<p className="mt-4 text-base/7 text-pretty text-gray-600">
							If you still have questions,&nbsp;
							<Link
								href="/contact-us"
								className="font-semibold text-yellow-400 hover:text-yellow-500"
							>
								contact us
							</Link>{" "}
							for a free estimate on movers Local moving cost and we’ll walk
							through every detail.
						</p>
					</div>
					<div className="mt-10 lg:col-span-7 lg:mt-0">
						<FaqList faqs={faqList} />
					</div>
				</div>
			</div>
		</div>
	);
};

const FaqList: FC<{ faqs: FaqProps[] }> = ({ faqs }) => {
	return (
		<dl className="space-y-10">
			{faqs.map((faq, faqIndex) => (
				<FaqItem key={faqIndex} question={faq.question} answer={faq.answer} />
			))}
		</dl>
	);
};

const FaqItem: FC<FaqProps> = ({ question, answer }) => {
	return (
		<div>
			<dt className="text-base/7 font-semibold text-gray-900">{question}</dt>
			<dd className="mt-2 text-base/7 text-gray-600">{answer}</dd>
		</div>
	);
};

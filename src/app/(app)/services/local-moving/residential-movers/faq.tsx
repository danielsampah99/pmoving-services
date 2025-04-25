import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from "@headlessui/react";
import { PlusIcon, MinusIcon } from "@heroicons/react/16/solid";
import { FC } from "react";

export type FAQType = {
	question: string;
	answer: string;
};

export type FAQProps = {
	faqs: FAQType[];
};

export const FAQs: FC<FAQProps> = (props) => {
	return (
		<div className="mx-auto max-sm:px-6 max-w-4xl py-6 sm:py-8 lg:px-8 lg:py-10 divide-y divide-gray-900/10">
			<h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">
				Frequently asked questions
			</h2>
			<dl className="mt-5 space-y-6 divide-y divide-gray-900/10">
				{props.faqs.map((faq) => (
					<Disclosure key={faq.question} as="div" className="py-3">
						<dt>
							<DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900">
								<span className="text-base font-semibold leading-7">
									{faq.question}
								</span>
								<span className="ml-6 flex h-7 items-center">
									<PlusIcon
										aria-hidden="true"
										className="size-6 group-data-[open]:hidden"
									/>
									<MinusIcon
										aria-hidden="true"
										className="size-6 [.group:not([data-open])_&]:hidden"
									/>
								</span>
							</DisclosureButton>
						</dt>
						<DisclosurePanel as="dd" className="mt-2 pr-12">
							<p className="text-base leading-7 text-gray-600">{faq.answer}</p>
						</DisclosurePanel>
					</Disclosure>
				))}
			</dl>
		</div>
	);
};

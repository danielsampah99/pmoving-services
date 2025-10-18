'use client';

import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel,
} from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { FaqItemType } from "./FAQs";

export const FaqItem = ({ faq }: { faq: FaqItemType }) => {
	return (
		<Disclosure as="div" className="pt-6">
			<dt>
				<DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-700">
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
				<p className="text-base leading-7 text-gray-500">
					{faq.answer}
				</p>
			</DisclosurePanel>
		</Disclosure>
	)
}

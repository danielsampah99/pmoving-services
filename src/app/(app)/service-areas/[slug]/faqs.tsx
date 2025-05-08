import type { ServiceArea } from "@/payload-types";
import type { FC } from "react";

export type FaqProps = Pick<ServiceArea, "faqs"> & {
	title: string;
};

export const Faqs: FC<FaqProps> = (props) => {
	return (
		<div className="mx-auto max-w-7xl divide-y divide-gray-900/10 py-8 sm:py-10 lg:px-8 lg:py-12">
			<h2 className="text-xl lg:text-2xl font-bold leading-10 tracking-tight text-gray-900 capitalize">{`Frequently asked questions About Moving Cost In ${props.title}`}</h2>
			<dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
				{Array.isArray(props.faqs) && props.faqs.length > 0 &&
					props.faqs?.map((faq) => (
						<div key={faq.id} className="py-4 lg:grid lg:grid-cols-12 lg:gap-8">
							<dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">
								{faq.question}
							</dt>
							<dd className="mt-4 lg:col-span-7 lg:mt-0 lg:mb-1">
								<p className="text-base leading-7 text-gray-600">
									{faq.answer}
								</p>
							</dd>
						</div>
					))}
			</dl>
		</div>
	);
};

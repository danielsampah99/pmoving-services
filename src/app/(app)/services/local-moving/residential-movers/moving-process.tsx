import { CheckIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import type { FC } from "react";

export type Expectation = {
	id: number;
	description: string;
};

type ProcessImage = {
	src: string;
	alt: string;
};

export type MovingProcessProps = {
	title: string;
	description: string;
	expectations: Expectation[];
	image: ProcessImage;
};

export const MovingProcess: FC<MovingProcessProps> = (props) => {
	return (
		<div className="mx-auto grid max-w-2xl grid-cols-1 py-5 lg:py-10 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
			<div className="lg:ml-auto lg:pl-4 lg:pt-4">
				<div className="lg:max-w-lg">
					<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						{props.title}
					</p>
					<p className="mt-6 text-base leading-8 text-gray-600">
						{props.description}
					</p>
					<dl className="mt-10 max-w-xl space-y-2 text-base leading-7 text-gray-600 lg:max-w-none">
						{props.expectations.map((expectation) => (
							<div key={expectation.id} className="relative pl-9">
								<dt className="inline text-gray-900">
									<CheckIcon
										aria-hidden="true"
										className="absolute left-1 top-1 size-5 fill-yellow-500"
									/>
								</dt>
								<dd className="inline">{expectation.description}</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
			<div className="flex items-start justify-end lg:order-first">
				<Image
					alt={props.image.alt}
					src={props.image.src}
					width={2432}
					height={1442}
					className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10"
				/>
			</div>
		</div>
	);
};

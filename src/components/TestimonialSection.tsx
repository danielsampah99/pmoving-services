import { FlatIcon } from "./flaticons";
import { AffordableIcon } from "./icons/affordable-icon";
import { InsuranceIcon } from "./icons/insurance-icon";
import { ReliableIcon } from "./icons/reliable-icon";
import { TrustIcon } from "./icons/trust-icon";
import type { FC } from "react";

export const Testimonial = () => {
	return (
		<div className="bg-white pb-8 pt-12">
			<div className="bg-moving-gray pb-10 sm:pb-24 xl:pb-0">
				<div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
					<div className="-mt-8 w-full max-w-2xl sm:max-w-lg sm:-mt-16 md:-mt-8 xl:-mb-8 xl:w-96 xl:flex-none">
						<div className="relative aspect-[2/1] h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
							<div className="absolute inset-0 size-full rounded-2xl p-6 bg-moving-yellow object-cover shadow-2xl">
								<img
									src="/bbb-logo.png"
									alt="Better Business Bureau's Logo"
									className="size-full fill-white z-[9000]"
								/>
							</div>
						</div>
					</div>
					<div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:p-8">
						<figure className="relative isolate pt-6 sm:pt-12 xl:pt-4">
							<blockquote className="text-xl font-semibold leading-8 text-white sm:text-xl sm:leading-9">
								<ul className="flex flex-row flex-wrap items-center justify-between w-full gap-x-2">
									<NameAndIcon text="Trusted" icon={TrustIcon} />
									<NameAndIcon text="Affordable" icon={AffordableIcon} />
									<NameAndIcon text="Reliable" icon={ReliableIcon} />
								</ul>
							</blockquote>
							<figcaption className="mt-8 text-base flex flex-row flex-wrap border-t border-solid sm:text-xl border-gray-200 pt-4 items-center justify-between gap-y-1 text-white">
								<NameAndIcon text="Licensed" icon={InsuranceIcon} />
								<NameAndIcon text="Insured" icon={InsuranceIcon} />
								<NameAndIcon text="Bonded" icon={InsuranceIcon} />
							</figcaption>
						</figure>
					</div>
				</div>
			</div>
		</div>
	);
};

export type NameAndIconProps = {
	text: string;
	icon: FlatIcon;
};

export const NameAndIcon: FC<NameAndIconProps> = (props) => {
	return (
		<div className="group inline-flex hover:text-moving-yellow transition-colors delay-150 duration-300 items-center justify-normal gap-x-1 selection:bg-moving-yellow">
			<span>
				<props.icon className="size-6 group-hover:size-7 group-hover:fill-moving-yellow fill-white" />
			</span>
			<span>{props.text}</span>
		</div>
	);
};

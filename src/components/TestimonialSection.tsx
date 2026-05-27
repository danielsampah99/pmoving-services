import { cn } from "@/utils";
import type { FlatIcon } from "./flaticons";
import { AffordableIcon } from "./icons/affordable-icon";
import { InsuranceIcon } from "./icons/insurance-icon";
import { ReliableIcon } from "./icons/reliable-icon";
import { TrustIcon } from "./icons/trust-icon";
import type { FC } from "react";

export const Testimonial = () => {
	return (
		<div className="bg-white pt-24 pb-16 sm:pt-32 sm:pb-24 xl:pb-32">
			<div className="bg-moving-gray pb-20 sm:pb-24 xl:pb-0">
				<div className="mx-auto flex max-w-7xl flex-col items-center gap-x-8 gap-y-10 px-6 sm:gap-y-8 lg:px-8 xl:flex-row xl:items-stretch">
					<div className="-mt-16 w-full max-w-2xl xl:-mb-8 xl:w-96 xl:flex-none">
						<div className="relative aspect-2/1 h-full md:-mx-8 xl:mx-0 xl:aspect-auto">
							<div className="absolute inset-0 size-full h-65 rounded-2xl p-3 bg-moving-yellow object-cover shadow-2xl">
								<img
									src="/bbb-logo.png"
									alt="Better Business Bureau's Logo"
									className="h-60 w-auto mx-auto z-9000 object-cover"
								/>
							</div>
						</div>
					</div>
					<div className="w-full max-w-2xl xl:max-w-none xl:flex-auto xl:px-8 xl:py-6">
						<figure className="relative isolate py-3 space-y-16 lg:space-y-8 sm:pt-3 xl:pt-4">
							<blockquote className="text-xl font-semibold leading-8 text-white sm:text-xl sm:leading-9">
								<ul className="flex flex-row flex-wrap items-center justify-between w-full gap-x-2">
									<NameAndIcon text="Trusted" icon={TrustIcon} />
									<NameAndIcon text="Affordable" icon={AffordableIcon} />
									<NameAndIcon text="Reliable" icon={ReliableIcon} />
								</ul>
							</blockquote>
							<blockquote className="text-xl font-semibold leading-8 text-white sm:text-xl sm:leading-9 ">
								<ul className="flex flex-wrap items-center justify-between w-full gap-2 text-moving-yellow">
									<NameAndIcon
										text="Licensed"
										icon={InsuranceIcon}
										iconClassName="fill-moving-yellow"
									/>
									<NameAndIcon
										text="Bonded"
										icon={InsuranceIcon}
										iconClassName="fill-moving-yellow"
									/>
									<NameAndIcon
										text="Insured"
										icon={InsuranceIcon}
										iconClassName="fill-moving-yellow"
									/>
								</ul>
							</blockquote>
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
	iconClassName?: string;
};

export const NameAndIcon: FC<NameAndIconProps> = (props) => {
	return (
		<div className="group flex flex-col text-sm lg:text-base gap-1 items-center justify-start gap-x-1 selection:bg-moving-yellow">
			<div>
				<props.icon className={cn("size-10 fill-white", props.iconClassName)} />
			</div>

			<div>{props.text}</div>
		</div>
	);
};

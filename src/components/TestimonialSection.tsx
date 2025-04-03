import type { FlatIcon } from "./flaticons";
import { AffordableIcon } from "./icons/affordable-icon";
import { InsuranceIcon } from "./icons/insurance-icon";
import { ReliableIcon } from "./icons/reliable-icon";
import { TrustIcon } from "./icons/trust-icon";
import type { FC } from "react";
import Link from 'next/link'

export const Testimonial = () => {
	return (
		<div className="bg-white py-12 sm:py-16" id="testimonials">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mb-10 flex justify-center">
					<p className="relative rounded-full bg-gray-50 px-4 py-1.5 text-sm leading-6 text-gray-600 ring-1 ring-inset ring-gray-900/5">
						<Link href="#" target='_blank' className="font-semibold text-yellow-600">
							<span aria-hidden="true" className="absolute text-sm inset-0" /> View our higly-rated BBB certification here{' '}
							<span aria-hidden="true" className="max-sm:hidden">&rarr;</span>
						</Link>
					</p>
				</div>
				<div className="mx-auto grid max-w-lg grid-cols-3 items-center justify-between gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none">
					<NameAndIcon text="Trusted" icon={TrustIcon} />
					<NameAndIcon text="Affordable" icon={AffordableIcon} />
					<NameAndIcon text="Reliable" icon={ReliableIcon} />

					<NameAndIcon text="Licensed" icon={InsuranceIcon} />
					<NameAndIcon text="Insured" icon={InsuranceIcon} />
					<NameAndIcon text="Bonded" icon={InsuranceIcon} />
				</div>
			</div>
		</div >
	);
};

export type NameAndIconProps = {
	text: string;
	icon: FlatIcon;
};

export const NameAndIcon: FC<NameAndIconProps> = (props) => {
	return (
		<div className="group inline-flex flex-col lg:flex-row lg:gap-x-1.5 transition-colors lg:items-center lg:justify-center delay-150 duration-300 gap-y-1 selection:bg-moving-yellow">
			<span>
				<props.icon className="h-16 w-12 lg:size-12 group-hover:fill-moving-yellow/50 fill-moving-yellow" />
			</span>
			<span className="text-slate-800 text-base">{props.text}</span>
		</div>
	);
};

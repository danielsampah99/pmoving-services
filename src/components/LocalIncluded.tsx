import {
	CheckCircleIcon,
	InformationCircleIcon,
} from "@heroicons/react/20/solid";
import { FC } from "react";

type FeatureProps = {
	title: string;
	description: string;
};

const features: FeatureProps[] = [
	{
		title: "Professional Loading & Unloading",
		description:
			"We handle all heavy lifting—from couches and appliances to moving boxes and fragile items—using professional tools to ensure safe and efficient loading and unloading.",
	},
	{
		title: "Full-Service Packing Options",
		description:
			"Choose from full-home packing supplies, single-room packing, or fragile-only packing. For added flexibility, you can also opt for a moving container, which allows you to pack and transport your belongings at your own pace. We bring the packing supplies and handle the details as one of the reliable full service moving companies in St. Paul & Minneapolis.",
	},
	{
		title: "Furniture Disassembly & Reassembly",
		description:
			"Beds, dressers, sectionals, tables—we take them apart and reassemble at your new house/apartment.",
	},
	{
		title: "Protection of Floors, Railings & Entryways",
		description:
			"Our moving services include floor protections especially important in older homes around Summit Hill, Como Park, or Northeast Minneapolis.",
	},
	{
		title: "Stress-Free Transportation",
		description:
			"Clean trucks with insurance, organized loading, and safe transport of your belongings through the Twin Cities to your new space, all timed perfectly to fit your schedule.",
	},
];

export const LocalIncluded = () => {
	return (
		<div className="bg-white px-6 py-32 lg:px-8">
			<div className="mx-auto max-w-3xl text-base/7 text-gray-700">
				<p className="text-base/7 font-semibold text-moving-yellow">
					Local moving company in St. Paul & Minneapolis
				</p>
				<h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
					What Local Moving Includes
				</h1>
				<p className="mt-6 text-xl/8">
					Many customers ask, <strong>“What does Local moving include?”</strong>{" "}
					At Premium Moving Services, our Local moving packages cover everything
					needed to make your relocation easy. Our movers handle every job, big
					or small, with professionalism and care:
				</p>
				<div className="mt-10 max-w-2xl">
					<ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
						{features.map((feature, featureIdx) => (
							<FeatureItem
								title={feature.title}
								description={feature.description}
								key={featureIdx}
							/>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
};

const FeatureItem: FC<FeatureProps> = ({
	title,
	description,
}: FeatureProps) => {
	return (
		<li className="flex gap-x-3">
			<CheckCircleIcon
				aria-hidden="true"
				className="mt-1 size-5 flex-none text-gray-600"
			/>
			<span className="text-justify sm:text-pretty">
				<strong className="font-semibold text-gray-900">{title}</strong>&nbsp;
				{description}
			</span>
		</li>
	);
};

import { CheckCircleIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

const movingChecklist: { id: number; description: string }[] = [
	{
		id: 1,
		description: "Furniture protection with padding and shrink wrap",
	},
	{
		id: 2,
		description: "Packing services/unpacking services",
	},
	{
		id: 3,
		description: "Tight staircases, elevators, and narrow entryways",
	},
	{
		id: 4,
		description: "Heavy items like dressers, sectionals, and appliances",
	},
	{
		id: 5,
		description: "Efficient loading that minimizes time and cost",
	},
	{
		id: 6,
		description: "Interstate moving solutions tailored to your needs",
	},
];

export const ResidentialProfessionalMovers = () => (
	<div className="mx-auto max-w-7xl">
		<div className="mx-auto flex flex-col gap-16 py-16 sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-5 xl:gap-x-20 xl:px-10">
			<img
				alt="Experienced, trained, and fully equipped movers focused on protecting your belongings and executing efficient residential moves."
				src="/api/media/file/local-movers-1.jpeg"
				fetchPriority="high"
				className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
			/>
			<div className="w-full flex-auto">
				<h2 className="text-xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
					Professional Movers
				</h2>
				<p className="mt-6 text-base text-pretty text-gray-500">
					Anyone can rent a truck. That’s not what you’re paying for. As a
					household moving company, our movers are trained professionals with
					moving trucks not day labor. Every crew is equipped to handle:
				</p>
				<ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 text-gray-600 sm:grid-cols-2">
					{movingChecklist.map((benefit) => (
						<li key={benefit.id} className="flex gap-x-3 items-center">
							<CheckCircleIcon
								aria-hidden="true"
								className="size-5 flex-none"
							/>
							{benefit.description}
						</li>
					))}
				</ul>
				<div className="mt-10 flex text-gray-700">
					Professional movers provide liability coverage and use professional
					equipment to minimize the risk of damage during relocation. We show up
					uniformed, prepared, and ready to work. No wasted time. No excuses.
					Just execution as a full service moving company
				</div>
			</div>
		</div>
	</div>
);

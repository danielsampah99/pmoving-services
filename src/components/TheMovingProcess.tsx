import {
	CurrencyDollarIcon,
	InboxIcon,
	PhoneIcon,
	TruckIcon,
	StarIcon,
} from "@heroicons/react/24/outline";
import type { HeroIconType } from "./HeroIcon";
import type { LucideIcon } from "lucide-react";
import type { FC } from "react";
import Link from "next/link";

type Process = {
	name: string;
	description: string;
	href: string;
	icon: HeroIconType | LucideIcon;
};

const processes: Process[] = [
	{
		name: "Free Quote",
		description:
			"Get a FREE quote from our top-rated moving company in Twin Cities. A moving specialist will help you plan your move, take your inventory, and then send you a free, no-obligation quote.",
		href: "#",
		icon: PhoneIcon,
	},
	{
		name: "Before you move",
		description:
			"Moving is all about planning. We can help you plan your move and we have some valuable tips and advice on how to organize your move so it goes smoothly.",
		href: "#",
		icon: InboxIcon,
	},
	{
		name: "Moving Day",
		description:
			"Our movers will arrive ready and on time and ready to load our moving trucks. ",
		href: "#",
		icon: TruckIcon,
	},
	{
		name: "After Moving",
		description:
			"After your move, we calculate how much you owe. Then we will bill you for the remaining balance.",
		href: "#",
		icon: CurrencyDollarIcon,
	},
	{
		name: "Leave a Review",
		description:
			"We want to hear from you and so do other customers. Feel free to leave us review, we strive to do the best job we can do and appreciate hearing from you.",
		href: "#",
		icon: StarIcon,
	},
];

export const TheMovingProcess: FC = () => {
	return (
		<div className="bg-white py-12 sm:py-16">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						{/* The Moving Process */}
						Moving Tips
					</h2>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						What the premium moving service from Top Packers and Movers is like
					</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
						{processes.map((process) => (
							<Link
								key={process.name}
								href={process.href}
								className="group flex gap-x-2 flex-row justify-start hover:text-gray-700 rounded-xl hover:bg-gray-50 shadow-sm p-2"
							>
								<dt className="text-base font-semibold leading-7 text-gray-900">
									<div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
										<process.icon
											aria-hidden="true"
											className="size-6 text-white"
										/>
									</div>
								</dt>
								<dd className="flex flex-auto gap-y-1 flex-col">
									<h3 className="text-gray-800 font-semibold text-base leading-7">
										{process.name}
									</h3>
									<p className="flex-auto text-justify text-gray-500 pb-2 text-sm">
										{process.description}
									</p>
								</dd>
							</Link>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
};

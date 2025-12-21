import Link from "next/link";
import type { FC, ReactNode } from "react";
import { GoogleMapsIcon } from "@/components/icons/google-maps-icon";
import { MapPinIcon } from "@heroicons/react/16/solid";

const minneapolisCities: CityItemProps[] = [
	{
		id: 1,
		city: (
			<>
				<Link href="https://www.uptownminneapolis.com/">Uptown</Link> & Whittier
			</>
		),
		description: "Tight parking, high-density apartments",
	},
	{
		id: 2,
		city: <Link href="https://northloop.org/">North Loop</Link>,
		description: "Freight elevator coordination",
	},
	{
		id: 3,
		city: (
			<>
				<Link href="https://www.minneapolis.org/neighborhoods/south/linden-hills/">
					Linden Hills
				</Link>{" "}
				& Fulton
			</>
		),
		description: "Larger homes with multi-room packing needs",
	},
	{
		id: 4,
		city: "Longfellow Nokomis & Powderhorn",
		description: "Alley-access logistics",
	},
	{
		id: 5,
		city: (
			<Link href="https://www.minneapolis.org/neighborhoods/downtown">
				Downtown Minneapolis
			</Link>
		),
		description: "High-rise loading docks and reservation windows",
	},
];

const stPaulCities: CityItemProps[] = [
	{
		id: 6,
		city: (
			<>
				<Link href="https://www.visitsaintpaul.com/things-to-do/neighborhoods/highland-park/">
					Highland Park
				</Link>{" "}
				& Mac-Groveland
			</>
		),
		description: "Multi-level homes with delicate stair navigation",
	},
	{
		id: 7,
		city: (
			<>
				<Link href="https://saintpaulhistorical.com/items/show/154">
					Frogtown
				</Link>{" "}
				& <Link href="https://paynephalen.org/">Payne-Phalen</Link>
			</>
		),
		description: "Walkups and tight interior layouts",
	},
	{
		id: 8,
		city: (
			<>
				<Link href="https://www.visitsaintpaul.com/things-to-do/neighborhoods/cathedral-hill/">
					Cathedral Hill
				</Link>{" "}
				&{" "}
				<Link href="https://www.trulia.com/n/mn/saint-paul/summit-hill/84203/">
					Summit Hill
				</Link>
			</>
		),
		description: "Protecting antique woodwork and custom flooring",
	},
	{
		id: 9,
		city: (
			<Link href="https://www.visitsaintpaul.com/things-to-do/neighborhoods/midway/">
				Midway
			</Link>
		),
		description: "Mixed residential and commercial moving",
	},
	{
		id: 10,
		city: (
			<Link href="https://www.stpaul.gov/departments/parks-and-recreation/como-regional-park">
				Como Park
			</Link>
		),
		description:
			"Family home transitions, including downsizing or moving to smaller homes",
	},
];

const localExpertiseData: CityCardProps[] = [
	{
		id: 1,
		title: "Minneapolis Local Moving Expertise",
		subTitle: "Every Minneapolis neighborhood has its own moving personality:",
		href: "/minneapolis-movers",
		cities: minneapolisCities,
		footer:
			"From condos to classic bungalows, we tailor our plan to your address.",
	},
	{
		id: 2,
		title: "St. Paul Local Moving Expertise",
		subTitle:
			"St. Paul’s historic homes and steep streets require extra skill:",
		href: "/st-paul-movers",
		cities: stPaulCities,
		footer:
			"Our team handles most people tricky moves with the care their home or business deserves.",
	},
];

export const LocalExpertise = () => {
	return (
		<section className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10 bg-white">
			<div className="prose mx-auto w-full max-w-none prose-h3:text-center">
				<h3>Neighborhood Expertise Across the Twin Cities</h3>
				<p className="w-full">
					Your neighborhood affects your move more than you think. Parking,
					loading zones, staircases, and city permits all matter. Premium Moving
					Services is experienced in all of them.
				</p>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-5">
				{localExpertiseData.map((item) => (
					<CityCard
						key={item.id}
						id={item.id}
						title={item.title}
						href={item.href}
						subTitle={item.subTitle}
						cities={item.cities}
						footer={item.footer}
					/>
				))}
			</div>
		</section>
	);
};

type CityCardProps = {
	id: number;
	title: string;
	subTitle: string;
	href: string;
	cities: CityItemProps[];
	footer: string;
};

type CityItemProps = {
	id: number;
	city: ReactNode;
	description: string;
};

const CityCard: FC<CityCardProps> = ({
	title,
	subTitle,
	href,
	cities,
	footer,
}) => {
	return (
		<div className="flex flex-col gap-y-2 w-full ring-1 ring-gray-300 shadow-sm rounded-xl">
			<div className="p-4">
				<div className="flex flex-row gap-x-2 items-center">
					<Link href={href} className="text-lg text-gray-800 font-semibold">
						{title}
					</Link>
				</div>

				<p className="text-gray-500 mt-1 text-base">{subTitle}</p>
			</div>

			<ul className="px-4 pb-4 list-none space-y-3">
				{cities.map((item) => (
					<CityItem
						key={item.id}
						id={item.id}
						city={item.city}
						description={item.description}
					/>
				))}
			</ul>

			<p className="mt-2 text-gray-500 font-normal text-base italic border-t border-solid border-gray-300 px-4 py-3">
				{footer}
			</p>
		</div>
	);
};

const CityItem: FC<CityItemProps> = ({ city, description }) => {
	return (
		<div className="sm:flex group/city">
			<div className="mb-2 shrink-0 sm:mr-4 sm:mb-0">
				<MapPinIcon
					aria-hidden="true"
					className="size-8 ml-1.5 fill-gray-400 group-hover/city:fill-gray-600  transition-colors ease-in duration-300 delay-75"
				/>
			</div>
			<div>
				<h4 className="text-base font-medium group-hover/city:underline">
					{city}
				</h4>
				<p className="mt-1 text-gray-500">{description}</p>
			</div>
		</div>
	);
};

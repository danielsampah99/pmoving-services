import type { HeroIconType } from "@/components/HeroIcon";
import { GoogleMapsIcon } from "@/components/icons/google-maps-icon";
import type { ServiceArea } from "@/payload-types";
import {
	ShieldCheckIcon,
	TruckIcon,
	UsersIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

export type HeroProps = Pick<ServiceArea, "mapImage"> & {
	title: string;
	description: string;
	mapUrl: string | null;
};

const serviceAreaStats = [
	{
		name: "Trainees",
		description: "Over 500 experts trained by us",
		icon: UsersIcon,
	},
	{
		name: "Certifications",
		description: "Licensed, Insured and Bonded",
		icon: ShieldCheckIcon,
	},
	{
		name: "Total Moves",
		description: "Over 10,000 successful moves made",
		icon: TruckIcon,
	},
];

export const Hero: FC<HeroProps> = (props) => {
	return (
		<div className="relative isolate overflow-hidden py-10 sm:rounded-3xl lg:rounded-none sm:py-12 lg:py-12">
			<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
				<div className="lg:row-start-2 lg:max-w-md">
					<div className="flex flex-col sm:flex-row gap-y-3 sm:gap-x-5 sm:items-baseline">
						{props.mapUrl && (
							<Link
								href={props.mapUrl}
								target="_blank"
								title={`Find ${props.title} on the map`}
							>
								<GoogleMapsIcon aria-hidden="false" className="size-12" />
							</Link>
						)}
						<h2 className="text-3xl font-black tracking-tight text-black sm:text-4xl">
							{props.title} Movers
						</h2>
					</div>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						{props.description}
					</p>
				</div>
				{typeof props.mapImage === "object" && props.mapImage?.url ? (
					<Image
						src={props.mapImage.url}
						alt={props.mapImage.alt}
						title={`${props.title} on the map`}
						width={2432}
						height={1442}
						priority={true}
						className="relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-h-[32rem] lg:max-w-none"
					/>
				) : (
					<img
						alt={`${props.title} on the map`}
						title={`${props.title} on the map`}
						src="https://lh3.googleusercontent.com/gps-cs-s/AB5caB93hWPktDRZNWT5tJspjW9MvbsHE5VYXO6HF_Yir7NkQyvk1jLNBiqYy6HsccAojvz_3xI64Zlv_ss4Y6zePZScwnLH5hJHMFbJPBvoKmGnYskxTsxyVsX1WRGerJD1cQgx8G_EEA=w408-h543-k-no"
						width={2432}
						height={1442}
						className="relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-[64rem] lg:max-h-[32rem] lg:max-w-none"
					/>
				)}

				<div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-gray-400 lg:pt-10">
					<ServiceAreaStats stats={serviceAreaStats} />
				</div>
			</div>
		</div>
	);
};

export type ServiceAreaStatsProps = {
	stats: {
		name: string;
		description: string;
		icon: HeroIconType;
	}[];
};

export const ServiceAreaStats: FC<ServiceAreaStatsProps> = (props) => {
	return (
		<dl className="max-w-xl space-y-8 text-base leading-7 text-gray-700 lg:max-w-none">
			{props.stats.map((area) => (
				<div key={area.name} className="relative">
					<dt className="ml-9 inline-block font-semibold text-gray-700">
						<area.icon
							aria-hidden="true"
							className="absolute left-1 top-1 size-5 lg:size-6 stroke-moving-gray fill-moving-yellow"
						/>
						{area.name}
					</dt>{" "}
					<dd className="inline">{area.description}</dd>
				</div>
			))}
		</dl>
	);
};

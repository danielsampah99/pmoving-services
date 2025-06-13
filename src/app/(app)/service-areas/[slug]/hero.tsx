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

export const OldHero: FC<HeroProps> = (props) => {
	return (
		<div className="relative isolate overflow-hidden py-10 sm:rounded-3xl lg:rounded-none sm:py-12 lg:py-12">
			<div className="mx-auto grid max-w-2xl grid-flow-col lg:grid-cols-2 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:items-center lg:gap-y-0">
				<div className="row-span-1 lg:max-w-md lg:row-span-2 col-span-1">
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

				<div className="row-span-1">
					{typeof props.mapImage === "object" && props.mapImage?.url ? (
						<Image
							src={props.mapImage.url}
							alt={props.mapImage.alt}
							title={`${props.title} on the map`}
							fill={true}
							priority={true}
							quality={100}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 64rem"
							className="relative object-contain object-center -z-20 max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg-w-[32rem] lg:max-w-none lg:max-h-[32rem]"
						/>
					) : (
						<Image
							alt={`${props.title} on the map`}
							title={`${props.title} on the map`}
							src="https://lh3.googleusercontent.com/gps-cs-s/AB5caB93hWPktDRZNWT5tJspjW9MvbsHE5VYXO6HF_Yir7NkQyvk1jLNBiqYy6HsccAojvz_3xI64Zlv_ss4Y6zePZScwnLH5hJHMFbJPBvoKmGnYskxTsxyVsX1WRGerJD1cQgx8G_EEA=w408-h543-k-no"
							fill={true}
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 64rem"
							className="relative -z-20 min-w-full max-w-xl rounded-xl shadow-xl ring-1 ring-white/10 lg:row-span-4 lg:w-md lg:max-h-[32rem] lg:max-w-none"
						/>
					)}
				</div>

				<div className="row-span-1 max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-gray-400 lg:pt-10">
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

export const Hero: FC<HeroProps> = (props) => {
	return (
		<div className="bg-white">
			<div className="relative isolate overflow-hidden">
				<div className="mx-auto max-w-7xl px-6 py-10 sm:py-12 lg:px-8">
					<div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
						<div className="max-w-2xl flex items-center justify-start flex-wrap gap-x-1.5 lg:gap-x-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl lg:col-span-2 xl:col-auto">
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
						<div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
							<p className="text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
								{props.description}
							</p>
							<div className="mt-10 flex items-center gap-x-6 md:border-t border-solid border-gray-200 lg:pt-10">
								<ServiceAreaStats stats={serviceAreaStats} />
							</div>
						</div>
						{typeof props.mapImage === "object" && props.mapImage?.url ? (
							<img
								alt={props.mapImage.alt}
								src={props.mapImage.url}
								className="mt-10 aspect-6/5 w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2"
							/>
						) : (
							<img
								alt=""
								src="/rochester-office.webp"
								className="mt-10 aspect-6/5 w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
							/>
						)}
					</div>
				</div>
				<div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32" />
			</div>
		</div>
	);
};

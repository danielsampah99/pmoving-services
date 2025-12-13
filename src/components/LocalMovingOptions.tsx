import Image from "next/image";
import Link from "next/link";
import type { ReactNode, FC } from "react";

type OptionProps = {
	id: number;
	title: string;
	description: ReactNode;
	imageUrl: string;
	imageAlt: string;
};

const options: OptionProps[] = [
	{
		id: 1,
		title: "Standard Local Moving (Truck + Crew)",
		description: (
			<p>
				Your most popular option: a full crew and a moving truck to complete
				your relocation from start to finish. Perfect for family homes,
				multi-room moves, and apartment transitions. Find out which crew size
				best fits your move{" "}
				<Link href="/services/long-distance-moving">here</Link>
			</p>
		),
		imageUrl: "/api/media/file/Deshun%20and%20Drake.webp",
		imageAlt: "Local movers loading a truck",
	},
	{
		id: 2,
		title: "Labor-Only Local Moving",
		description: (
			<p>
				For customers who already have their own rental truck from{" "}
				<Link href="https://www.uhaul.com/">U-Haul, </Link>Penske, Budget, or{" "}
				<Link href="https://www.pods.com/?gbraid=0AAAAADuL_aBsHTQPPtxTV5KY56B-Nvd0Y&gclid=CjwKCAiA55rJBhByEiwAFkY1QOLzDzdRQrZTtaSv-fC-gcUdlsERTqcSyoejnt8S7eofvBhOTyEtzxoC_4EQAvD_BwE">
					PODS
				</Link>{" "}
				container, we offer dependable moving{" "}
				<Link href="https://pmovingservices.com/services/specialty-moving/labor-only">
					labor-only service
				</Link>{" "}
				for heavy furniture or gun safes/pianos. You can easily hire our local
				movers for labor-only services such as packing, loading, or unloading,
				making your move more convenient. Great for DIY homeowners or renters
				who still want professional loading/unloading or packing/unpacking of
				their belongings.
			</p>
		),
		imageUrl: "/api/media/file/local-movers-loading-up-a-storage-unit.webp",
		imageAlt: "Local Movers Loading Up A Storage Unit",
	},
	{
		id: 3,
		title: "Packing & Unpacking Services",
		description: (
			<p>
				Whether you need kitchen packing/unpacking, fragile-only protection, or
				full-home assistance, our team handles every detail. We serve customers
				throughout Highland Park,{" "}
				<Link href="/service-areas/movers-maplewood-mn">Maplewood</Link>,
				Uptown, and beyond.
			</p>
		),
		imageUrl: "/api/media/file/packing-supplies-for-local-moving.webp",
		imageAlt: "Packing supplies for local moving",
	},
	{
		id: 4,
		title: "Apartment & Condo Moving",
		description: (
			<p>
				We manage moves in second-floor walkups in Frogtown, elevator buildings
				downtown, and large complexes in Bloomington, Eagan, and Shoreview. When
				scheduling moves in apartment or condo buildings, we offer the option
				for extra time to ensure you have the flexibility needed for loading,
				unloading, or dealing with building access requirements.
			</p>
		),
		imageUrl: "/api/media/file/loading-a-truck-at-an-apartment.webp",
		imageAlt: "Local movers loading a truck at an apartment",
	},
	{
		id: 5,
		title: "Commercial & Small Office Local Moves",
		description: (
			<p>
				Moving offices in the North Loop, Midway, or Downtown St. Paul? We
				relocate workstations, IT equipment, to new space or storage unit safely
				and efficiently.
			</p>
		),
		imageUrl: "/api/media/file/local-movers-on-a-commercial-move.webp",
		imageAlt: "Local movers on a commercial move",
	},
];

export const LocalMovingOptions = () => {
	return (
		<section className="bg-gray-100 py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl sm:text-center">
					<h2 className="text-34l font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl xl:whitespace-nowrap">
						Full Service Local Moving Options
					</h2>
					<p className="mt-6 text-lg/8 text-gray-600">
						Here are some of the options we offer in relation to local moving
						services
					</p>
				</div>
				<ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none">
					{options.map((option) => (
						<ServiceOption
							key={option.id}
							id={option.id}
							imageUrl={option.imageUrl}
							imageAlt={option.imageAlt}
							title={option.title}
							description={option.description}
						/>
					))}
				</ul>
			</div>
		</section>
	);
};

const ServiceOption: FC<OptionProps> = ({ imageAlt, imageUrl, ...props }) => {
	return (
		<li className="flex flex-col gap-6 xl:flex-row">
			<div className="w-full sm:w-52 relative flex-none aspect-4/5">
				<Image
					alt={imageAlt ?? "Local moving"}
					src={imageUrl}
					className="rounded-2xl object-cover"
					fill={true}
					loading="lazy"
				/>
			</div>
			<div className="flex-auto">
				<h3 className="text-lg/8 font-semibold tracking-tight text-gray-900">
					{props.title}
				</h3>
				<div className="mt-6 text-base/7 text-justify text-gray-600 [&_a]:underline [&_a]:text-moving-yellow [&_a]:font-semibold">
					{props.description}
				</div>
			</div>
		</li>
	);
};

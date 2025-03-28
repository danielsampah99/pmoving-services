import { MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";
import type { FC } from "react";
import Image from "next/image";
import Link from "next/link";

export const officeLocations: OfficeLocation[] = [
	{
		id: "maplewood",
		name: "Maplewood Moving Company",
		addressLine1: "949 Schaller Dr S",
		addressLine2: "Maplewood, MN 55119",
		phone: "(651) 757-5135",
		href: "https://duckduckgo.com/?t=ffab&q=949+Schaller+Dr+S+Maplewood%2C+MN+55119&iaxm=directions&source=directions&end=949+Schaller+Dr+S%2C+Saint+Paul%2C+MN++55119%2C+United+States&transport=automobile",
		image: "/lakeville-office.webp",
	},
	{
		id: "minneapolis",
		name: "Minneapolis Moving Company",
		addressLine1: "2514 Plymouth Ave N,",
		addressLine2: "Minneapolis, MN 55411",
		phone: "(651) 757-5135",
		href: "https://www.google.com/maps/dir/5.5427477,-0.2565425/2514+Plymouth+Ave+N,+Minneapolis,+MN+55411,+USA/@1.8464989,-132.8681329,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x52b333a87d602d8f:0xa6dc41e3800dfcf6!2m2!1d-93.3127048!2d44.9917309?entry=ttu&g_ep=EgoyMDI1MDMyNC4wIKXMDSoASAFQAw%3D%3D",
		image: "/minneapolis-office.webp", //
	},
	{
		id: "lakeville",
		name: "Lakeville Moving Company",
		addressLine1: "7652 215th St W ",
		addressLine2: "Lakeville, MN 55044",
		phone: "(651) 757-5135",
		href: "https://www.google.com/maps/dir/5.5427477,-0.2565425/7652+215th+St+W,+Lakeville,+MN+55044,+USA/@1.8343927,-132.8159556,3z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x87f648350a0ed4db:0xdfc8a98e3bed4564!2m2!1d-93.219706!2d44.6374986?entry=ttu&g_ep=EgoyMDI1MDMyNC4wIKXMDSoASAFQAw%3D%3D",
		image: "/lakeville-office.webp",
	},
	{
		id: "rochester",
		name: "Rochester Moving Company",
		addressLine1: "829 3rd Ave SE",
		addressLine2: "285 Rochester, MN 55904",
		phone: "(651) 757-5135",
		href: "https://www.google.com/maps/dir//829+3rd+Ave+SE+%23285,+Rochester,+MN+55904,+United+States/@44.0144407,-92.5423433,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x87f9e1eacd6816a7:0xa2e7061db820904a!2m2!1d-92.4599426!2d44.0144703?entry=ttu&g_ep=EgoyMDI1MDMyNC4wIKXMDSoASAFQAw%3D%3D",
		image: "/rochester-office.webp",
	},
];

export const OurLocations = () => {
	return (
		<div className="isolate overflow-hidden bg-moving-gray">
			<div className="mx-auto max-w-7xl px-6 pb-96 pt-12 text-center sm:pt-32 lg:px-8">
				<div className="mx-auto max-w-4xl">
					<h2 className="text-base font-semibold leading-7 text-yellow-400">
						Our Locations
					</h2>
					<p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-5xl">
						Find our offices in the following places
					</p>
				</div>
				<div className="relative mt-6">
					<svg
						viewBox="0 0 1208 1024"
						className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
					>
						<ellipse
							cx={604}
							cy={512}
							rx={604}
							ry={512}
							fill="url(#yellow-gradient)"
						/>
						<defs>
							<radialGradient id="yellow-gradient">
								<stop stopColor="#FFD700" />
								<stop offset={1} stopColor="#FFFF00" />
							</radialGradient>
						</defs>
					</svg>
				</div>
			</div>
			<div className="flow-root bg-white pb-6 sm:pb-10">
				<div className="-mt-80">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto grid max-w-md grid-cols-1 gap-8 md:max-w-7xl md:grid-cols-2 lg:grid-cols-4">
							{officeLocations.map((location) => (
								<OfficeLocationCard key={location.id} location={location} />
							))}
							<MoreInfo />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export type OfficeLocation = {
	id: string;
	name: string;
	phone: string;
	addressLine1: string;
	addressLine2: string;
	image: string;
	href: string;
};

export const OfficeLocationCard: FC<{ location: OfficeLocation }> = ({
	location,
}) => {
	return (
		<div className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-xl ring-1 md:rounded-2xl ring-gray-900/10 sm:px-4 sm:py-6">
			<div>
				<h3
					id={location.id}
					className="text-base whitespace-nowrap capitalize font-semibold leading-7 text-yellow-600"
				>
					{location.name}
				</h3>
				<div className="mt-4 flex items-baseline rounded-lg overflow-hidden gap-x-2">
					<Image
						src={location.image}
						alt={`${location.name.toLowerCase()} Street View`}
						className="size-full rounded-lg"
						height={250}
						width={250}
					/>
				</div>

				<ul
					role="list"
					className="mt-10 space-y-4 text-sm leading-6 text-gray-600"
				>
					<li className="flex items-center justify-start gap-x-1.5 capitalize">
						<MapPinIcon
							aria-hidden="true"
							className="size-5 shrink-0 fill-yellow-400"
						/>
						<div className="inline-flex items-start gap-y-0.5 flex-col">
							<span>{location.addressLine1}</span>
							<span>{location.addressLine2}</span>
						</div>
					</li>
					<Link
						href={`tel:${location.phone}`}
						className="flex gap-x-3 capitalize hover:underline hover:underline-offset-2 hover:text-gray-800"
					>
						<PhoneIcon
							aria-hidden="true"
							className="size-5 flex-none fill-yellow-400"
						/>
						{location.phone}
					</Link>
				</ul>
			</div>
			<Link
				href={location.href}
				target="_blank"
				aria-describedby={`${location.addressLine1} ${location.addressLine2}`}
				className="mt-8 block rounded-md bg-yellow-400 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
			>
				Get Directions
			</Link>
		</div>
	);
};

export const MoreInfo: FC = () => {
	return (
		<div className="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 md:col-span-2 lg:col-span-4 lg:flex-row lg:items-center">
			<div className="lg:min-w-0 lg:flex-1">
				<h3 className="text-lg font-semibold leading-8 tracking-tight text-yellow-500">
					Business Hours
				</h3>
				<p className="mt-1 text-base leading-7 text-gray-600">
					Monday to Sunday | 8AM to 6PM
				</p>
			</div>
			<Link
				href="mailto:info@pmovingservices.com"
				className="rounded-md px-3.5 py-2 text-sm font-semibold leading-6 text-yellow-500 ring-1 ring-inset ring-yellow-200 hover:ring-yellow-300 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
			>
				Send us an email{" "}
				<span aria-hidden="true">info@pmovingservices.com &rarr;</span>
			</Link>
		</div>
	);
};

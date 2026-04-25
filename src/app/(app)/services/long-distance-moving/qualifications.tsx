import { CheckCircleIcon, CheckIcon } from "@heroicons/react/16/solid"
import Link from "next/link"
import {
	ArchiveBoxIcon,
	ArrowPathIcon,
	BuildingOfficeIcon,
	CalendarDaysIcon,
	CloudArrowUpIcon,
	Cog6ToothIcon,
	FingerPrintIcon,
	GlobeAltIcon,
	HomeModernIcon,
	InboxStackIcon,
	LockClosedIcon,
	ServerIcon,
} from '@heroicons/react/20/solid'
import type { ReactNode } from "react"

type RichData = { id: number, name: string, description: ReactNode }

const qualificationChecklist = [
	'Route and fuel planning',
	'Inventory tracking and protection',
	'Delivery window coordination',
	'A great work environment',
	'Compliance with interstate transport regulations',
	'Higher level packing services for extended travel',
]

const serviceApproachData: RichData[] = [
	{
		id: 1,
		name: "Careful Loading & Inventory Tracking",
		description: "Every item is inventoried, padded, and strategically loaded for cross-country stability."
	},
	{
		id: 2,
		name: "Secure Transportation",
		description: "Air-ride trucks, trained drivers, and mapped routes ensure safe delivery."
	},
	{
		id: 3,
		name: "Unloading, Placement & Reassembly",
		description: "We place furniture where it belongs and reassemble what we disassembled."
	},
	{
		id: 4,
		name: "Storage Solutions During Your Move",
		description: (
			<>
				Short-term and long-term{" "}
				<Link href="/services/storage-services" className="text-yellow-600 underline">
					storage
				</Link>{" "}
				available in secure facilities when timing doesn’t align.
			</>
		)
	}
]

const trustCheckListData: { id: number, name: ReactNode }[] = [
	{
		id: 2,
		name: "Comprehensive services",
	},
	{
		id: 3,
		name: "Trained crews (not day labor)",
	},
	{
		id: 1,
		name: "Dedicated moving consultant from booking to delivery",
	},
	{
		id: 4,
		name: "Accurate, transparent pricing, no surprise add-ons",
	},
	{
		id: 5,
		name: "Get an accurate estimate with our moving cost calculator for reliable cost projections",
	},
	{
		id: 6,
		name: "Real-time communication during transit",
	},
	{
		id: 7,
		name: "Flexible storage solutions if your new home isn’t ready",
	},
	{
		id: 8,
		name: (
			<span>
				<Link href="/services/local-moving/pack-and-unpack" className="text-yellow-600 underline">
					Professional packing
				</Link>{" "}
				designed for multi-day transport
			</span>
		)
	}
]


export const Qualifications = () => (
	<div className="mx-auto max-w-7xl">
		<div className="mx-auto flex flex-col gap-16 py-16 sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-5 xl:gap-x-20 xl:px-10">
			<img
				alt="Our Long Distance Movers"
				src="/api/media/file/local-movers-1.jpeg"
				fetchPriority="high"
				className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
			/>
			<div className="w-full flex-auto">
				<h2 className="text-xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
					What Qualifies as a Long-Distance Move?
				</h2>
				<p className="mt-6 text-base text-pretty text-gray-500">
					A move is considered long distance when it crosses state lines or exceeds 400 miles compared to <Link href='/services/local-moving'>local moves.
					</Link>  These relocations require:
				</p>
				<ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 text-gray-600 sm:grid-cols-2">
					{qualificationChecklist.map((benefit) => (
						<li key={benefit} className="flex gap-x-3 items-center">
							<CheckCircleIcon aria-hidden="true" className="size-5 flex-none" />
							{benefit}
						</li>
					))}
				</ul>
				<div className="mt-10 flex text-gray-700">
					This is where experience matters most, which our premium long distance movers have.
				</div>
			</div>
		</div>
	</div>
)


export const FullServiceApproach = () => (
	<div className="bg-white py-24 sm:py-32">
		<div className="mx-auto max-w-7xl px-6 lg:px-8">
			<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-5">
				<div className="col-span-2">
					<h2 className="text-base/7 font-semibold text-moving-yellow">Professional Packing & Protection</h2>
					<p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
						Our Full-Service Approach to Interstate Relocation
					</p>
					<p className="mt-6 text-base/7 text-gray-600">
						We use industry-grade moving materials and proven methods to prevent shifting, pressure damage, and vibration wear during transit.
					</p>
				</div>
				<dl className="col-span-3 grid grid-cols-1 gap-x-8 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:gap-y-16">
					{serviceApproachData.map((sa) => (
						<div key={sa.id} className="relative pl-9">
							<dt className="font-semibold text-gray-900">
								<CheckIcon aria-hidden="true" className="absolute top-1 left-0 size-5 text-yellow-500" />
								{sa.name}
							</dt>
							<dd className="mt-2">{sa.description}</dd>
						</div>
					))}
				</dl>
			</div>
		</div>
	</div>
)


export const TrustUs = () => (
	<div className="mx-auto max-w-7xl">
		<div className="mx-auto flex lg:flex-row-reverse flex-col gap-16 py-16 sm:p-8 lg:mx-0 lg:max-w-none lg:items-center lg:py-5 xl:gap-x-20 xl:px-10">
			<img
				alt="Our Long Distance Movers"
				src="/api/media/file/Deshun%20unloadingc.JPG"
				fetchPriority="high"
				className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
			/>
			<div className="w-full flex-auto">
				<h2 className="text-xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
					Why Minnesota Homeowners Trust Premium Moving Services
				</h2>
				<p className="mt-6 text-base text-pretty text-gray-500">
					Unlike national van lines that operate on volume, we operate on precision and communication.  <br />
					What sets us apart:
				</p>
				<ul className="mt-6 grid grid-cols-1 gap-x-8 gap-y-3 text-base/7 text-gray-600 sm:grid-cols-2">
					{trustCheckListData.map((tcl) => (
						<li key={tcl.id} className="flex gap-x-3 items-center">
							<CheckCircleIcon aria-hidden="true" className="size-5 flex-none" />
							{tcl.name}
						</li>
					))}
				</ul>
				<div className="mt-10 flex text-gray-700">
					We don’t hand your move off to a third party. We execute it.				</div>
			</div>
		</div>
	</div>
)

const pricingData = [
	{
		name: 'Distance traveled',
		description: 'The total mileage between your pickup and delivery locations directly impacts fuel, labor, and time costs.',
		icon: GlobeAltIcon,
	},
	{
		name: 'Weight and volume of items',
		description: 'The total mass and space your belongings occupy determine the size of the truck and the crew needed.',
		icon: ArchiveBoxIcon,
	},
	{
		name: 'Packing level requested',
		description: 'Whether you opt for self-packing, partial, or full-service packing by our team influences labor and material costs.',
		icon: InboxStackIcon,
	},
	{
		name: 'Access challenges',
		description: 'Factors like multiple flights of stairs, long walks to the truck, or elevator availability at both locations can affect labor time.',
		icon: BuildingOfficeIcon,
	},
	{
		name: 'Storage services',
		description: 'Temporary or long-term storage solutions needed during your move will add to the overall cost.',
		icon: HomeModernIcon,
	},
	{
		name: 'Timing and delivery window',
		description: 'The flexibility of your moving dates and the desired timeframe for delivery can impact pricing, especially during peak seasons.',
		icon: CalendarDaysIcon,
	},
]

export const Pricing = () => (
	<div className="bg-white py-24 sm:py-32">
		<div className="mx-auto max-w-7xl px-6 lg:px-8">
			<div className="mx-auto max-w-2xl sm:text-center">
				<h2 className="text-base/7 font-semibold text-moving-yellow">Budget and Pricing</h2>
				<p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl sm:text-balance">
					How Pricing Works for Long Distance Moving
				</p>
				<p className="mt-6 text-lg/8 text-gray-600">
					These are several factors that will influence your moving costs:
				</p>
			</div>
		</div>
		<div className="relative overflow-hidden pt-16">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<img
					alt="Using iPhone calculator for long distance moving costs"
					src="/api/media/file/calculating-moving-costs.webp"
					width={2432}
					height={800}
					className="mb-[-12%] lg:h-[90svh] rounded-xl ring-1 shadow-2xl ring-gray-900/10"
				/>
				<div aria-hidden="true" className="relative">
					<div className="absolute -inset-x-20 bottom-0 bg-linear-to-t from-moving-dark pt-[7%]" />
				</div>
			</div>
		</div>
		<div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
			<dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
				{pricingData.map((pd) => (
					<div key={pd.name} className="relative pl-9">
						<dt className="inline font-semibold text-gray-900">
							<pd.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-moving-yellow" />
							{pd.name}
						</dt>{' '}
						<dd className="inline">{pd.description}</dd>
					</div>
				))}
			</dl>
		</div>
	</div>
)

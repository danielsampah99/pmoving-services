import { GoogleMapsIcon } from "@/components/icons/google-maps-icon";
import Link from "next/link";


const cities: { name: string, description: string, href: string }[] = [
	{
		name: 'North Loop',
		href: '#',
		description:
			'navigating tight loading zones near Target Field and ensuring a well-coordinated transition to your new space.',
	},
	{
		name: 'Downtown St. Paul',
		href: '/service-areas/movers-saint-paul-mn',
		description: 'coordinated moves near the State Capitol complex, with expertise makes minimizing disruption when relocating to a new destination',
	},
]

export const MinnesotaSpecific = () => (
	<div className="overflow-hidden bg-white py-24 sm:py-32">
		<div className="mx-auto max-w-7xl px-6 lg:px-8">
			<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
				<div className="lg:ml-auto lg:pt-4 lg:pl-4">
					<div className="lg:max-w-lg">
						<h2 className="text-base/7 font-semibold text-moving-yellow">
							Specific Advantage
						</h2>
						<p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
							Minnesota
						</p>
						<p className="mt-6 text-lg/8 text-gray-600">
							Assessing the new location's layout is a key part of our method,
							ensuring your organization is set up smoothly and efficiently.
							This isn’t generic moving. This is operational continuity.
						</p>
						<dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
							{cities.map((city) => (
								<div key={city.name} className="relative pl-9">
									<dt className="inline font-semibold text-gray-900">
										<GoogleMapsIcon
											aria-hidden="true"
											className="absolute top-1 left-1 size-5"
										/>
										<Link href={city.href} className="hover:underline">{city.name}</Link>
									</dt>{" "}
									<dd className="inline">{city.description}</dd>
								</div>
							))}
						</dl>
					</div>
				</div>
				<div className="flex items-start justify-end lg:order-first">
					<img
						alt="Night view of Downtown St. Paul from apartment balcony t"
						src="/api/media/file/downtown-st-paul.webp"
						width={2432}
						height={1442}
						className="w-3xl max-w-none max-h-108 rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-228"
					/>
				</div>
			</div>
		</div>
	</div>
);


export const BusinessRelocation = () => (
	<div className="overflow-hidden bg-white py-24 sm:py-32">
		<div className="mx-auto max-w-7xl px-6 lg:px-8">
			<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
				<div className="flex items-start justify-end lg:order-last">
					<img
						alt="Helping move a commercial equipment at The Minnesota Science Museum"
						src="/api/media/file/minneosta-science-museum.webp"
						width={2432}
						height={1442}
						className="w-3xl max-w-none max-h-108 rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-228"
					/>
				</div>

				<div className="lg:ml-auto lg:pt-4 lg:pl-4">
					<div className="lg:max-w-lg">
						<h2 className="text-base/7 font-semibold text-moving-yellow selection:bg-moving-dark">
							Commercial moves done right — less downtime, no disruptions.
						</h2>
						<p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
							Business Relocation
						</p>
						<p className="mt-6 text-base/6 text-gray-600">
							Our expertise in business moving ensures that every component of your corporate move is handled efficiently and with minimal disruption. Our proven track record makes a significant difference, as our skilled team uses specialized equipments and strategies to manage even the most complex moves. We develop custom relocation plans tailored to your company’s needs, which are essential for maintaining productivity and allowing you to stay focused on your core organization priorities.
						</p>
						<p className="mt-2 text-base/6 text-gray-600">
							Moving professionals like office movers create efficient schedules and often plan moves outside of normal business hours to minimize disruption to your daily workflow. These efficient corporate moving packages are designed to ensure operation continuity and minimize employee ideal time throughout the entire relocation procedure.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
);

const choices: { name: string; description: string }[] = [
	{
		name: "Proven Commercial Experience",
		description: "Residential movers can't handle corporate complexity — you need a crew that's done this at scale.",
	},
	{
		name: "Insurance & Compliance",
		description: "A Certificate of Insurance isn't optional. Most buildings won't let an uninsured crew through the door.",
	},
	{
		name: "Clear Pricing Structure",
		description: "No vague estimates, no surprise charges on move day — just transparent pricing from the start.",
	},
	{
		name: "Operational Planning",
		description: "A professional mover shows up with a plan. If they can't outline the move in advance, they're improvising with your business.",
	},
	{
		name: "Communication Systems",
		description: "A dedicated move coordinator who knows your project beats a random dispatcher every time.",
	},
];


export const HowToChoose = () => (
	<div className="bg-white py-24 sm:py-32">
		<div className="mx-auto max-w-7xl px-6 lg:px-8">
			<div className="mx-auto lg:text-pretty">
				<h2 className="text-base/7 font-semibold text-moving-yellow lg:text-center">Choose a Reliable Corporate Moving Company</h2>
				<p className="mt-2 text-4xl font-semibold lg:text-center tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
					What Actually Matters (Not the Fluff)
				</p>
				<p className="mt-6 text-lg/8 text-gray-600 lg:text-justify [&>a]:underline [&>a]:font-semibold [&>a]:text-gray-900">
					If you’re evaluating movers, here’s the truth: Choosing a provider for corporate change of property address is not the same as hiring a <Link href="/services/local-moving/residential-movers" >residential</Link> mover. Commercial move requires different tools, specialized skills, and strategies to ensure a smooth transition. Organizations often rely on movers to handle valuable assets and confidential materials with care and discretion. Our membership in the Commercial Relocation Network (CRN) demonstrates our commitment to quality and reliability, as this prestigious organization includes only top-tier commercial and industrial relocation firms.
				</p>
			</div>
			<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
				<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
					{choices.map((choice, choiceIdx) => (
						<div key={choice.name} className="relative pl-16">
							<dt className="text-base/7 font-semibold text-gray-900">
								<div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-moving-gray">
									<span className=" text-lg text-white">{choiceIdx + 1}</span>
								</div>
								{choice.name}
							</dt>
							<dd className="mt-2 text-base/7 text-gray-600">{choice.description}</dd>
						</div>
					))}
				</dl>
			</div>
		</div>
	</div>
)

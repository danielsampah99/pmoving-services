import Image from "next/image";
import Link from "next/link";

export const StorageServicesPlans = () => {
	return (
		<>
			<div className="relative bg-transparent mt-24 sm:mt-32 max-w-7xl mx-auto">
				<div className="relative h-auto overflow-hidden bg-yellow-600 md:absolute md:left-0 md:h-[70dvh] md:w-1/3 lg:w-1/2 lg:rounded-xl">
					<Image
						alt="Premium Moving Services - Warehouse"
						fill={true}
						src="/moving-warehouse.png"
						className="size-full object-cover"
					/>
				</div>
				<div className="relative mx-auto max-w-7xl py-24 lg:px-8">
					<div className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pr-0 lg:pl-24 xl:pl-32">
						<p className="mt-2 text-pretty lg:text-justify text-sm font-semibold tracking-tight text-gray-500 sm:text-sm">
							Every item is professionally wrapped, labeled, and
							inventoried before entering our monitored,
							climate-controlled facilities. This protects
							belongings from temperature fluctuations, moisture,
							and unnecessary handling. Adjustable wire shelving
							is used to enhance visibility and airflow within our
							storage settings. There are no rigid long-term
							contracts forcing you into more space than you need,
							your plan evolves with you.
						</p>
						<p className="mt-6 text-base/7 text-gray-700 text-pretty lg:text-justify">
							Clients in{" "}
							<a href="https://northloop.org/">
								North Loop, Minneapolis
							</a>
							, near{" "}
							<a href="https://www.mlb.com/twins/ballpark">
								Target Field
							</a>
							, and{" "}
							<a href="https://www.visitsaintpaul.com/things-to-do/neighborhoods/lowertown/">
								Lowertown, St. Paul
							</a>
							, close to{" "}
							<a href="https://www.chsfield.com/">CHS Field</a>,
							benefit from our deep understanding of urban access,
							loading zones, and building logistics, allowing for
							efficient, damage-free service. Heavy-duty racking
							systems are also utilized to increase storage
							capacity in our warehouses without expanding square
							footage especially for oversized items and
							commercial projects.
						</p>
						<div className="mt-8">
							<Link
								href="/free-quote"
								className="inline-flex rounded-md bg-yellow-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-yellow-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
							>
								Request a quote
							</Link>
						</div>
					</div>
				</div>
			</div>
			<Tiers />
		</>
	);
};

const tiers = [
	{
		name: "Small Spaces",
		description:
			"Off-site storage designed for apartments, condos, townhomes and businesses, ideal for seasonal rotation and maximizing livable/work space.",
		href: "/free-quote",
		highlights: [
			{
				id: "1",
				description: (
					<p>
						Living in a smaller home doesn't mean living with
						clutter. Organizing limited space can be challenging,
						making multipurpose spaces essential in small homes
						where every inch must serve multiple functions.
						Apartments, condos, and townhomes often lack adequate
						storage for seasonal or occasional-use items. Our
						storage services are ideal for urban living, helping
						clients maintain comfort and organization options
						without overcrowding their homes.
					</p>
				),
			},
			{
				id: "2",
				description: (
					<p>
						Residents near Uptown Minneapolis, around Bde Maka Ska,
						and Summit Hill in St. Paul, near the Cathedral of Saint
						Paul, commonly use off-site storage to rotate belongings
						throughout the year. Winter clothing, patio furniture,
						sports equipment, and extra household items stay
						protected until they're needed again.
					</p>
				),
			},
			{
				id: "3",
				description: (
					<p>
						The result is a cleaner, more functional living space
						without giving up the things that matter to you. Narrow
						bookshelves and hooks can help create multipurpose
						spaces and keep items off the floor, maximizing both
						storage and organization in compact environments.
					</p>
				),
			},
		],
	},
	{
		name: "Home Storage",
		description:
			"White-glove home storage services for renovations, downsizing, staging, and estate transitions professionally packed and inventoried.",
		href: "/free-quote",
		highlights: [
			{
				id: "1",
				description: (
					<p>
						Home storage should feel like an extension of
						professional moving, not a do-it-yourself project. Our
						white-glove home storage service is designed for
						homeowners navigating renovations, downsizing, estate
						transitions, or home staging.
					</p>
				),
			},
			{
				id: "2",
				description: (
					<p>
						Our crews carefully pack, protect, and document
						furniture, décor, and household goods so everything
						remains organized and secure. Clear labeling and
						inventory tracking ensure easy retrieval when you're
						ready for easy access without the frustration of
						searching through boxes, or units. Using bins or baskets
						to organize supplies and belongings by family member or
						type further streamlines the process and maximizes
						organization.
					</p>
				),
			},
			{
				id: "3",
				description: (
					<p>
						This service allows your home to stay functional and
						uncluttered while your belongings are safely stored
						off-site. Modular and vertical storage solutions,
						including under-bed storage, can improve accessibility
						and make the most of available space during transitions.
					</p>
				),
			},
		],
	},
	{
		name: "Small Items",
		description:
			"Secure, organized storage for documents, collectibles, décor, and valuables carefully handled, catalogued and stored for stress-free, easy retrieval whenever you need it.",
		href: "/free-quote",
		highlights: [
			{
				id: "1",
				description: (
					<p>
						Smaller belongings often hold the greatest personal or
						financial value. Important documents, collectibles,
						keepsakes, artwork, and decor deserve the same level of
						care as larger furnishings. Mounting small cubes or
						rectangular shelf units on walls can help clear off the
						floor and maintain a tidy environment.
					</p>
				),
			},
			{
				id: "2",
				description: (
					<p>
						We store small items using organized shelving systems
						that reduce handling and allow for efficient retrieval.
						Each item is documented during intake, providing peace
						of mind and ensuring accountability throughout the
						storage period. Incorporating open shelves can provide
						easy access to frequently used items in small spaces.
					</p>
				),
			},
			{
				id: "3",
				description: (
					<p>
						Whether you're protecting valuables during a transition
						or simply reclaiming space at home, our process ensures
						everything remains safe, accessible, and accounted for.
						Art can also serve as both decorative wall decor and
						functional storage, such as artwork that doubles as a
						fold-down desk or storage unit.
					</p>
				),
			},
		],
	},
];

const Tiers = () => {
	return (
		<div className="bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-4xl px-6 max-lg:text-center lg:max-w-7xl lg:px-8">
				<h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-950 sm:text-6xl lg:text-pretty">
					Storage tiers and sizes
				</h1>
				<p className="mt-6 max-w-2xl text-lg font-medium text-pretty text-gray-600 max-lg:mx-auto sm:text-xl/8">
					Your storage needs aren’t static, and your storage plan
					shouldn’t be either. Our storage space options are designed
					for both residential and commercial to grow or scale down as
					your situation changes, whether you’re storing a few items
					like seasonal clothing, decorative items or the contents of
					an entire home.
				</p>
			</div>
			<div className="relative pt-32 sm:pt-24">
				<div className="absolute inset-x-0 top-48 bottom-0 bg-[radial-gradient(circle_at_center_center,#7775D6,#592E71,#030712_70%)] lg:bg-[radial-gradient(circle_at_center_150%,#7775D6,#592E71,#030712_70%)]" />
				<div className="relative mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
					<div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
						{tiers.map((tier) => (
							<div
								key={tier.name}
								className="-m-2 grid grid-cols-1 rounded-[2rem] ring-1 shadow-[inset_0_0_2px_1px_#ffffff4d] ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md"
							>
								<div className="grid grid-cols-1 rounded-[2rem] p-2 shadow-md shadow-black/5">
									<div className="rounded-3xl bg-white p-10 pb-9 ring-1 shadow-2xl ring-black/5">
										<h2 className="text-sm font-semibold text-yellow-400">
											{tier.name}{" "}
											<span className="sr-only">
												plan
											</span>
										</h2>
										<p className="mt-2 text-sm/6 text-justify text-gray-600">
											{tier.description}
										</p>

										<div className="mt-8">
											<Link
												href={tier.href}
												aria-label={`Start a free trial on the ${tier.name} plan`}
												className="inline-block lg:w-full rounded-md bg-yellow-500 px-3.5 py-2 text-center text-sm/6 font-semibold text-white shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
											>
												Get a free quote
											</Link>
										</div>
										<div className="mt-8">
											<ul className="mt-3 space-y-3">
												{tier.highlights.map(
													(highlight) => (
														<li
															key={highlight.id}
															className="group flex items-start gap-4 text-sm/6 text-gray-600"
														>
															{
																highlight.description
															}
														</li>
													),
												)}
											</ul>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

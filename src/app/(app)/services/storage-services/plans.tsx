import Image from "next/image";
import Link from "next/link";

export const StorageServicesPlans = () => {
	return (
		<div className="relative bg-transparent mt-10">
			<div className="relative h-80 overflow-hidden bg-yellow-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
				<Image
					alt="Premium Moving Services - Warehouse"
					fill={true}
					src="/moving-warehouse.png"
					className="size-full object-cover"
				/>
				<svg
					viewBox="0 0 926 676"
					aria-hidden="true"
					className="absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]"
				>
					<path
						d="m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z"
						fill="url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)"
						fillOpacity=".4"
					/>
					<defs>
						<linearGradient
							id="60c3c621-93e0-4a09-a0e6-4c228a0116d8"
							x1="926.392"
							x2="-109.635"
							y1=".176"
							y2="321.024"
							gradientUnits="userSpaceOnUse"
						>
							<stop stopColor="#776FFF" />
							<stop offset={1} stopColor="#FF4694" />
						</linearGradient>
					</defs>
				</svg>
			</div>
			<div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
				<div className="pr-6 pl-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pr-0 lg:pl-24 xl:pl-32">
					<h2 className="text-xs font-semibold text-gray-500">
						Your storage needs aren’t static, and your storage plan
						shouldn’t be either. Our storage space options are
						designed for both residential and commercial to grow or
						scale down as your situation changes, whether you’re
						storing a few items like seasonal clothing, decorative
						items or the contents of an entire home.
					</h2>
					<p className="mt-6 text-pretty lg:text-justify text-sm font-semibold tracking-tight text-gray-500 sm:text-sm">
						Every item is professionally wrapped, labeled, and
						inventoried before entering our monitored,
						climate-controlled facilities. This protects belongings
						from temperature fluctuations, moisture, and unnecessary
						handling. Adjustable wire shelving is used to enhance
						visibility and airflow within our storage settings.
						There are no rigid long-term contracts forcing you into
						more space than you need, your plan evolves with you.
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
						systems are also utilized to increase storage capacity
						in our warehouses without expanding square footage
						especially for oversized items and commercial projects.
					</p>
					<div className="mt-8">
						<Link
							href="/free-quote"
							className="inline-flex rounded-md bg-yellow-400/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-yellow-500/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-400"
						>
							Request a quote
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

import Link from "next/link";

export const CorporateMovingIntro = () => (
	<div className="bg-white py-24 sm:py-32">
		<div className="mx-auto max-w-7xl px-6 lg:px-8">
			<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
				<p className="text-base/7 font-semibold text-moving-yellow">
					Introduction
				</p>
				<h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
					What is Corporate Relocation
				</h1>
				<div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base/7 text-gray-700 lg:max-w-none lg:grid-cols-2">
					<div>
						<p>
							As a leading commercial moving company, we brings professional
							expertise and extensive experience to every project, serving
							companies of all sizes with tailored solutions. Our team of
							skilled commercial movers and office movers is committed to
							delivering the highest standards of professionalism and
							reliability.
						</p>
						<p className="mt-8">
							Corporate relocation isn’t about moving desks, it’s about
							protecting revenue, timelines, and reputation. At Premium Moving &
							Storage, we execute high-stakes business moves with precision,
							speed, and zero chaos. Effective communication with your moving
							team and involving your staff in the workflow are crucial for a
							seamless transition and operation continuity.
						</p>
					</div>
					<div>
						<p>
							Whether you’re relocating a corporate office, scaling operations,
							or transitioning between facilities, our entire experienced team
							works hard to efficiency and professionalism, utilizing extensive
							resources to handle every aspect of the move. Corporate moves
							include logistics, planning, and support for relocating employees
							and business assets, with professional moving specialist, ensuring
							every item is packed, transported, and reassembled with precision.
							Predictable pricing and logistical skill maximize efficiency and
							minimize employee downtime.
						</p>
						<p className="mt-8">
							The reputation of a moving organization can influence your
							decision, choosing the right partner makes the difference between
							a smooth transition and costly operational disruption. Many
							workplace moving companies are part of larger networks, enhancing
							their resources and service capabilities. Our trusted professional
							experts often work during weekends or off-peak hours to minimize
							disruption to operations. A successful corporate move requires
							safe handling and careful execution to avoid costly delay
						</p>
					</div>
				</div>
				<div className="mt-10 flex">
					<Link
						href="/free-quote"
						className="rounded-md bg-moving-yellow px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-moving-yellow/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-moving-yellow/80"
					>
						Get started
					</Link>
				</div>
			</div>
		</div>
	</div>
);

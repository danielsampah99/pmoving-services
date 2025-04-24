import Link from "next/link";

export const RequestQuote = () => {
	return (
		<div className="relative isolate overflow-hidden bg-moving-gray">
			<div className="py-6 sm:py-10">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
						Ready to Move?
					</h2>
					<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
						Get your personalized moving quote today and experience a
						stress-free move with our professional residential moving services.
						No obligation, just peace of mind.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<Link
							href="/free-quote"
							className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white"
						>
							Request A Quote
						</Link>
						<Link
							href="/contact-us"
							className="text-sm font-semibold leading-6 text-white"
						>
							Contact us <span aria-hidden="true">→</span>
						</Link>
					</div>
				</div>
			</div>
			<svg
				viewBox="0 0 1024 1024"
				aria-hidden="true"
				className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
			>
				<circle
					r={512}
					cx={512}
					cy={512}
					fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
					fillOpacity="0.9"
				/>
				<defs>
					<radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
						<stop stopColor="#FFFFFF" />
						<stop offset={1} stopColor="#FFFFFF" />
					</radialGradient>
				</defs>
			</svg>
		</div>
	);
};

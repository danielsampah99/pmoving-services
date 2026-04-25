import Link from "next/link";

export const CTA = () => (
	<div className="flex items-center flex-row justify-center py-24 w-full">
		<div className="relative isolate flex-1 overflow-hidden bg-moving-dark w-full px-6 py-24 text-center shadow-2xl">
			<h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
				A move across state lines is more than logistics
			</h2>
			<p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-300">
				It’s planning, protection, timing, and trust. <br />
				<Link href="/" className="text-moving-yellow font-semibold whitespace-nowrap hover:underline"> At Premium Moving Services</Link>, we specialize in helping Minnesota families and businesses relocate anywhere in the country with clarity, care, and precise coordination.
			</p>
			<div className="mt-10 flex items-center justify-center gap-x-6">
				<Link
					href="/free-quote"
					className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
				>
					Get started
				</Link>
				<Link href="#faqs" className="text-sm/6 font-semibold text-white">
					Learn more <span aria-hidden="true">→</span>
				</Link>
			</div>
			<svg
				viewBox="0 0 1024 1024"
				aria-hidden="true"
				className="absolute top-1/2 left-1/2 -z-10 size-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
			>
				<circle r={512} cx={512} cy={512} fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
				<defs>
					<radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
						<stop stopColor="#ffd00d" />
						<stop offset={1} stopColor="#ffd000" />
					</radialGradient>
				</defs>
			</svg>
		</div>
	</div>
)

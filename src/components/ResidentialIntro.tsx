'use client';


import { motion } from "motion/react";
import Link from 'next/link'

const fadeIn = {
	initial: { opacity: 0, y: 20 },
	animate: { opacity: 1, y: 0 },
	transition: { duration: 0.6 },
};



export const ResidentialIntro = () => {
	return (
		<motion.section {...fadeIn} className="max-w-7xl mx-auto px-4 py-16 [&_a]:text-moving-yellow hover:[&_a]:underline">
			<div className="prose prose-lg max-w-none text-justified space-y-2">
				<p className="text-moving-gray text-lg leading-relaxed">
					Moving isn’t just about getting from point A to point B, it’s about doing it without damage, delays, or chaos.
					At Premium Moving & Storage, we deliver <strong>residential moving solutions</strong> built around precision, efficiency, and accountability for an entire moving process.
					Our services offered include everything from household moves and cross country moves to car shipping, ensuring a comprehensive solution for any relocation need.
				</p>
				<p className="text-moving-gray text-lg leading-relaxed mt-4">
					We handle everything from full service options for apartments to full-size homes across the Twin Cities.
					Residential moving services can range from full-service packing and transport to labor-only loading.
					Whether you’re relocating from a high-rise in &nbsp;
					<a href="https://www.mlb.com/twins/ballpark" className="font-medium text-gray-700">North Loop near Target Field (Minneapolis) </a>
					or moving into a historic property in <a href="https://en.wikipedia.org/wiki/Summit_Hill,_Saint_Paul">Summit Hill near the Cathedral of Saint Paul (St. Paul)</a>,
					we understand the logistics, building requirements, and timing it takes to execute a clean move.
				</p>

				<p>
					Our job is simple: protect your belongings, respect your time, and get it done right the first time.
					Vehicle transport services, including car shipping, are also available for customers who need to move their automobiles as part of a comprehensive relocation.
				</p>
			</div>
		</motion.section>
	);
};


export const ResidentialCTA = () => (
	<div className="flex items-center flex-row justify-center py-12 w-full">
		<div className="relative isolate flex-1 overflow-hidden bg-moving-dark w-full px-6 py-24 text-center shadow-2xl">
			<h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
				Getting A Move Quote
			</h2>
			<p className="mx-auto mt-6 max-w-7xl text-lg/8 text-pretty text-gray-300">
				Getting a moving quote is the essential first step in the entire moving process. 
				A reputable household moving company will offer a free, no-obligation quote that’s tailored to your specific needs. 
				We are known for providing transparent, competitive pricing and a detailed breakdown of services. 
				When you request a moving quote, a professional mover will assess your belongings, discuss your packing services and unpacking services needs, and consider any special requirements for a personalized moving plan. 
				Be sure to ask about additional services such as storage options or specialty packing to ensure a truly stress-free move. 
				Choosing a moving company that values accuracy and honesty in their quotes helps you avoid surprises and ensures your entire moving process is smooth from start to finish.
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
				className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-x-1/2 mask-[radial-gradient(closest-side,white,transparent)]"
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

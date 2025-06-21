"use client";

import React, { Suspense } from "react";
import { motion } from "motion/react";
import { OurLocations } from "./OurLocations";
import { QuoteForm } from "./FreeQuote/QuoteComponent";
import { FreeQuoteForm } from "./FreeQuote/quote-form";

const ContactComponent = () => {
	// const isMobile = useIsMobile();
	return (
		<div className="min-h-screen bg-moving-light-gray">
			<div className="bg-background py-16">
				<motion.div
					className="max-w-6xl mx-auto px-4"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<motion.h1
						className="text-2xl md:text-4xl lg:text-7xl font-bold text-white text-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						Contact Us
					</motion.h1>
					<motion.p
						className="text-lg md:text-xl text-white font-medium text-center mt-4 max-w-2xl mx-auto"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						Get in touch with our moving experts for a seamless relocation
						experience
					</motion.p>
				</motion.div>
			</div>

			<main className="max-w-7xl mx-auto px-4 pb-12">
				<div className="flex flex-col lg:flex-row gap-6 my-8 max-w-3xl mx-auto">
					<Suspense>
						<FreeQuoteForm />
					</Suspense>
				</div>

				<div className="sm:rounded-t-xl sm:overflow-hidden xl:-mx-4">
					<OurLocations />
				</div>
			</main>
		</div>
	);
};

export default ContactComponent;

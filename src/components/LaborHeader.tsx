"use client";

import { motion } from "motion/react";
import Link from "next/link";

export const LaborHeader = () => {
	return (
		<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
			<motion.div
				initial={{ opacity: 0, y: 30 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="max-w-4xl mx-auto text-center"
			>
				<motion.h1
					className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 fade-in"
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6 }}
				>
					Moving Labor
				</motion.h1>

				<motion.p
					className="text-xl md:text-2xl text-moving-lightGray mb-8 slide-in"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					Professional help for loading, unloading, and heavy lifting
					in Minnesota. Trusted local crews.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, delay: 0.4 }}
				>
					<Link
						href="/free-quote"
						className="inline-block bg-background hover:bg-background-100 text-moving-dark px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
					>
						Contact Us for a Free Quote
					</Link>
				</motion.div>
			</motion.div>
		</div>
	);
};

"use client";

import { motion } from "motion/react";
import Image from "next/image";

export const PackingHeader = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8, ease: "easeInOut" }}
			className="relative mx-auto max-w-8xl p-4"
		>
			<div className="relative w-full h-[50dvh] md:h-[60dvh] xl:h-[70dvh] rounded-lg shadow-lg overflow-hidden">
				<Image
					src="/api/media/file/packing-supplies.webp"
					alt="Professional Packing Services in Minneapolis & St. Paul"
					fill={true}
					priority={true}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
					className="brightness-75 object-cover object-center"
				/>

				<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20" />

				<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
					<motion.h1
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 1,
							delay: 0.3,
							ease: "easeOut",
						}}
						className="text-white text-4xl md:text-6xl font-bold mb-4"
					>
						Packing Services in Minneapolis & St. Paul
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 1,
							delay: 0.6,
							ease: "easeOut",
						}}
						className="text-lg md:text-2xl text-white/95 max-w-4xl"
					>
						Professional packing services for homes, apartments, and
						offices. Full, partial & specialty packing solutions.
					</motion.p>

					<motion.a
						href="/free-quote"
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.9 }}
						className="mt-8 px-3 py-2 bg-moving-yellow hover:bg-moving-yellow/80 text-white font-bold text-sm rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
					>
						Get Free Quote
					</motion.a>
				</div>
			</div>
		</motion.div>
	);
};

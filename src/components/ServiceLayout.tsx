"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { FC } from "react";

interface ServiceLayoutProps {
	image: string;
	title: string;
	desc: string;
	children: React.ReactNode;
}

export const ServiceLayout: FC<ServiceLayoutProps> = ({
	image,
	title,
	desc,
	children,
}) => {
	return (
		<div className="w-full">
			{/* Hero Section */}
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="relative w-full max-w-8xl mx-auto px-4 py-4"
			>
				<div className="relative w-full h-[400px] rounded-lg shadow-lg overflow-hidden">
					{/* Background Image */}
					<Image
						src={image}
						alt={title}
						fill={true}
						className="brightness-75 object-cover"
					/>

					{/* Gradient Overlay */}
					<div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/10" />

					{/* Animated Title & Description */}
					<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
							className="text-white text-4xl md:text-5xl font-bold"
						>
							{title}
						</motion.h1>

						<motion.p
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
							className="mt-2 text-lg md:text-xl text-white/90 max-w-3xl"
						>
							{desc}
						</motion.p>
					</div>
				</div>
			</motion.div>

			{/* Service Details Section */}
			<div className="max-w-6xl mx-auto pb-10">{children}</div>
		</div>
	);
};

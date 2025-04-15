"use client"

import { motion } from 'motion/react';


export const PackingHerolong = () => {
	return (
		<section className="relative pt-16 pb-4 h-[50vh] md:h-[70vh] bg-gray-900">
			{/* Background Image with Overlay */}
			<div className="absolute inset-0">
				<img
					src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/26-+moving+truck+en+route+-2880w.JPG"
					alt="Professional packing service"
					className="w-full h-full object-cover opacity-75 object-center"
				/>
				{/* <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-gray-900/90 to-gray-900/50" /> */}
			</div>

			{/* Content Container */}
			<div className="relative container mx-auto h-full flex items-center px-4 lg:px-8">
				<div className="flex flex-wrap items-center w-full gap-y-8">
					{/* Text Content */}
					<motion.div
						className="w-full md:w-2/3 lg:w-1/2 text-center md:text-left"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<motion.h1
							className="text-2xl xs:text-3xl text-white sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 xs:mb-3 md:mb-6 drop-shadow-lg leading-tight"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.2 }}
						>
							Professional Packing Services
						</motion.h1>

						<motion.p
							className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-4 md:mb-8 max-w-xl mx-auto md:mx-0"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.4 }}
						>
							Secure packing solutions using premium materials and expert techniques
						</motion.p>


					</motion.div>


				</div>
			</div>
		</section>
	)
}

"use client";

import { motion } from "motion/react";

export default function StorageContent() {
	const containerVariants = {
		hidden: { opacity: 1 },
		visible: {
			transition: {
				staggerChildren: 0.3,
				delayChildren: 0.2,
				when: "beforeChildren",
			},
		},
	};

	const itemVariants = {
		hidden: {
			opacity: 0,
			x: -20,
			transition: { type: "spring", stiffness: 300 },
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: "spring",
				stiffness: 300,
				damping: 24,
			},
		},
	};

	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
			variants={containerVariants}
			className="bg-white py-8 sm:py-16"
		>
			<div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-gray-900">
				<motion.h2
					variants={itemVariants}
					className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8"
				>
					Keep your belongings safe in a secure setting
					<span className="block text-background text-xl sm:text-2xl md:text-3xl mt-2">
						storage vault
					</span>
				</motion.h2>

				{/* Add motion to other elements */}
				<motion.p
					variants={itemVariants}
					className="text-lg sm:text-xl mb-6 sm:mb-8 font-semibold"
				>
					Are you running out of space in your home or office?
				</motion.p>

				<motion.p
					variants={itemVariants}
					className="mb-6 sm:mb-8 text-base sm:text-lg"
				>
					Do you need somewhere to keep a few belongings for a little while
					until you are ready for it? Premium Moving & Storage also offers
					storage solutions in our climate-controlled warehouse. Your items will
					be securely packed into a storage vault until you are ready to
					retrieve it. Our storage space is available for both short-term and
					long-term agreements.
				</motion.p>

				<motion.div variants={itemVariants}>
					<h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
						Store just about anything we can fit into our vaults
					</h3>
					<p className="mb-6 text-lg">
						We have many years of experience storing precious belongings in our
						warehouse. People have depended on us to keep them safe, while they
						prepare to move into a new home or simply because they don't have
						room for a time. Our warehouse has been used to store a number of
						items including:
					</p>
				</motion.div>

				{/* Add motion.div around image */}
				<motion.div variants={itemVariants} className="my-8 md:my-12">
					<img
						src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/Warehouse+clipart-1920w.jpg"
						alt="Warehouse illustration"
						className="w-full max-w-3xl mx-auto rounded-lg shadow-xl"
						loading="lazy"
					/>
				</motion.div>

				{/* Animated list items */}
				<motion.ul
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="list-disc pl-6 mb-8 space-y-2"
				>
					{[
						"Household goods",
						"Merchandise and memorabilia",
						"Electronics (TVs, sound systems, etc.)",
						"Home furniture",
						"Business equipment",
						"Office furnishings (Desks, filing cabinets, etc.)",
					].map((item, index) => (
						<motion.li
							key={item}
							variants={itemVariants}
							custom={index}
							className="text-lg"
						>
							{item}
						</motion.li>
					))}
				</motion.ul>

				{/* Rest of the content with similar motion wrappers */}
				<motion.div variants={itemVariants}>
					<h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
						Our staff handles every step of the storage process
					</h3>
					<motion.p variants={itemVariants} className="mb-4 text-lg">
						We are fully prepared to help with your storage requirements. When
						your items are ready for pick up, our team can be there to load
						everything up and transport it to our warehouse. Once it is there,
						it will be monitored by our staff. We keep the area constantly
						monitored and protected.
					</motion.p>
					<motion.p variants={itemVariants} className="mb-8 text-lg">
						As soon as you are ready to have your belongings back, our staff
						will deliver right back to your location. You'll find everything in
						the exact same condition as when you originally entrusted it to us.
					</motion.p>
				</motion.div>

				<motion.div
					variants={itemVariants}
					className="mt-8 sm:mt-12 bg-gray-100 p-4 sm:p-8 rounded-lg"
				>
					<h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
						Need a quote on storage services?
					</h3>
					<p className="text-base sm:text-lg">
						Contact us today! We would love to assist you with whatever storage
						needs you may have. Our secure warehouse is a safe place to keep
						your possessions for as long as you need. Please feel free to submit
						our online form to get a free quote. Or give us a call at
						<a
							href="tel:6517575135"
							className="text-blue-600 hover:underline ml-1 break-keep"
						>
							(651) 757-5135
						</a>
						if you need additional info or have any questions.
					</p>
				</motion.div>
			</div>
		</motion.section>
	);
}

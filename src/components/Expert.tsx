"use client";
import { motion } from "motion/react";

const links = [
	{ name: "Contact Us", href: "#" },
	{ name: "Our Services", href: "#" },
	{ name: "Get a Quote", href: "#" },
	{ name: "Customer Reviews", href: "#" },
];

const stats = [
	{ name: "Years in Business", value: "15+" },
	{ name: "Successful Moves", value: "10,000+" },
	{ name: "Expert Movers Trained", value: "500+" },
	{ name: "Customer Satisfaction", value: "99%" },
];

const fadeInUp = {
	hidden: { opacity: 0, y: 50 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const staggerContainer = {
	hidden: { opacity: 1 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.2 },
	},
};

export default function ExpertSection() {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={staggerContainer}
			className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32"
		>
			{/* Background Image with Dark Overlay */}
			<div className="absolute inset-0 -z-10 size-full">
				<img
					alt="Expert Movers at Work"
					src="https://www.scoutnetworkblog.com/wp-content/uploads/2018/08/4.jpg"
					className="size-full object-cover object-right md:object-center"
				/>
				<div className="absolute inset-0 bg-black/60" />
				{/* Dark overlay */}
			</div>

			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<motion.div variants={fadeInUp} className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-5xl font-semibold tracking-tight text-background sm:text-7xl">
						Expert Trained Movers
					</h2>
					<p className="mt-8 text-lg font-medium text-background sm:text-xl">
						We expertly train our movers—our competition can't say the same.
					</p>
					<p className="mt-6 text-lg font-medium text-background sm:text-xl">
						At Premium Moving Services, we ensure that all employees receive the
						same expert training, providing consistency and excellence across
						all jobs. Every new hire undergoes a rigorous training program to
						learn safe and efficient packing and moving techniques in various
						situations.
					</p>
				</motion.div>

				{/* Links */}
				<motion.div
					variants={fadeInUp}
					className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none"
				>
					<div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold text-background sm:grid-cols-2 md:flex lg:gap-x-10">
						{links.map((link) => (
							<motion.a
								key={link.name}
								href={link.href}
								whileHover={{ scale: 1.1 }}
							>
								{link.name} <span aria-hidden="true">&rarr;</span>
							</motion.a>
						))}
					</div>
				</motion.div>

				{/* Stats Section */}
				<motion.dl
					variants={staggerContainer}
					className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4"
				>
					{stats.map((stat) => (
						<motion.div
							key={stat.name}
							variants={fadeInUp}
							className="flex flex-col-reverse gap-1"
						>
							<dt className="text-base text-background">{stat.name}</dt>
							<dd className="text-4xl font-semibold tracking-tight text-background">
								{stat.value}
							</dd>
						</motion.div>
					))}
				</motion.dl>
			</div>
		</motion.div>
	);
}

"use client";

import { Mail, Facebook, Twitter, Instagram, Phone } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

const Footer = () => {
	return (
		<motion.footer
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			className="bg-gradient-to-r from-header to-[#3B0712] text-white py-12 px-6 md:px-20"
		>
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
				{/* Brand */}
				<div>

					<img
						alt=""
						src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/logo-1-1920w.png"
						className="h-8 w-auto"
					/>

					<p className="text-sm opacity-80 mt-2">
						Providing top-notch moving services in Minnesota with DOT and HHG
						certifications.
					</p>
				</div>

				{/* Certifications */}
				<div>
					<h3 className="text-lg font-semibold">Certifications</h3>
					<p className="text-sm opacity-80 mt-2">
						<strong>DOT:</strong> #3047943
						<br />
						<strong>HHG:</strong> #383025
					</p>
				</div>

				{/* Moving Services */}
				<div>
					<h3 className="text-lg font-semibold">Moving Services</h3>
					<ul className="mt-2 space-y-2">
						{[
							"Local Moving",
							"Commercial Moving",
							"Long Distance Moving",
							"Specialty Moving",
						].map((service) => (
							<motion.li
								key={service}
								whileHover={{ scale: 1.1 }}
								className="cursor-pointer hover:text-gray-400 transition"
							>
								{service}
							</motion.li>
						))}
					</ul>
				</div>

				{/* Contact Info */}
				<div>
					<h3 className="text-lg font-semibold">Contact Info</h3>
					<p className="text-sm opacity-80 mt-2">
						<strong>Business Hours:</strong>
						<br />
						Monday – Sunday | 9AM to 6PM
					</p>
					<p className="mt-2 text-sm flex items-center gap-2">
						<Phone size={16} />
						<a href="tel:6517575135" className="hover:underline">
							651-757-5135
						</a>
					</p>
					<p className="mt-2 text-sm flex items-center gap-2">
						<Mail size={16} />
						<a
							href="mailto:sales@pmovingservices.com"
							className="hover:underline"
						>
							sales@pmovingservices.com
						</a>
					</p>
					<p className="mt-2 text-sm">
						<a
							href="https://pmovingservices.com"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline"
						>
							pmovingservices.com
						</a>
					</p>

					{/* Social Icons */}
					<div className="flex space-x-4 mt-4">
						{[Twitter, Facebook, Instagram].map((Icon, index) => (
							<motion.div
								key={index}
								whileHover={{ scale: 1.2, rotate: 10 }}
								whileTap={{ scale: 0.9 }}
								className="p-2 bg-white/10 rounded-full cursor-pointer"
							>
								<Icon className="text-white" size={20} />
							</motion.div>
						))}
					</div>
				</div>
			</div>

			{/* Additional Links */}
			<div className="max-w-7xl mx-auto mt-8 border-t border-white/20 pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
				<ul className="flex flex-wrap gap-4 text-sm justify-center md:justify-start">
					{[
						"Home",
						"About",
						"Careers",
						"Service Areas",
						"Resources",
						"Referral Program",
						"Affiliates",
						"Contact Us",
						"HTML Sitemap",
					].map((link) => (
						<li key={link}>
							<a href="#" className="hover:underline">
								{link}
							</a>
						</li>
					))}
				</ul>
				<ul className="flex flex-wrap gap-4 text-sm justify-center md:justify-end">
					<li>
						<a href="#" className="hover:underline">
							Terms and Conditions
						</a>
					</li>
					<li>
						<a href="#" className="hover:underline">
							Privacy Policy
						</a>
					</li>
				</ul>
			</div>
		</motion.footer>
	);
};

export default Footer;

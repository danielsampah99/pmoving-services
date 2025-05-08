"use client";

import type React from "react";
import { MapPin, Phone } from "lucide-react";

const ContactDetails: React.FC = () => {
	return (
		<div className="bg-white py-8 rounded-lg animate-fade-in">
			<h2 className="text-xl font-bold mb-6 text-center">
				Locations & Contact
			</h2>

			<div className="flex flex-wrap justify-center gap-8 max-w-2xl mx-auto px-4">
				<div className="flex flex-col items-center">
					<div className="flex items-center mb-2">
						<MapPin size={24} className="text-moving-yellow mr-2" />
						<span className="font-semibold">Waltham Office</span>
					</div>
					<p className="text-moving-medium-gray text-center">
						1049-1053 Main St
						<br />
						Waltham, MA 02451
					</p>
				</div>

				<div className="flex flex-col items-center">
					<div className="flex items-center mb-2">
						<MapPin size={24} className="text-moving-yellow mr-2" />
						<span className="font-semibold">Kansas City Office</span>
					</div>
					<p className="text-moving-medium-gray text-center">
						1700 W 47th St
						<br />
						Kansas City, MO 64112
					</p>
				</div>

				<div className="flex flex-col items-center mt-4 sm:mt-0">
					<div className="flex items-center mb-2">
						<Phone size={24} className="text-moving-yellow mr-2" />
						<span className="font-semibold">Call Us</span>
					</div>
					<a
						href="tel:+18772696461"
						className="text-moving-medium-gray hover:text-moving-yellow transition-colors"
					>
						(877) 269-6461
					</a>
				</div>
			</div>
		</div>
	);
};

export default ContactDetails;

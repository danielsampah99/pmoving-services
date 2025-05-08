"use client";
import { useState, type FC } from "react";
import { Clock, ChevronDown, ChevronUp } from "lucide-react";

const BusinessHours: FC = () => {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<div className="bg-white py-6 px-4 rounded-lg shadow-sm mt-6 animate-fade-in">
			<div
				className="flex items-center justify-between cursor-pointer"
				onClick={() => setIsExpanded(!isExpanded)}
				onKeyDown={event => event.key === ' ' && setIsExpanded(!isExpanded)}
			>
				<div className="flex items-center">
					<Clock size={24} className="text-moving-yellow mr-3" />
					<h2 className="text-xl font-bold ">Business Hours</h2>
				</div>
				{isExpanded ? (
					<ChevronUp size={20} className="" />
				) : (
					<ChevronDown size={20} className="" />
				)}
			</div>

			<div
				className={`overflow-hidden transition-all duration-300 ease-in-out ${
					isExpanded ? "max-h-48 opacity-100 mt-4" : "max-h-0 opacity-0"
				}`}
			>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
					<div className="border-l-4 border-moving-yellow pl-3 py-1">
						<p className="font-semibold text-moving-dark-gray">
							Monday – Saturday
						</p>
						<p className="text-moving-medium-gray">8:00 AM to 8:00 PM</p>
					</div>
					<div className="border-l-4 border-moving-yellow pl-3 py-1">
						<p className="font-semibold text-moving-dark-gray">Sunday</p>
						<p className="text-moving-medium-gray">10:00 AM to 2:00 PM</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BusinessHours;

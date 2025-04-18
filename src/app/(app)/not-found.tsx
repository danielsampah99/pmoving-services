"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArchiveBoxIcon, TruckIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
	const [truckPosition, setTruckPosition] = useState(0);

	useEffect(() => {
		const animate = () => {
			setTruckPosition((prev) => (prev > 300 ? -20 : prev + 0.5));
		};
		const interval = setInterval(animate, 50);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-[oklch(46.4%_0_0)] text-white relative overflow-hidden">
			<div className="absolute inset-0 opacity-10">
				{[...Array(20)].map((_, i) => (
					<div
						key={i}
						className="absolute"
						style={{
							left: `${(i % 4) * 25}%`,
							top: `${Math.floor(i / 4) * 20}%`,
						}}
					>
						<ArchiveBoxIcon className="stroke-moving-yellow stroke-[0.8] size-24" />
					</div>
				))}
			</div>

			{/* Main Content */}
			<div className="relative z-10 text-center px-4">
				<h1 className="text-9xl font-bold mb-4 text-[oklch(87.32%_0.1771_92.05)]">
					404
				</h1>
				<h2 className="text-4xl font-semibold mb-6">Page Not Found</h2>
				<p className="text-xl mb-8 text-gray-100 selection:bg-white selection:text-moving-yellow">
					Looks like this page does not exist!
				</p>

				{/* Animated SVG Scene */}
				<div className="w-full max-w-2xl mx-auto h-64 relative mb-8">
					{/* Road */}
					<div className="absolute bottom-0 w-full h-2 bg-moving-yellow" />

					{/* Moving Truck */}
					<div
						className="absolute bottom-2 transition-transform"
						style={{
							transform: `translateX(${truckPosition}%)`,
						}}
					>
						<TruckIcon className="size-20 stroke-1 fill-black stroke-moving-yellow" />
					</div>

					{/* Buildings SVG */}
					<svg
						viewBox="0 0 800 200"
						className="absolute bottom-2 fill-black stroke-white w-full"
						style={{ filter: "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07))" }}
					>
						<path
							d="M0,200 L60,200 L60,120 L80,100 L100,120 L100,200 L160,200 L160,80 L180,60 L200,80 L200,200 L260,200 L260,100 L280,80 L300,100 L300,200 L360,200 L360,60 L380,40 L400,60 L400,200 L460,200 L460,120 L480,100 L500,120 L500,200 L560,200 L560,80 L580,60 L600,80 L600,200 L660,200 L660,100 L680,80 L700,100 L700,200 L760,200 L760,60 L780,40 L800,60 L800,200 L800,200 L0,200 Z"
							fill="oklch(45% 0 0)"
							opacity="0.5"
						/>
					</svg>
				</div>

				{/* Back to Home Button */}
				<Link
					href="/"
					className="inline-block px-8 py-3 bg-moving-yellow text-white rounded-full font-semibold hover:bg-[oklch(82%_0.1771_92.05)] transition-colors duration-300"
				>
					Back to Home
				</Link>
			</div>
		</div>
	);
}

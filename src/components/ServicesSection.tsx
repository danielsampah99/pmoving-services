"use client";

import { useEffect, useRef } from "react";
import { ServiceCard, serviceCardData } from "./ServiceCard";

export const ServicesSection = () => {
	const observerRef = useRef<IntersectionObserver | null>(null);

	useEffect(() => {
		observerRef.current = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add("animate-fade-up");
						entry.target.classList.add("opacity-100");
						observerRef.current?.unobserve(entry.target);
						8;
					}
				});
			},
			{
				threshold: 0.1,
			},
		);

		const elements = document.querySelectorAll(".service-card");
		elements.forEach((el) => observerRef.current?.observe(el));

		return () => observerRef.current?.disconnect();
	}, []);

	return (
		<section className="py-12 lg:py-8 px-4 bg-gradient-to-b from-white to-gray-50">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16 opacity-0 service-card">
					<h2 className="text-4xl font-light mb-4 tracking-tight">
						Moving Services We Offer
					</h2>
					<div className="w-24 h-1 bg-black mx-auto mb-6" />
					<p className="text-gray-600 max-w-2xl mx-auto">
						Experience premium moving services tailored to your unique needs
					</p>
				</div>

				<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
					{serviceCardData.map((service, index) => (
						<ServiceCard key={service.title} service={service} index={index} />
					))}
				</div>
			</div>
		</section>
	);
};

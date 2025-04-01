"use client";

import { useEffect, useRef } from "react";
import { ServiceCard, serviceCardData } from "./ServiceCard";

type ServiceCardData = {
	title: string;
	description: string;
	image: string;
};

const services: ServiceCardData[] = [
	{
		title: "Local Moving",
		description:
			"Professional and reliable local moving services tailored to your needs. We handle your belongings with utmost care.",
		image:
			"https://www.matco.ca/wp-content/uploads/2021/05/3-7-Benefits-of-Hiring-a-Local-Moving-Company.jpg",
	},
	{
		title: "Packing Services",
		description:
			"Expert solutions to ensure your items are safely prepared for transport",
		image:
			"https://www.marineinsight.com/wp-content/uploads/2021/09/Packing-and-Packaging-in-Logistics.png",
	},
	{
		title: "Long Distance Moving",
		description:
			"Seamless long-distance moving services with careful planning and execution.",
		image:
			"https://essexremovals.com/wp-content/uploads/2022/10/pjimage-14-2.jpg",
	},
	{
		title: "Moving Labor",
		description:
			"Skilled moving professionals ready to handle heavy lifting and careful transportation of your belongings.",
		image:
			"https://www.simplemovinglabor.com/wp-content/uploads/2019/02/moving-labor-helpers-992x450.jpg",
	},
	{
		title: "Storage Services",
		description:
			"Secure, climate-controlled storage solutions for both short-term and long-term needs.",
		image:
			"https://lirp.cdn-website.com/a93663b0/dms3rep/multi/opt/How+to+Organize+a+Storage+Unit-640w.jpg",
	},
	{
		title: "Residential Moving",
		description:
			"Professional moving services tailored to your needs. We handle your belongings with utmost care.",
		image:
			"https://www.matco.ca/wp-content/uploads/2021/05/3-7-Benefits-of-Hiring-a-Local-Moving-Company.jpg",
	},
	{
		title: "Corporate Moving",
		description:
			"Expert packing solutions to ensure your items are safely prepared for transport using premium materials for maximum protection.",
		image:
			"https://www.marineinsight.com/wp-content/uploads/2021/09/Packing-and-Packaging-in-Logistics.png",
	},
	{
		title: "Apartment Moving",
		description:
			"Seamless moving with careful planning and execution for the best relocation experience.",
		image:
			"https://essexremovals.com/wp-content/uploads/2022/10/pjimage-14-2.jpg",
	},
	{
		title: "Packing Supplies",
		description:
			"Skilled moving professionals ready to handle heavy lifting and careful transportation of your belongings.",
		image:
			"https://www.simplemovinglabor.com/wp-content/uploads/2019/02/moving-labor-helpers-992x450.jpg",
	},
	{
		title: "Safes & Gun safes",
		description:
			"Secure, climate-controlled storage solutions for both short-term and long-term needs.",
		image:
			"https://lirp.cdn-website.com/a93663b0/dms3rep/multi/opt/How+to+Organize+a+Storage+Unit-640w.jpg",
	},
];

const ServicesSection = () => {
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

				{/* Put the text back soon... */}
				{/* <div className="mt-16 px-6 text-black text-lg leading-relaxed">
                    <p className="mb-6">
                        Because each move is unique, we’ll work with you to make sure it’s done in an organized and safe fashion.
                    </p>
                    <p className="mb-6">
                        At <strong>Premium Moving Services</strong>, you will get the best moving services in the Twin Cities and surrounding suburbs.
                        We are equipped to help with your moving process whether it is a local move, long-distance move, or storage for your home or commercial business.
                        We are dedicated to having you covered.
                    </p>
                    <p className="mb-6">
                        For years, we have been building a team of experienced moving experts, ensuring that our process goes as smoothly as possible.
                        We have a dedicated and professional staff that can handle any situation.
                        Knowing every move is unique, our team ensures your job is completed in a safe and organized manner.
                    </p>
                    <p className="mb-6">
                        Before getting started on your move, here are some tips for your home and commercial moves.
                        As your partner in the moving business, we will work with you through the entire process from start to finish.
                    </p>
                    <p className="mb-6">
                        We encourage you to contact us with any questions or requests specific to your move.
                        Our services are flexible and can be customized to fit your needs.
                    </p>
                    <p className="text-xl font-semibold">View our different moving services above.</p>
                </div> */}
			</div>
		</section>
	);
};

export default ServicesSection;

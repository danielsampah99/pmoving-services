"use client";

import { useEffect } from "react";

export const HeroVideo = () => {
	useEffect(() => {
		const handleScoll = () => {
			const parallax = document.getElementById("parallax-video");

			if (parallax) {
				const scrollPosition = window.scrollY;
				const speed = 0.3;

				parallax.style.transform = `translateY(${scrollPosition * speed}px)`;
			}
		};

		window.addEventListener("scroll", handleScoll);

		return () => {
			window.removeEventListener("scroll", handleScoll);
		};
	}, []);

	return (
		<div
			id="parallax-video"
			className="absolute parallax-video min-h-[80dvh] md:min-h-[75dvh] bg-fixed bg-center bg-no-repeat bg-cover inset-0 z-0"
		>
			<video
				autoPlay={true}
				loop={true}
				muted={true}
				className="w-full h-full object-cover"
			>
				<source src="https://aaamoversinc.com/wp-content/uploads/2024/01/aaa_movers_website_cover-Original-Web-.mp4" />
			</video>
		</div>
	);
};

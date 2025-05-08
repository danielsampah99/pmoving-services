import Image from "next/image";
import type { FC } from "react";

type HeroProps = {
	image: string;
	alt: string;
	title: string;
	description: string;
};

export const Hero: FC<HeroProps> = (props) => {
	return (
		<section id="hero" className="w-full">
			<div className="relative w-full pt-6 lg:pt-8 max-w-dvw">
				<div className="relative w-full h-[60dvh] mx-auto rounded-lg max-w-dvw overflow-hidden">
					<Image
						alt={props.alt}
						src={props.image}
						layout="fill"
						objectFit="cover"
						className="absolute inset-0 -z-10 w-full"
						loading="eager"
					/>
					{/* gradient overlay */}
					<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/15" />

					<div className="mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
						<div className="text-center">
							<h1 className="text-4xl font-bold capitalize tracking-tight text-white sm:text-6xl">
								{props.title}
							</h1>
							<p className="mt-6 text-base font-semibold leading-8 text-gray-200 max-w-3xl">
								{props.description}
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

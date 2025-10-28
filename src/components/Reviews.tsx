"use client";

import { type Reviewer, reviews, type ReviewType } from "@/data/reviews";
import { useRef, type FC } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./carousel";
import Autoplay from "embla-carousel-autoplay";
import { trimReview } from "@/utils";
import Link from "next/link";

export const Reviews: FC = () => {
	return (
		<div className="relative overflow-hidden ">
			<div className="absolute inset-0 bg-moving-gray/5">
				<CurvedBackground />
			</div>

			<div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
				<div className="text-center mb-6">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						What Our Customers Say
					</h2>
					<p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
						We take pride in providing exceptional service. Here's what our
						customers have to say about their experience with us.
					</p>
				</div>

				<div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
					<div className="lg:pr-4">
						<div className="relative overflow-hidden rounded-3xl bg-moving-gray px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
							<img
								alt=""
								src="https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/Chester-New-About-Us-1200w.jpeg"
								className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0"
							/>
							<div className="absolute inset-0 bg-moving-gray mix-blend-multiply" />
							<div
								aria-hidden="true"
								className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
							>
								<div
									style={{
										clipPath:
											"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
									}}
									className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[var(--color-moving-yellow)/70] to-[var(--color-moving-yellow)] opacity-40"
								/>
							</div>
							<figure className="relative isolate">
								<GoogleLogo />
								<ReviewCarousel reviews={reviews} />
							</figure>
						</div>
					</div>
					<div>
						<div className="text-base leading-7 text-gray-700 lg:max-w-lg">
							<div className="max-w-xl">
								<p className="mt-2">
									With a perfect 5.0 rating across over 100 verified reviews, Premium
									Moving Services has built a reputation for excellence in the
									moving industry. Our customers consistently praise our
									professional, efficient, and caring approach to every move, be
									it a small apartment or an entire business relocation.
								</p>
								<p className="mt-4">
									Time and again, clients highlight our team members by name —
									Dan, Zach, Maurice, and many others — applauding their work
									ethic, friendliness, and the exceptional care they take with
									belongings. From wrapping furniture in protective blankets to
									skillfully navigating tight storage spaces, our crews
									consistently exceed expectations.
								</p>
								<p className="mt-4">
									What sets us apart is our comprehensive service approach. We
									arrive on time, communicate clearly throughout the process,
									and handle everything with precision and care. Many customers
									note how we've turned what could be a stressful day into a
									smooth, worry-free experience. Many clients become customers
									for life, returning for their next move and recommending us to
									friends and family.
								</p>
							</div>
						</div>

						<div className="mt-5 flex">
							<a
								href="/free-quote"
								className="text-base font-semibold leading-7 hover:underline text-moving-yellow/80"
							>
								See all our reviews review{" "}
								<span aria-hidden="true">&rarr;</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export const GoogleLogo = () => {
	return (
		<img src="/google-logo.webp" alt="Google logo" className="h-12 w-auto" />
	);
};

export const CurvedBackground: FC = () => {
	return (
		<>
			<svg
				className="absolute inset-x-0 top-0 -translate-y-1/2"
				viewBox="0 0 1440 200"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0 200L48 185.2C96 170.3 192 140.7 288 133.3C384 126 480 140 576 140C672 140 768 126 864 133.3C960 140.7 1056 170.3 1152 170.7C1248 171 1344 141 1392 126L1440 111V0H1392C1344 0 1248 0 1152 0C1056 0 960 0 864 0C768 0 672 0 576 0C480 0 384 0 288 0C192 0 96 0 48 0H0V200Z"
					fill="white"
				/>
			</svg>
			<svg
				className="absolute inset-x-0 bottom-0 translate-y-1/2"
				viewBox="0 0 1440 200"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M0 0L48 14.8C96 29.7 192 59.3 288 66.7C384 74 480 60 576 60C672 60 768 74 864 66.7C960 59.3 1056 29.7 1152 29.3C1248 29 1344 59 1392 74L1440 89V200H1392C1344 200 1248 200 1152 200C1056 200 960 200 864 200C768 200 672 200 576 200C480 200 384 200 288 200C192 200 96 200 48 200H0V0Z"
					fill="white"
				/>
			</svg>
		</>
	);
};

export const ReviewItem: FC<{ reviewer: Reviewer }> = ({ reviewer }) => {
	return (
		<>
			<blockquote className="mt-6 text-xl text-ellipsis overflow-hidden font-semibold leading-8 text-white">
				<p>
					“{trimReview(reviewer.content)}
					{reviewer.content.length >= 150 && (
						<Link
							href={`/reviews/#${reviewer.id}`}
							title="Click to see the full review"
						>
							&hellip;
						</Link>
					)}
					”
				</p>
			</blockquote>
			<figcaption className="mt-6 text-sm leading-6 text-gray-300">
				<strong className="font-semibold capitalize text-white">
					{reviewer.author},
				</strong>
			</figcaption>
		</>
	);
};

export const ReviewCarousel: FC<{ reviews: ReviewType }> = ({ reviews }) => {
	const autoplay = useRef(
		Autoplay({
			playOnInit: true,
			delay: 10_000,
			stopOnMouseEnter: true,
			stopOnInteraction: true,
			stopOnFocusIn: true,
			stopOnLastSnap: false,
		}),
	);

	return (
		<Carousel
			plugins={[autoplay.current]}
			// onMouseEnter={autoplay.current.stop}
			// onMouseLeave={autoplay.current.reset}
		>
			<CarouselContent>
				{reviews.featured.map((reviewer) => (
					<CarouselItem key={reviewer.id}>
						<ReviewItem reviewer={reviewer} />
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
};

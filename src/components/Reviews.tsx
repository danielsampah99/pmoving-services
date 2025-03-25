import { cn } from "@/utils";
import { Button } from "@headlessui/react";
import {
	StarIcon,
	ChevronLeftIcon,
	ChevronRightIcon,
} from "@heroicons/react/20/solid";
import Link from "next/link";
import type { FC } from "react";

type ReviewType = {
	average: number;
	totalCount: number;
	counts: Rating[];
	featured: Reviewer[];
};

type Rating = {
	rating: number;
	count: number;
};

type Reviewer = {
	id: number;
	rating: number;
	content: string;
	author: string;
	avatarSrc: string;
};

const reviews: ReviewType = {
	average: 4.8,
	totalCount: 1624,
	counts: [
		{ rating: 5, count: 1019 },
		{ rating: 4, count: 162 },
		{ rating: 3, count: 97 },
		{ rating: 2, count: 199 },
		{ rating: 1, count: 147 },
	],
	featured: [
		{
			id: 1,
			rating: 5,
			content:
				"The movers were incredibly efficient and careful with our belongings. They arrived on time, packed everything securely, and unloaded quickly at our new home.  Highly recommend!",
			author: "John Doe",
			avatarSrc: "https://i.pravatar.cc/150?img=1",
		},
		{
			id: 2,
			rating: 4,
			content:
				"Overall a good experience.  There were a couple of minor hiccups with communication initially, but the moving crew was fantastic.  They handled our furniture with care and were very professional.",
			author: "Jane Smith",
			avatarSrc: "https://i.pravatar.cc/150?img=2",
		},
		{
			id: 3,
			rating: 5,
			content:
				"Excellent service from start to finish! The quote was accurate, the booking process was easy, and the movers were friendly and helpful.  Made a stressful move much easier.",
			author: "David Lee",
			avatarSrc: "https://i.pravatar.cc/150?img=3",
		},
	],
};

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

				<div className="grid lg:grid-cols-12 lg:gap-x-8">
					<div className="lg:col-span-4">
						<div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
							<div className="flex items-center">
								<div className="flex items-center gap-1">
									{[1, 2, 3, 4, 5].map((rating) => (
										<StarIcon
											key={rating}
											className={cn(
												"size-7",
												reviews.average >= rating
													? "text-yellow-400"
													: "text-gray-200",
											)}
											aria-hidden="true"
										/>
									))}
								</div>
								<p className="ml-3 text-lg font-medium text-gray-900">
									{reviews.average.toFixed(1)}
								</p>
							</div>

							<div className="mt-2 text-sm inline-flex items-center  text-gray-600">
								Based on {reviews.totalCount.toLocaleString()} reviews from{" "}
								<span className="ml-2">
									<GoogleLogo />
								</span>{" "}
							</div>

							<div className="mt-8 space-y-4">
								{reviews.counts.map((count) => (
									<div key={count.rating} className="flex items-center text-sm">
										<div className="w-8 font-medium text-gray-900 flex items-center">
											{count.rating}
											<StarIcon
												className="h-4 w-4 ml-1 text-yellow-400"
												aria-hidden="true"
											/>
										</div>

										<div className="ml-3 flex-1">
											<div className="h-2 rounded-full bg-gray-100">
												<div
													className="h-2 rounded-full bg-yellow-400"
													style={{
														width: `${Math.round((count.count / reviews.totalCount) * 100)}%`,
													}}
												/>
											</div>
										</div>

										<div className="ml-3 w-12 text-right text-sm font-medium text-gray-900">
											{Math.round((count.count / reviews.totalCount) * 100)}%
										</div>
									</div>
								))}
							</div>

							<div className="mt-10">
								<h3 className="text-lg font-medium text-gray-900">
									Share your experience
								</h3>
								<p className="mt-2 text-sm text-gray-600">
									Your feedback helps us improve and helps others make informed
									decisions.
								</p>

								<Button className="mt-6 inline-flex w-full items-center justify-center rounded-lg border border-gray-300 shadow bg-gray-900 px-8 py-2 text-sm font-medium text-gray-200 hover:text-white  hover:bg-gray-950 sm:w-auto lg:w-full">
									Write a review
								</Button>
							</div>
						</div>
						<ReviewPagination />
					</div>

					<div className="mt-16 lg:mt-0 lg:col-span-8">
						<h3 className="sr-only">Recent reviews</h3>

						<div className="flow-root">
							<div className="divide-y divide-gray-200">
								{
									// 	loading ? (
									// 	<div className="py-12 text-center">
									// 		<div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
									// 		<p className="mt-4 text-gray-600">Loading reviews...</p>
									// 	</div>
									// ) :
									reviews.featured.map(
										({ author, avatarSrc, id, rating, content }) => (
											<ReviewCard
												key={id}
												author={author}
												avatarSrc={avatarSrc}
												rating={rating}
												id={id}
												content={content}
											/>
										),
									)
								}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export const ReviewCard: FC<Reviewer> = ({
	id,
	avatarSrc,
	author,
	content,
	rating: reviewRating,
}) => {
	return (
		<div key={id} className="relative py-8">
			<div className="flex items-center">
				<div>
					<img
						src={avatarSrc || "/placeholder.svg"}
						alt={author}
						width={48}
						height={48}
						className="size-12 rounded-full object-cover"
					/>
				</div>
				<div className="ml-4">
					<h4 className="text-base font-semibold text-gray-900">{author}</h4>
					<div className="mt-1 flex items-center">
						{[1, 2, 3, 4, 5].map((rating) => (
							<StarIcon
								key={rating}
								className={cn(
									"size-5",
									reviewRating >= rating ? "text-yellow-400" : "text-gray-200",
								)}
								aria-hidden="true"
							/>
						))}
						{/* {review.date && <span className="ml-2 text-sm text-gray-500">{review.date}</span>} */}
					</div>
				</div>
			</div>

			<div className="mt-4 text-base text-gray-600 bg-white p-6 rounded-xl shadow-sm border border-gray-50">
				{content}
			</div>
		</div>
	);
};

export const ReviewPagination = () => {
	return (
		<div className="flex mt-4 items-center justify-center gap-x-2.5">
			<Button className="rounded-full bg-white shadow-sm hover:bg-gray-50 p-1">
				<ChevronLeftIcon
					aria-hidden="true"
					className="size-6 stroke-gray-800"
				/>
			</Button>

			<Button
				className="rounded-full bg-white shadow-sm hover:bg-gray-50 p-1"
				type="button"
			>
				<ChevronRightIcon
					aria-hidden="true"
					className="size-6 stroke-gray-800"
				/>
			</Button>
		</div>
	);
};

export const GoogleLogo = () => {
	return <img src="/google-logo.webp" alt="Google logo" className="size-5" />;
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

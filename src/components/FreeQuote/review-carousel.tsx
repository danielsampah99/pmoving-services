"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { ReviewType } from "@/data/reviews"

export const ReviewCarousel = ({ reviews }: { reviews: ReviewType }) => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [autoplay, setAutoplay] = useState(true)

	// Handle autoplay functionality
	useEffect(() => {
		if (!autoplay) return

		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex === reviews.featured.length - 1 ? 0 : prevIndex + 1))
		}, 6000)

		return () => clearInterval(interval)
	}, [autoplay, reviews.featured.length])

	const handlePrevious = () => {
		setAutoplay(false)
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? reviews.featured.length - 1 : prevIndex - 1))
	}

	const handleNext = () => {
		setAutoplay(false)
		setCurrentIndex((prevIndex) => (prevIndex === reviews.featured.length - 1 ? 0 : prevIndex + 1))
	}

	return (
		<div
			className="rounded-xl overflow-hidden h-full flex flex-col relative bg-cover bg-center"
			style={{
				backgroundImage: "url('https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/Deshun+and+Drake+c-640w.jpg')",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			{/* Overlay gradient */}
			<div className="absolute inset-0 bg-gradient-to-r from-[(bg-moving-yellow)] to-[(moving-gray)] backdrop-blur-xs"></div>

			<div className="relative z-10 p-8 flex flex-col h-full">
				<div className="mb-6 flex items-center">
					<Quote className="size-10 stroke-moving-yellow fill-transparent rotate-180" />
					<h3 className="text-2xl font-bold text-white ml-2">Customer Testimonials</h3>
				</div>

				<div className="relative flex-grow flex items-center">
					<button
						onClick={handlePrevious}
						className="absolute -left-3 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-colors text-white"
						aria-label="Previous review"
					>
						<ChevronLeft className="w-5 h-5" />
					</button>

					<div className="w-full">
						<AnimatePresence mode="wait">
							<motion.div
								key={currentIndex}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.4 }}
								className="px-8"
							>
								<div className="mb-6">
									<p className="text-white text-lg md:text-xl font-medium leading-relaxed">
										"{reviews.featured[currentIndex].content}"
									</p>
								</div>
								<div>
									<p className="text-white/90 font-semibold">— {reviews.featured[currentIndex].author}</p>
								</div>
							</motion.div>
						</AnimatePresence>
					</div>

					<button
						onClick={handleNext}
						className="absolute -right-3 bg-white/20 hover:bg-white/30 rounded-full p-2 backdrop-blur-sm transition-colors text-white"
						aria-label="Next review"
					>
						<ChevronRight className="w-5 h-5" />
					</button>
				</div>

				<div className="flex justify-center gap-2 mt-8">
					{reviews.featured.map((_, index) => (
						<button
							key={index}
							onClick={() => {
								setAutoplay(false)
								setCurrentIndex(index)
							}}
							className={`w-2.5 h-2.5 rounded-full transition-colors ${currentIndex === index ? "bg-white" : "bg-white/40 hover:bg-white/60"
								}`}
							aria-label={`Go to review ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</div>
	)
}



export const ReviewsMobile = ({ reviews }: { reviews: ReviewType }) => {
	const [currentIndex, setCurrentIndex] = useState(0)
	const [autoplay, setAutoplay] = useState(true)

	// Handle autoplay functionality
	useEffect(() => {
		if (!autoplay) return

		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex === reviews.featured.length - 1 ? 0 : prevIndex + 1))
		}, 6000)

		return () => clearInterval(interval)
	}, [autoplay, reviews.featured.length])

	return (
		<div
			className="rounded-xl overflow-hidden my-8 bg-cover bg-center"
			style={{
				backgroundImage: "url('/placeholder.svg?height=400&width=600')",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			{/* Overlay gradient */}
			<div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 backdrop-blur-sm"></div>

			<div className="relative z-10 p-6">
				<div className="mb-4 flex items-center">
					<Quote className="w-8 h-8 text-white/80 rotate-180" />
					<h3 className="text-xl font-bold text-white ml-2">Customer Testimonials</h3>
				</div>

				<AnimatePresence mode="wait">
					<motion.div
						key={currentIndex}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.4 }}
					>
						<div className="mb-4">
							<p className="text-white text-base leading-relaxed">"{reviews.featured[currentIndex].content}"</p>
						</div>
						<div>
							<p className="text-white/90 font-semibold">— {reviews.featured[currentIndex].author}</p>
						</div>
					</motion.div>
				</AnimatePresence>

				<div className="flex justify-center gap-1.5 mt-6">
					{reviews.featured.map((_, index) => (
						<button
							key={index}
							onClick={() => {
								setAutoplay(false)
								setCurrentIndex(index)
							}}
							className={`w-2 h-2 rounded-full transition-colors ${currentIndex === index ? "bg-white" : "bg-white/40 hover:bg-white/60"
								}`}
							aria-label={`Go to review ${index + 1}`}
						/>
					))}
				</div>
			</div>
		</div>
	)
}



export const ReviewWrapper = ({ reviews }: { reviews: ReviewType }) => {
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768)
		}

		// Initial check
		checkMobile()

		// Add event listener
		window.addEventListener("resize", checkMobile)

		// Cleanup
		return () => window.removeEventListener("resize", checkMobile)
	}, [])

	if (isMobile) {
		return <ReviewsMobile reviews={reviews} />
	}

	return <ReviewCarousel reviews={reviews} />
}

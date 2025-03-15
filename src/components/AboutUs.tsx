'use client'

import { cn } from "@/utils";
import { Button, Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { type FC, KeyboardEvent, useState } from "react";
import { ImageViewer } from "./ImageViewer";
import { NumberCounter } from "./NumberCounter";

export type AboutImages = {
	src: string
	alt: string
}

export type NavigateImage = (direction: "next" | "prev") => void

export const AboutUs: FC = () => {

	const [expandedMission, setExpandedMission] = useState(false);
	const [expandedServices, setExpandedServices] = useState(false);
	const [imageViewerOpen, setImageViewerOpen] = useState(false)
	const [currentImageIndex, setCurrentImageIndex] = useState(0)


	const missionTextCollapsed = "Premium Moving Services is one of the best Minnesota movers that is committed to ensuring our customers are receiving the highest premium quality of moving service offered. As a company, we ensure this through having our employees offer assistance, discretion ...";
	const missionTextExpanded = "Premium Moving Services is one of the best Minnesota movers that is committed to ensuring our customers are receiving the highest premium quality of moving service offered.  As a company, we ensure this through having our employees offer assistance, discretion, and support ethical and safe behavior above all else.  Our goal is as your moving partner to alleviate any stress you may experience and to ensure your move is as seamless as possible.";

	const servicesTextCollapsed = "Premium Moving Services provides top-quality moving throughout the Twin Cities and suburbs. We handle local moves, long-distance relocations, and storage for homes and businesses, ensuring a smooth experience. Our experienced team delivers exceptional service every time ...";
	const servicesTextExpanded = "Premium Moving Services provides top-quality moving throughout the Twin Cities and suburbs.  We handle local moves, long-distance relocations, and storage for homes and businesses, ensuring a smooth experience.  Our experienced team delivers exceptional service every time. Need help preparing? We offer valuable moving tips. As your trusted partner, we guide you from start to finish. Contact us with questions. We adapt our versatile services to your unique needs.";

	const images: AboutImages[] = [
		{
			src: "https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/Deshunanddrakec-1152w.jpg",
			alt: "Moving team members working together",
		},
		{
			src: "https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/Target+chairs+assemblyc-1920w.JPG",
			alt: "Furniture assembly service",
		},
		{
			src: "https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/_MG_3094c-1920w.jpg",
			alt: "Professional movers in action",
		},
		{
			src: "https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/Truck+loadc-1920w.jpg",
			alt: "Loading a moving truck",
		},
	]

	const toggleMission = () => {
		setExpandedMission(!expandedMission);
	};

	const toggleServices = () => {
		setExpandedServices(!expandedServices);
	};

	const openImageViewer = (index: number) => {
		setCurrentImageIndex(index)
		setImageViewerOpen(true)
	}

	const navigateImage: NavigateImage = (direction: 'next' | 'prev') => {
		if (direction === 'next') {
			setCurrentImageIndex(prev => (prev + 1) % images.length)
		} else {
			setCurrentImageIndex(prev => (prev - 1 + images.length) % images.length)
		}
	}

	const handleNavigateImageViewer = (event: KeyboardEvent) => {
		if (event.key === 'ArrowRight') {
			navigateImage('next')
		} else if (event.key === 'ArrowLeft') {
			navigateImage('prev')
		} else if (event.key === 'Escape') {
			setImageViewerOpen(false)
		} else {
			setImageViewerOpen(false)
		}
	}

	return (
		<div className="overflow-hidden bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
				<div className="max-w-4xl">
					<p className="text-base font-semibold leading-7 text-indigo-600">
						About us
					</p>
					<h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
						On a mission to simplify the moving process
					</h1>
					<p className="mt-6 text-balance text-xl leading-8 text-gray-700">
						Because each move is unique, we’ll work with you to make sure it’s done in an organized and safe fashion.
					</p>
				</div>
				<section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
					<div className="lg:pr-8">
						<h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900">
							Our Mission
						</h2>
						<p className="mt-6 text-base/7 text-gray-600">
							{expandedMission ? missionTextExpanded : missionTextCollapsed}
							<Button type='button' onClick={toggleMission} className='text-indigo-500 hover:text-indigo-700 focus:outline-none'>{expandedMission ? ' Less' : ' More'}</Button>
						</p>
						<p className="mt-8 text-base/7 text-gray-600">
							{expandedServices ? servicesTextExpanded : servicesTextCollapsed}
							<Button type='button' onClick={toggleServices} className='text-indigo-500 hover:text-indigo-700 focus:outline-none'>{expandedMission ? ' Less' : ' More'}</Button>
						</p>
					</div>
					<div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
						<div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
							{images.map(({ src, alt }, index) => (
								<div
									key={src}
									onClick={() => openImageViewer(index)}
									className={cn("aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10", index % 2 === 0 && '-mt-8  lg:-mt-40')}>
									<img alt={alt ?? ''} src={src} className="block size-full object-cover" />
								</div>
							))}
						</div>
					</div>
					<div className="max-lg:mt-16 lg:col-span-1">
						<p className="text-base font-semibold leading-7 text-gray-500">
							The numbers
						</p>
						<hr className="mt-6 border-t border-gray-200" />
						<dl className="mt-6 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
							<div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
								<dt className="text-sm/6 text-gray-600">Years in business</dt>
								<dd className="order-first text-6xl font-semibold tracking-tight">
									<NumberCounter end={10} suffix="+" />
								</dd>
							</div>
							<div className="flex flex-col gap-y-2 border-b border-dotted border-gray-200 pb-4">
								<dt className="text-sm/6 text-gray-600">
									Customer Satisfaction
								</dt>
								<dd className="order-first text-6xl font-semibold tracking-tight">
									<NumberCounter end={99} suffix="%" />
								</dd>
							</div>
							<div className="flex flex-col gap-y-2 max-sm:border-b max-sm:border-dotted max-sm:border-gray-200 max-sm:pb-4">
								<dt className="text-sm/6 text-gray-600">
									Trained Expert Movers
								</dt>
								<dd className="order-first text-6xl font-semibold tracking-tight">
									<NumberCounter end={500} suffix="+" />
								</dd>
							</div>
							<div className="flex flex-col gap-y-2">
								<dt className="text-sm/6 text-gray-600">Successful Moves</dt>
								<dd className="order-first text-6xl font-semibold tracking-tight">
									<NumberCounter end={10_000} suffix="+" hasComma={true} />
								</dd>
							</div>
						</dl>
					</div>
				</section>

			</div>

			{/* Image Viewer Modal */}
			<ImageViewer
				currentImageIndex={currentImageIndex}
				images={images}
				isOpen={imageViewerOpen}
				onImageViewerClose={setImageViewerOpen}
				onImageViewerKeyboardNavigate={handleNavigateImageViewer}
				onImageViewerButtonNavigate={navigateImage}
			/>
		</div>
	);
};

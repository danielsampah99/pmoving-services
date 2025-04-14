"use client";

import { cn } from "@/utils";
import { Button } from "@headlessui/react";
import { type FC, type KeyboardEvent, useState } from "react";
import { ImageViewer } from "./ImageViewer";
import { NumberCounter } from "./NumberCounter";
import Image from "next/image";

export type AboutImages = {
	src: string;
	alt: string;
};

export type NavigateImage = (direction: "next" | "prev") => void;

export const movingCrewImages: AboutImages[] = [
	// {
	// 	src: "https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/Chester-New-About-Us-1920w.jpeg",
	// 	alt: "movers Minneapolis",
	// },
	{
		src: "https://lirp.cdn-website.com/b0f4adc5/dms3rep/multi/opt/Deshun+and+Drake+c-640w.jpg",
		alt: "loading up box truck",
	},
	{
		src: "https://media.discordapp.net/attachments/1340405353493434453/1354258334718365806/Drake_and_Deshun.jpg?ex=67e4a2db&is=67e3515b&hm=dba1c47531932fa2d8312866c335457dd0a9983accdf32335bfb0ac921335f9f&=&format=webp&width=837&height=840",
		alt: "Drake and Deshun",
	},
	{
		src: "https://media.discordapp.net/attachments/1340405353493434453/1354258334340874261/Deshun_on_liftgate_with_two_wrapped_nightstandsc.jpg?ex=67e4a2db&is=67e3515b&hm=49b433eea7267c58e74b2ca5188ac4c307c6622dc8991088b36c7b656c4e9766&=&format=webp&width=560&height=840",
		alt: "Deshun_on_liftgate_with_two_wrapped_nightstands",
	},
	{
		src: "https://media.discordapp.net/attachments/1340405353493434453/1354259033271304352/Drake_disassembling_table_winter_2022.jpg?ex=67e4a382&is=67e35202&hm=f557e30fb1e53c2d8d5b1e754a4d6c26ec2a84bd76c18fefa967650b9a295cf4&=&format=webp&width=1178&height=785",
		alt: "Drake_disassembling_table_winter_2022",
	},
];

export const movingProjectsImages: AboutImages[] = [
	{
		src: "https://media.discordapp.net/attachments/1340405353493434453/1354260876227510513/IMG_2600.jpg?ex=67e4a539&is=67e353b9&hm=d73d69454ecab071d17ebe7691442b09159d4212f1a845d5854d893118f05bf3&=&format=webp&width=629&height=840",
		alt: "Loading unto a truck",
	},
	{
		src: "https://media.discordapp.net/attachments/1340405353493434453/1354260877238341652/IMG_1169.jpg?ex=67e4a53a&is=67e353ba&hm=78efa0d80d89dbb97d9d4582ee3140d030bb08cbca76c21d4388aa80254ded70&=&format=webp&width=1516&height=840",
		alt: "Moving safes",
	},
	{
		src: "https://media.discordapp.net/attachments/1340405353493434453/1354260878027133070/IMG_0223.jpg?ex=67e4a53a&is=67e353ba&hm=6767314cc1f474abc66937604d52dd7c8cd95af14c2210c63a38e8a5db14eedc&=&format=webp&width=629&height=840",
		alt: "Moving statues",
	},
	{
		src: "https://media.discordapp.net/attachments/1340405353493434453/1354260879109263400/IMG_2884.jpg?ex=67e4a53a&is=67e353ba&hm=2517b2328418c1dd1664b19f3f1ed12fa6b5f3299a619e7cf5d95b24162a2665&=&format=webp&width=629&height=840",
		alt: "Staff moving a safe",
	},
	{
		src: "https://media.discordapp.net/attachments/1340405353493434453/1354260879574827058/IMG_1447.jpg?ex=67e4a53a&is=67e353ba&hm=1e4b83ac268f4059560927ddfee323e9156ef82377fe4d1ae645d16f652755a0&=&format=webp&width=629&height=840",
		alt: "Moving in a home",
	},
	{
		src: "https://media.discordapp.net/attachments/1340405353493434453/1354260880484860035/IMG_1217.jpg?ex=67e4a53a&is=67e353ba&hm=9793ec6c1457bda020d89028f7460823f8b6fece3ade1d118403bddecad6df07&=&format=webp&width=629&height=840",
		alt: "Our moving truck",
	},
	{
		src: "https://media.discordapp.net/attachments/1340405353493434453/1354260880853827735/IMG_1695.jpg?ex=67e4a53a&is=67e353ba&hm=fc2e54c71f5bdcba8953ce6db1c9bb25b05b53e41891beafa9f5a5f4029d3f03&=&format=webp&width=840&height=840",
		alt: "Alternate view of our moving truck",
	},
	{
		src: "https://media.discordapp.net/attachments/1340405353493434453/1354260881608937562/IMG_4293.jpg?ex=67e4a53b&is=67e353bb&hm=634b8b345df817527b799c5336ff263710a2ae7103bbf7d8b4cff24293e9c79e&=&format=webp&width=629&height=840",
		alt: "Moving furniture",
	},
	{
		src: "https://media.discordapp.net/attachments/1340405353493434453/1354260876227510513/IMG_2600.jpg?ex=67e4a539&is=67e353b9&hm=d73d69454ecab071d17ebe7691442b09159d4212f1a845d5854d893118f05bf3&=&format=webp&width=629&height=840",
		alt: "Moving many small safes",
	},
	{
		src: "https://media.discordapp.net/attachments/1340405353493434453/1354261765600444426/IMG_2716.jpg?ex=67e4a60d&is=67e3548d&hm=ca70d8359be412a5c9292443c57b3489025e18651158c82297f4dc8fd26737d2&=&format=webp&width=319&height=440",
		alt: "Image of our moving trucks",
	},
	{
		src: "https://media.discordapp.net/attachments/1340405353493434453/1354261766338777098/Moving_Blankets__dolly.jpg?ex=67e4a60e&is=67e3548e&hm=f24dba0870e305f0c340428e06d2c6a87a2e8d72facbab7998e28ff342956bb1&=&format=webp&width=629&height=840",
		alt: "Loading fabrics unto our trucks",
	},
	{
		src: "https://media.discordapp.net/attachments/1340405353493434453/1354261766758203613/IMG_2983.jpg?ex=67e4a60e&is=67e3548e&hm=6b4fc72b025850c220c175da03d106785db94140f9ae8916587ad8ebb6356de1&=&format=webp&width=629&height=840",
		alt: "Moving a mattress",
	},
	{
		src: "https://media.discordapp.net/attachments/1340405353493434453/1354261767026381023/Display_shelf.jpg?ex=67e4a60e&is=67e3548e&hm=75e9386e8fba54a5d44baeaee6680b11cacc4a8f8e5e25311de69549ec1ac958&=&format=webp&width=919&height=662",
		alt: "Moving a large electronic device",
	},
	{
		src: "https://media.discordapp.net/attachments/1340405353493434453/1354261767269781615/Glass_showcases.jpg?ex=67e4a60e&is=67e3548e&hm=231b085bf988b40f4381aa3f69fa54fbe6a56bccf841a7efaf702a70d2c833aa&=&format=webp&width=1120&height=840",
		alt: "Moving glass items",
	},
	{
		src: "https://media.discordapp.net/attachments/1340405353493434453/1354261767512920255/IMG_0117.jpg?ex=67e4a60e&is=67e3548e&hm=63ecb372b80acc5582a224c4232b04445f522f37edd733c2565c130f9b3b5958&=&format=webp&width=840&height=840",
		alt: "Inside of a loaded moving truck",
	},
	{
		src: "https://media.discordapp.net/attachments/1347001450080895020/1354589724337242173/Storage_vault_and_forklift_.jpg?ex=67e6803d&is=67e52ebd&hm=96cdf436e516f769f39f7ed3d0b74c9adfe045313d6612f7dedee0914f6f44e7&=&format=webp&width=841&height=840",
		alt: "Inside our warehouse",
	},
	{
		src: "https://media.discordapp.net/attachments/1347001450080895020/1354589724727181403/Pic_stitch_tower_desk_and_printer_.jpg?ex=67e6803d&is=67e52ebd&hm=665934f3a70485b87bda7c172ed8edaf5114c364a4321abe3fad6e20de95e77d&=&format=webp&width=919&height=840",
		alt: "Moving a large electronic device",
	},
	{
		src: "https://media.discordapp.net/attachments/1347001450080895020/1354589725033496646/Spinet_piano.jpg?ex=67e6803d&is=67e52ebd&hm=3cd9f9def59bb1bb73b6cb92d080965634a8a057ba47559134accee8ca5f3292&=&format=webp&width=1178&height=663",
		alt: "Moving a piano",
	},
];

export const AboutUs: FC = () => {
	const [expandedMission, setExpandedMission] = useState(false);
	const [expandedServices, setExpandedServices] = useState(false);
	const [imageViewerOpen, setImageViewerOpen] = useState(false);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const [images, setImages] = useState<AboutImages[]>(movingCrewImages);

	const missionTextCollapsed =
		"Premium Moving Services is one of the best Minnesota movers that is committed to ensuring our customers are receiving the highest premium quality of moving service offered. As a company, we ensure this through having our employees offer assistance, discretion ...";
	const missionTextExpanded =
		"Premium Moving Services is one of the best Minnesota movers that is committed to ensuring our customers are receiving the highest premium quality of moving service offered.  As a company, we ensure this through having our employees offer assistance, discretion, and support ethical and safe behavior above all else.  Our goal is as your moving partner to alleviate any stress you may experience and to ensure your move is as seamless as possible.";

	const servicesTextCollapsed =
		"Premium Moving Services provides top-quality moving throughout the Twin Cities and suburbs. We handle local moves, long-distance relocations, and storage for homes and businesses, ensuring a smooth experience. Our experienced team delivers exceptional service every time ...";
	const servicesTextExpanded =
		"Premium Moving Services provides top-quality moving throughout the Twin Cities and suburbs.  We handle local moves, long-distance relocations, and storage for homes and businesses, ensuring a smooth experience.  Our experienced team delivers exceptional service every time. Need help preparing? We offer valuable moving tips. As your trusted partner, we guide you from start to finish. Contact us with questions. We adapt our versatile services to your unique needs.";

	const toggleMission = () => {
		setExpandedMission(!expandedMission);
	};

	const toggleServices = () => {
		setExpandedServices(!expandedServices);
	};

	const openImageViewer = (index: number) => {
		setCurrentImageIndex(index);
		setImageViewerOpen(true);
	};

	const navigateImage: NavigateImage = (direction: "next" | "prev") => {
		if (direction === "next") {
			setCurrentImageIndex((prev) => (prev + 1) % images.length);
		} else {
			setCurrentImageIndex(
				(prev) => (prev - 1 + images.length) % images.length,
			);
		}
	};

	const handleNavigateImageViewer = (event: KeyboardEvent) => {
		if (event.key === "ArrowRight") {
			navigateImage("next");
		} else if (event.key === "ArrowLeft") {
			navigateImage("prev");
		} else if (event.key === "Escape") {
			setImageViewerOpen(false);
		}
	};

	return (
		<section id="about-us" className="overflow-hidden bg-white py-24 sm:py-32">
			<div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
				<div className="max-w-4xl">
					<p className="text-base font-semibold leading-7 text-yellow-500">
						About us
					</p>
					<h1 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
						On a mission to simplify the moving process
					</h1>
					<p className="mt-6 text-balance text-xl leading-8 text-gray-700">
						Because each move is unique, we’ll work with you to make sure it’s
						done in an organized and safe fashion.
					</p>
				</div>
				<section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
					<div className="lg:pr-8">
						<h2 className="text-pretty text-2xl font-semibold tracking-tight text-gray-900">
							Our Mission
						</h2>
						<p className="mt-6 text-base/7 text-gray-600">
							{expandedMission ? missionTextExpanded : missionTextCollapsed}
							<Button
								type="button"
								onClick={toggleMission}
								className="text-yellow-400 hover:text-yellow-500 focus:outline-none"
							>
								{expandedMission ? " Less" : " More"}
							</Button>
						</p>
						<p className="mt-8 text-base/7 text-gray-600">
							{expandedServices ? servicesTextExpanded : servicesTextCollapsed}
							<Button
								type="button"
								onClick={toggleServices}
								className="text-yellow-400 hover:text-yellow-500 focus:outline-none"
							>
								{expandedServices ? " Less" : " More"}
							</Button>
						</p>
					</div>
					<div className="pt-16 lg:row-span-2 lg:-mr-16 xl:mr-auto">
						<div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
							<Button
								type="button"
								onClick={() => {
									setImages(movingCrewImages);
									openImageViewer(0);
								}}
								className={cn(
									"group aspect-square relative overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10",
								)}
							>
								<Image
									alt={"Drake_and_Deshun"}
									src={
										"https://media.discordapp.net/attachments/1340405353493434453/1354356820654690335/Drake_and_Deshun.jpg?ex=67e4fe94&is=67e3ad14&hm=9f5a25c137c080bb3559fb004e99cf300b77d7c40e3a7849d7c7188ade5bf895&=&format=webp&width=949&height=953"
									}
									className="block size-full object-cover"
									width={715}
									height={715}
								/>
								<ImageDescriptionBadge description="Our moving crew" />
							</Button>

							<Button
								type="button"
								onClick={() => {
									setImages(movingProjectsImages);
									openImageViewer(0);
								}}
								className={cn(
									"group aspect-square relative overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10",
									"-mt-8 lg:-mt-40",
								)}
							>
								<Image
									alt={"Moving Projects"}
									src={
										"https://media.discordapp.net/attachments/1340405353493434453/1354357176453562460/IMG_2600.jpg?ex=67e4fee9&is=67e3ad69&hm=92e1a23a7a28c4f8ca2f55c94c5dcd38b9d33b1ef22c2f63c8a8fbd48c6cd596&=&format=webp&width=715&height=953"
									}
									className="block size-full object-cover"
									width={715}
									height={715}
								/>
								<ImageDescriptionBadge description="Our moving projects" />
							</Button>
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
		</section>
	);
};

export const ImageDescriptionBadge: FC<{ description: string }> = ({
	description,
}) => {
	return (
		<span className="hidden group-hover:inline-flex absolute capitalize font-semibold whitespace-nowrap top-4 right-4 w-auto group-hover:animate-rotate-y transition-transform duration-200 delay-300 items-center rounded-full bg-yellow-50 px-2 py-1 text-sm text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
			{description}
		</span>
	);
};

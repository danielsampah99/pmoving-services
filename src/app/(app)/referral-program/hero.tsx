import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

export const HeroSection = () => {
	return (
		<div className="bg-white">
			<div className="relative isolate overflow-hidden bg-linear-to-b from-moving-yellow/40 pt-14">
				<div
					aria-hidden="true"
					className="absolute inset-y-0 right-1/2 -z-10 -mr-96 w-[200%] origin-top-right skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-moving-yellow/10 ring-moving-yellow/50 sm:-mr-80 lg:-mr-96"
				/>
				<div className="mx-auto max-w-7xl px-6 py-8 sm:py-10 lg:px-8">
					<div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
						<h1 className="max-w-4xl text-base font-semibold tracking-tight text-balance text-gray-900 sm:text-xl lg:col-span-2 xl:col-auto">
							Join Our Referral Program
						</h1>
						<div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
							<p className="text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
								When your friend becomes a customer, you both receive a gift
								card!
							</p>
						</div>
						<img
							src={"/api/media/file/crew.webp"}
							alt="Our crew"
							className="mt-10 aspect-6/5 w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
						/>
					</div>
				</div>
				<div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-t from-white sm:h-32" />
			</div>
		</div>
	);
};

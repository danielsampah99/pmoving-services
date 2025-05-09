"use client";

import { RichText } from "@/components/RichText";
import type { Media, ServiceArea } from "@/payload-types";
import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";

import type { FC } from "react";
import Image from "next/image";
import { cn } from "@/utils";

export type MovingServicesProps = Pick<ServiceArea, "movingServices"> & {
	title: string;
};

export const MovingServices: FC<MovingServicesProps> = (props) => {
	console.info("Props: ", props);

	return (
		<section id="moving-services" className="bg-white py-6">
			<div className="mx-auto text-center max-w-7xl text-base leading-7 text-moving-yellow">
				<p className="text-base font-semibold">{`Our Moving Services In ${props.title}`}</p>
			</div>

			<div className="space-y-6">
				{Array.isArray(props.movingServices) &&
					props.movingServices.length > 0 &&
					props.movingServices.map((service, index) => {
						if (
							typeof service.image !== "number" &&
							service.image &&
							service.id
						) {
							return (
								<MovingServiceWithImage
									id={service.id}
									index={index}
									key={service.id}
									image={service.image}
									title={service.title}
									content={service.content}
								/>
							);
						}

						return (
							<MovingServiceWithoutImage
								key={service.id}
								content={service.content}
								id={service.id}
								title={service.title}
							/>
						);
					})}
			</div>
		</section>
	);
};

export type MovingServiceWithImageProps = {
	id: string | null | undefined;
	content: SerializedEditorState;
	image: Media;
	title: string;
	index: number;
};

export const MovingServiceWithImage: FC<MovingServiceWithImageProps> = (
	props,
) => {
	return (
		<div className="mx-auto max-w-7xl mt-10 mb-6">
			<div className="mx-auto max-w-3xl">
				<h1 className="mt-2 text-3xl font-bold capitalize tracking-tight text-gray-900 sm:text-4xl">
					{props.title}
				</h1>
			</div>
			<div
				className={cn(
					"mx-auto my-4 max-w-3xl gap-8 lg:gap-16 lg:mx-0 lg:mt-5 lg:max-w-none grid grid-cols-1 lg:grid-cols-2 lg:justify-between lg:items-stretch",
				)}
			>
				{/* image */}
				<div
					className={cn(
						props.index % 2 === 0 ? "lg:order-first" : "lg:order-last",
						"lg:col-span-1 max-h-[300px] relative rounded-lg h-full overflow-hidden",
					)}
				>
					<Image
						src={props.image.url ?? ""}
						alt={props.image.alt ?? "Moving service"}
						height={props.image.height ?? 30}
						width={props.image.width ?? 30}
						className="max-w-3xl w-full object-contain"
					/>
				</div>
				<div className={cn(props.index % 2 === 0 ? 'lg:order-last' : 'lg:order-first', "max-w-3xl lg:col-span-1 order-last text-base leading-7 text-gray-700")}>
					<RichText
						data={props.content}
						className="[&_p]:xl:text-justify [&_p]:text-pretty [&_a]:text-yellow-500 [&_a]:hover:underline [&_a]:transition-colors duration-300 delay-100"
					/>
				</div>
			</div>
		</div>
	);
};

export const MovingServiceWithoutImage: FC<
	Omit<MovingServiceWithImageProps, "image" | "index">
> = (props) => {
	return (
		<div className="mx-auto max-w-3xl my-6 text-base leading-7 text-gray-700">
			<h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 capitalize sm:text-4xl">
				{props.title}
			</h1>

			<div className="mt-5 mb-4 max-w-3xl max-sm:text-pretty">
				<RichText data={props.content} />
			</div>
		</div>
	);
};

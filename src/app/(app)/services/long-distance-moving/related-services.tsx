import { RelatedServices } from "@/data/services";
import { FC } from "react";
import Link from "next/link";

export type RelatedMovingServicesProps = {
	services: RelatedServices[];
};

export const RelatedMovingServices: FC<RelatedMovingServicesProps> = (
	props,
) => {
	return (
		<div className="">
			<div className="mx-auto max-w-2xl py-12 px-6 sm:py-16 lg:max-w-7xl lg:px-8">
				<h3 className="text-xl md:2xl font-bold capitalize mb-5">
					Related Moving Services
				</h3>
				<div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8">
					{props.services.map((service) => (
						<Link href={service.href} key={service.name} className="group">
							<service.icon
								aria-hidden="true"
								className="size-12 stroke-[1.1] stroke-moving-gray group-hover:stroke-black/50 group-hover:fill-moving-yellow group-hover:animate-shake"
							/>
							<h3 className="group-hover:underline mt-6 text-sm font-medium text-gray-900">
								{service.name}
							</h3>
							<p className="mt-2 text-sm text-gray-500">
								{service.description}
							</p>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

import { RelatedServices } from "@/data/services";
import Link from "next/link";
import { FC } from "react";

export type RelatedLocalMovingProps = {
	services: RelatedServices[];
};

export const RelatedLocalMoving: FC<RelatedLocalMovingProps> = (props) => {
	return (
		<div className="bg-white">
			<div className="mx-auto max-w-7xl py-8 sm:px-2 sm:py-10 lg:px-4">
				<div className="mx-auto max-w-2xl px-4 lg:max-w-none">
					<div className="max-w-3xl">
						<h2 className="text-4xl font-bold tracking-tight text-gray-900">
							Related Moving Services
						</h2>
						<p className="mt-4 text-gray-500">
							In addition to our core residential moving service, we offer
							several complementary solutions to address all aspects of your
							local move. These related services are designed to work together
							seamlessly, providing you with a comprehensive moving experience.
							Whether you need packing assistance, storage solutions, or
							specialized item handling, our team can customize our services to
							meet your unique moving requirements and timeline.
						</p>
					</div>
					<div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
						{props.services.map((service) => (
							<Link
								href={service.href}
								key={service.name}
								className="group sm:flex lg:block"
							>
								<div className="sm:flex-shrink-0">
									<service.icon className="group-hover:fill-white group-hover:stroke-moving-yellow transition-colors duration-300 delay-75 fill-moving-yellow stroke-moving-gray/30 size-10" />
								</div>
								<div className="mt-4 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
									<h3 className="group-hover:underline text-sm font-medium text-gray-900">
										{service.name}
									</h3>
									<p className="mt-2 text-sm text-gray-500">
										{service.description}
									</p>
								</div>
							</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

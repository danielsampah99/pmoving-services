import { RelatedServices as RelatedService } from "@/data/services";
import { FC } from "react";
import Link from "next/link";

export type RelatedServicesProps = {
	services: RelatedService[];
};

export const RelatedServices: FC<RelatedServicesProps> = (props) => {
	return (

			<div className="bg-white">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="rounded-2xl px-6 py-16 sm:py-16">
						<div className="mx-auto max-w-xl lg:max-w-none">
							<div className="text-center">
								<h2 className="text-2xl font-bold tracking-tight text-gray-900">
									Related Moving Services
								</h2>
							</div>
							<div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none lg:grid-cols-3">
								{props.services.map((service) => (
									<Link
										href={service.href}
										key={service.name}
										className="group text-center p-4 transition-all delay-100 group-hover:shadow-gray-500 duration-500 hover:rounded-md hover:bg-gray-50 hover:shadow-sm sm:flex sm:text-left lg:block lg:text-center"
									>
										<div className="sm:flex-shrink-0">
											<div className="flow-root">
												<service.icon
													aria-hidden="true"
													className="mx-auto group-hover:stroke-moving-gray fill-moving-gray group-hover:fill-moving-yellow size-16"
												/>
											</div>
										</div>
										<div className="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
											<h3 className="text-sm group-hover:underline capitalize transtion-all transform-gpu duration-300 delay-75 font-medium text-gray-900">
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
			</div>

	);
};

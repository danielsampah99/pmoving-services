import { movingTips } from "@/data/moving-tips";
import type { FC } from "react";

export const MovingTips: FC = () => {
	return (
		<div id="moving-tips">
			<div className="mx-auto max-w-7xl py-4 sm:py-5">
				<div className="mx-auto max-w-2xl lg:max-w-none">
					<div className="max-w-4xl my-2">
						<h2 className="text-4xl font-bold tracking-tight text-gray-900">
							Moving Tips
						</h2>
						<p className="mt-4 text-gray-500">
							Moving to a new place can be both exciting and challenging. To
							help make your transition smoother, we've compiled some expert
							tips based on our years of experience helping families and
							businesses relocate. These practical suggestions will help you
							save time, reduce stress, and ensure your belongings arrive safely
							at your new destination.
						</p>
					</div>
					<div className="mx-auto grid max-w-2xl lg:mt-2 grid-cols-1 gap-x-8 gap-y-12 p-4 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
						{movingTips.map((tip) => (
							<div key={tip.id} className="sm:flex">
								<div className="sm:flex-shrink-0">
									<div className="flow-root">
										<tip.icon aria-hidden="true" className="h-24 w-28" />
									</div>
								</div>
								<div className="mt-3 sm:ml-3 sm:mt-0">
									<h3 className="text-sm font-medium text-gray-900">
										{tip.name}
									</h3>
									<p className="mt-2 text-sm text-gray-500">
										{tip.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

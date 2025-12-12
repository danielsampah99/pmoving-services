import { CheckIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const uniquePoints = [
	"Highly trained local movers with years of local experience",
	"Licensed, insured, and trusted by thousands of Minnesota residents",
	"Transparent pricing with no surprises",
	"Careful handling of your home, floors, and furniture",
	"Fast communication and reliable scheduling",
	"Helpful staff who go above and beyond to ensure a smooth, hassle-free move for every customer",
];

const UniquePoint = ({ point }: { point: string }) => {
	return (
		<li className="flex items-start gap-3">
			<div className="mt-1 bg-gray-100 p-1 rounded-full shrink-0">
				<CheckIcon className="size-4 sm:size-5 fill-gray-700" />
			</div>
			<span className="text-gray-700">{point}</span>
		</li>
	);
};

export const LocalSetApart = () => {
	return (
		<section className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 my-20">
			<div className="grid md:grid-cols-2 gap-12 items-center">
				<div>
					<h3 className="text-2xl font-bold text-gray-900 mb-6">
						What Sets Us Apart
					</h3>
					<ul className="space-y-4">
						{uniquePoints.map((point, pointIndex) => (
							<UniquePoint key={pointIndex} point={point} />
						))}
					</ul>
				</div>
				<div className="rounded-2xl p-8 min-h-[400px] flex items-center justify-center relative">
					<Image
						fill={true}
						alt="A Premium Moving Service's Mooving Truck"
						src="/api/media/file/new%20truck.jpg"
						className="object-cover rounded-2xl"
					/>
				</div>
			</div>
		</section>
	);
};

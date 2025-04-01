import type { FC } from "react";
import type { ActiveState } from "./InteractiveMap";
import { type MapCity, minnesotaMapCities, wisconsinMapCities } from "@/map-data";
import { cn } from "@/utils";
import { Button } from "@headlessui/react";
import { TruckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export type MapCitiesProps = {
	currentState: ActiveState;
	selectedCity: string | null;
	onSelectCity: (city: string | null) => void;
	hoveredCity: string | null;
	onHoverCity: (city: string | null) => void;
};

export const MapCities: FC<MapCitiesProps> = ({
	currentState,
	hoveredCity,
	onHoverCity,
	onSelectCity,
	selectedCity,
}) => {
	const cityTitle =
		currentState === "all"
			? "World"
			: currentState === "minnesota"
				? "Cities in Minnesota"
				: "Cities in Wisconsin";

	return (
		<div className="lg:col-span-1">
			<div className="bg-white rounded-xl shadow-md p-5 h-full">
				<div className="flex items-center justify-between mb-4">
					<h3 className="text-xl font-bold text-slate-900">{cityTitle}</h3>
				</div>

				<div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
					{currentState === "all" || currentState === "minnesota" ? (
						<MapCitiesList
							cities={minnesotaMapCities}
							cityLabel="Minnesota"
							hoveredCity={hoveredCity}
							onHoverCity={onHoverCity}
							onSelectCity={onSelectCity}
							selectedCity={selectedCity}
						/>
					) : null}

					{currentState === "all" || currentState === "wisconsin" ? (
						<MapCitiesList
							cities={wisconsinMapCities}
							cityLabel="Wisconsin"
							hoveredCity={hoveredCity}
							onHoverCity={onHoverCity}
							onSelectCity={onSelectCity}
							selectedCity={selectedCity}
						/>
					) : null}
				</div>

				<div className="mt-6 pt-4 border-t border-slate-200">
					<p className="text-slate-600 text-sm">
						Need a custom quote for your move? Contact us for personalized
						service.
					</p>
					<Link
						href="/free-quote"
						className="block text-center mt-4 w-full py-2.5 px-4 bg-yellow-400 hover:bg-yellow-500 text-white font-medium hover:font-semibold rounded-lg transition-colors"
					>
						Request Free Estimate
					</Link>
				</div>
			</div>
		</div>
	);
};

export type MapCitiesListProps = Pick<
	MapCitiesProps,
	"selectedCity" | "onSelectCity" | "hoveredCity" | "onHoverCity"
> & {
	cities: MapCity[];
	cityLabel: "Wisconsin" | "Minnesota";
};

export const MapCitiesList: FC<MapCitiesListProps> = ({
	cities,
	cityLabel,
	selectedCity,
	hoveredCity,
	onHoverCity,
	onSelectCity,
}) => {
	return (
		<div>
			<h4 className="text-md font-semibold text-yellow-400 capitalize mb-2 sticky top-0 bg-white py-1">
				{cityLabel}
			</h4>
			<div className="grid grid-cols-2 gap-1.5">
				{cities.map((city) => {
					const standardCity = city.city.replace(/\s+/g, "-").toLowerCase(); // replace all whitespace characters with a hypen in the cityname

					const cityClasses =
						selectedCity === city.city
							? "bg-yellow-100 text-yellow-800 border-ywllow-300 shadow-sm"
							: hoveredCity === city.city
								? "bg-yellow-50 text-yellow-700 border-yellow-200"
								: "hover:bg-slate-50 border-transparent";

					const iconClasses =
						hoveredCity === city.city
							? "stroke-yellow-600"
							: "stroke-yellow-400";
					return (
						<div
							id={`city-${standardCity}`}
							key={standardCity}
							className={cn(
								"px-3 py-2 rounded-md text-sm transition-all cursor-pointer border",
								cityClasses,
							)}
							onClick={() => onSelectCity(city.city)}
							onMouseOver={() => onHoverCity(city.city)}
							onMouseLeave={() => onHoverCity(null)}
						>
							<div className="flex capitalize items-center">
								<TruckIcon className={cn("mr-1.5 size-5", iconClasses)} />
								{city.city}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

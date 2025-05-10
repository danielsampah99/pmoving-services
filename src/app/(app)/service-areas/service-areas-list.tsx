import { type FC, memo, useMemo, useState } from "react";
import { cn } from "@/utils";
import { TruckIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import type { MapCity } from "@/map-data";
import { Field, Input, Label } from "@headlessui/react";

export type ListOfServiceAreasProps = {
	cities: MapCity[];
	selectedCity: string | null;
	onSelectCity: (city: string | null) => void;
	hoveredCity: string | null;
	onHoverCity: (city: string | null) => void;
};

export const ListOfServiceAreas: FC<ListOfServiceAreasProps> = ({
	cities,
	hoveredCity,
	onHoverCity,
	onSelectCity,
	selectedCity,
}) => {
	const [searchTerm, setSearchTerm] = useState("");

	const filteredCities = useMemo(() => {
		if (!searchTerm) {
			return cities;
		}

		return cities.filter((city) =>
			city.city.toLowerCase().includes(searchTerm.toLowerCase()),
		);
	}, [cities, searchTerm]);

	return (
		<div className="lg:col-span-1">
			<div className="bg-white rounded-xl shadow-md p-5 h-full max-h-[625px]">
				<div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
					<SearchCity searchCity={searchTerm} onSearchCity={setSearchTerm} />
					<MapCitiesList
						cities={filteredCities}
						hoveredCity={hoveredCity}
						onHoverCity={onHoverCity}
						onSelectCity={onSelectCity}
						selectedCity={selectedCity}
					/>
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

export const SearchCity: FC<{
	searchCity: string;
	onSearchCity: (city: string) => void;
}> = ({ searchCity, onSearchCity }) => {
	return (
		<div id="search-service-area" className="w-full">
			<Field className="space-y-2">
				<Label className="block text-sm font-medium leading-6 text-gray-900">
					Find a service Area
				</Label>
				<Input
					value={searchCity}
					onChange={(event) => onSearchCity(event.target.value)}
					className="block w-full rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus-within:ring-2 focus-within:ring-inset focus-within:ring-yellow-600 focus:ring-inset focus:ring-yellow-600 sm:text-sm sm:leading-6 focus-visible:outline-none focus-within:outline-none"
					type="text"
					placeholder="find a service area near you..."
				/>
			</Field>
		</div>
	);
};

export type MapCitiesListProps = Pick<
	ListOfServiceAreasProps,
	"selectedCity" | "onSelectCity" | "hoveredCity" | "onHoverCity"
> & {
	cities: MapCity[];
};

export const MapCitiesList: FC<MapCitiesListProps> = ({
	cities,
	selectedCity,
	hoveredCity,
	onHoverCity,
	onSelectCity,
}) => {
	return (
		<div>
			<div className="grid grid-cols-1 gap-1.5">
				{cities.map((city) => {
					const standardCity = city.city.replace(/\s+/g, "-").toLowerCase(); // replace all whitespace characters with a hypen in the cityname

					return (
						<CityListItem
							key={standardCity}
							city={city}
							isSelected={selectedCity === city.city}
							isHovered={hoveredCity === city.city}
							onSelectCity={onSelectCity}
							onHoverCity={onHoverCity}
						/>
					);
				})}
			</div>
		</div>
	);
};

// city list item - memoized for performance
type CityListItemProps = {
	city: MapCity;
	isSelected: boolean;
	isHovered: boolean;
	onSelectCity: (city: string) => void;
	onHoverCity: (city: string | null) => void;
};

const CityListItem: FC<CityListItemProps> = memo(
	({ city, isHovered, isSelected, onHoverCity, onSelectCity }) => {
		const standardCity = city.city.replace(/\s+/g, "-").toLowerCase();

		const cityClasses = isSelected
			? "bg-yellow-100 text-yellow-800 border-yellow-300 shadow-sm"
			: isHovered
				? "bg-yellow-50 text-yellow-700 border-yellow-200"
				: "hover:bg-slate-50 border-transparent";

		const iconClasses =
			isHovered || isSelected ? "stroke-yellow-600" : "stroke-yellow-400";

		return (
			<div
				id={`city-${standardCity}`}
				className={cn(
					"px-3 py-2 rounded-md text-sm transition-all cursor-pointer border",
					cityClasses,
				)}
				onClick={() => onSelectCity(city.city)}
				onKeyDown={(event) => event.key === "Enter" && onSelectCity(city.city)}
				onMouseEnter={() => onHoverCity(city.city)}
				onMouseLeave={() => onHoverCity(null)}
				onFocus={() => onHoverCity(city.city)}
				onBlur={() => onHoverCity(null)}
				role="button"
				tabIndex={0}
			>
				<div className="flex capitalize items-center">
					<TruckIcon
						className={cn("mr-1.5 size-5", iconClasses)}
						aria-hidden="false"
					/>
					{city.city}
				</div>
			</div>
		);
	},
);
CityListItem.displayName = "CityListItem"; // for debugging

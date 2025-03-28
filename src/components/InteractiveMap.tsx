"use client";

import { type FC, useState, useRef } from "react";
import { LocationControl } from "./LocationControl";
import {
	type MapCity,
	minnesotaMapCities,
	states,
	wisconsinMapCities,
} from "@/map-data";
import { MapCities } from "./MapCitites";
import { LeafletMap } from "./LeafletMap";
import type { LatLngExpression } from "leaflet";
import { useRouter } from "next/navigation";

export type ActiveState = "all" | "minnesota" | "wisconsin";

export const InteractiveMap: FC = () => {
	const [activeState, setActiveState] = useState<
		"all" | "minnesota" | "wisconsin"
	>("all");
	const [hoveredCity, setHoveredCity] = useState<string | null>(null);
	const [selectedCity, setSelectedCity] = useState<string | null>(null);
	const [mapStyleIndex, setMapStyleIndex] = useState(0);
	const [mapCenter, setMapCenter] = useState<LatLngExpression>([46, -94]); // center of minnesota
	const [mapZoom, setMapZoom] = useState(8);
	const [cities, setCities] = useState<MapCity[]>([
		...minnesotaMapCities,
		...wisconsinMapCities,
	]);
	const [showStyleSelector, setShowStyleSelector] = useState(false);
	const mapRef = useRef(null);
	const router = useRouter();

	const handleCityHover = (city: string | null) => {
		const cityCenter = cities.find((item) => item.city === city);

		setHoveredCity(city);
		setMapCenter([cityCenter?.latitude ?? 46, cityCenter?.longitude ?? -94]);
		setMapZoom(10);
	};

	const handleStateClick = (selectedState: ActiveState) => {
		if (selectedState === "minnesota") {
			setCities(minnesotaMapCities);
			setActiveState("minnesota");
		} else if (selectedState === "wisconsin") {
			setCities(wisconsinMapCities);
			setActiveState("wisconsin");
			setMapZoom(15);
		} else {
			setCities([...minnesotaMapCities, ...wisconsinMapCities]);
			setActiveState("all");
		}
	};

	const handleCityClick = (city: string | null) => {
		setSelectedCity(city);

		const url = cities.find((item) => item.city === city)?.href;

		router.push(`/movers/${url}`);
	};

	const handleStyleToggle = () => {
		setShowStyleSelector(!showStyleSelector);
	};

	const handleMapStyleChange = (index: number) => {
		setMapStyleIndex(index);
		setShowStyleSelector(false);
	};

	return (
		<section className="py-12 bg-slate-50">
			<div className="container mx-auto px-4">
				<div className="text-center mb-8">
					<h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
						Our Service Areas
					</h2>
					<p className="text-lg text-slate-600 max-w-2xl mx-auto">
						We provide moving services throughout Minnesota and Wisconsin.
						Explore our service areas on the interactive map.
					</p>

					<LocationControl
						states={states}
						currentState={activeState}
						onStateChange={handleStateClick}
					/>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
					<LeafletMap
						mapCenter={mapCenter}
						mapZoom={hoveredCity ? mapZoom : 4}
						mapStyleIndex={mapStyleIndex}
						mapRef={mapRef}
						hoveredCity={hoveredCity}
						onHoverCity={setHoveredCity}
						selectedCity={selectedCity}
						onSelectCity={handleCityClick}
						cities={cities}
						onMapStyleChange={handleMapStyleChange}
						onToggleStyleSelector={handleStyleToggle}
						showStyleSelector={showStyleSelector}
					/>
					<MapCities
						currentState={activeState}
						hoveredCity={hoveredCity}
						onHoverCity={handleCityHover}
						selectedCity={selectedCity}
						onSelectCity={handleCityClick}
					/>
				</div>
			</div>
		</section>
	);
};

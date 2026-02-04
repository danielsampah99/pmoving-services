"use client";

import { type FC, useState, useRef, useMemo } from "react";
import { LocationControl } from "./LocationControl";
import { states } from "@/map-data";
import { MapCities } from "./MapCitites";
import { LeafletMap } from "./LeafletMap";
import type { LatLngExpression } from "leaflet";
import { useRouter } from "next/navigation";
import type { ServiceArea } from "@/payload-types";
import { MINNESOTA_CENTRE } from "@/data/map";

export type ActiveState = "all" | "MN" | "WI";

export const InteractiveMap: FC<{ serviceAreas: ServiceArea[] }> = (props) => {
	const [activeState, setActiveState] = useState<ActiveState>("all");
	const [hoveredCity, setHoveredCity] = useState<string | null>(null);
	const [selectedCity, setSelectedCity] = useState<string | null>(null);
	const [mapStyleIndex, setMapStyleIndex] = useState(0);
	const [mapCenter, setMapCenter] =
		useState<LatLngExpression>(MINNESOTA_CENTRE); // center of minnesota
	const [mapZoom, setMapZoom] = useState(4);

	const minnesotaMapCities = useMemo(() => {
		return props.serviceAreas.filter(
			(city) => city["state-initials"].toUpperCase() === "MN",
		);
	}, [props.serviceAreas]);

	const wisconsinMapCities = useMemo(
		() =>
			props.serviceAreas.filter(
				(city) => city["state-initials"].toUpperCase() === "WI",
			),
		[props.serviceAreas],
	);

	const [cities, setCities] = useState<ServiceArea[]>([
		...minnesotaMapCities,
		...wisconsinMapCities,
	]);
	const [showStyleSelector, setShowStyleSelector] = useState(false);
	const mapRef = useRef(null);
	const router = useRouter();

	const handleCityHover = (city: string | null) => {
		const cityCenter = cities.find((item) => item.slug === city);

		setHoveredCity(city);
		setMapCenter([cityCenter?.latitude ?? 44, cityCenter?.longitude ?? -93]);
		setMapZoom(13);
	};

	const handleStateClick = (selectedState: ActiveState) => {
		if (selectedState === "MN") {
			setCities(minnesotaMapCities);
			setActiveState("MN");
		} else if (selectedState === "WI") {
			setCities(wisconsinMapCities);
			setActiveState("WI");
			setMapZoom(15);
		} else {
			setCities([...minnesotaMapCities, ...wisconsinMapCities]);
			setActiveState("all");
		}
	};

	const handleCityClick = (city: string | null) => {
		setSelectedCity(city);

		const url = cities.find((item) => item.slug === city)?.slug;

		router.push(`/service-areas/${url}`);
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
						Our Moving Service Areas
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
						mapZoom={hoveredCity ? mapZoom : 9}
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
						minnesotaMapCities={minnesotaMapCities}
						wisconsinMapCities={wisconsinMapCities}
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

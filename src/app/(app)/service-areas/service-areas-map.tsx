"use client";

import type { MapCity } from "@/map-data";
import type { LatLngExpression } from "leaflet";
import { useRouter } from "next/navigation";
import { type FC, useRef, useState } from "react";
import { ListOfServiceAreas } from "./service-areas-list";

import dynamic from "next/dynamic";

const LeafletMap = dynamic(
	() => import("@/components/LeafletMap").then((mod) => mod.LeafletMap),
	{
		ssr: false,
		loading: () => (
			<div className="h-[625px] bg-gray-100 animate-pulse rounded-xl flex items-center justify-center">
				Loading map...
			</div>
		),
	},
);

export interface ServiceAreaMapProps {
	cities: MapCity[];
	serviceAreasMapZoom: number;
	serviceAreasCenter: LatLngExpression;
}

export const ServiceAreaMap: FC<ServiceAreaMapProps> = ({
	cities,
	serviceAreasMapZoom,
	serviceAreasCenter,
}) => {
	const mapRef = useRef(null);
	const [hoveredCity, setHoveredCity] = useState<string | null>(null);
	const [selectedCity, setSelectedCity] = useState<string | null>(null);
	const [mapCenter, setMapCenter] =
		useState<LatLngExpression>(serviceAreasCenter);
	const [showStyleSelector, setShowStyleSelector] = useState(false);
	const [mapStyleIndex, setMapStyleIndex] = useState(0);
	const [mapZoom, setMapZoom] = useState(serviceAreasMapZoom);

	const router = useRouter();

	const handleMapStyleChange = (index: number) => {
		setMapStyleIndex(index);
		setShowStyleSelector(false);
	};

	const handleCityClick = (city: string | null) => {
		setSelectedCity(city);

		const cityInfo = cities.find((item) => item.city === city);

		if (cityInfo?.href) {
			router.push(`${cityInfo.href}`);
		}
	};

	const handleHoverCity = (city: string | null) => {
		const cityCenter = cities.find((item) => item.city === city);

		setHoveredCity(city);
		setMapCenter([cityCenter?.latitude ?? 46, cityCenter?.longitude ?? -94]);
		setMapZoom(10);
	};

	const handleStyleToggle = () => setShowStyleSelector(!showStyleSelector);

	return (
		<div
			id="service-areas-map"
			className="max-w-7xl px-6 lg:px-8 pb-8 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 items-center"
		>
			<LeafletMap
				cities={cities}
				mapCenter={mapCenter}
				mapStyleIndex={mapStyleIndex}
				mapZoom={hoveredCity ? mapZoom : 6}
				mapRef={mapRef}
				hoveredCity={hoveredCity}
				onHoverCity={setHoveredCity}
				selectedCity={selectedCity}
				onSelectCity={handleCityClick}
				onMapStyleChange={handleMapStyleChange}
				onToggleStyleSelector={handleStyleToggle}
				showStyleSelector={showStyleSelector}
			/>

			<ListOfServiceAreas
				cities={cities}
				hoveredCity={hoveredCity}
				onHoverCity={handleHoverCity}
				selectedCity={selectedCity}
				onSelectCity={handleCityClick}
			/>
		</div>
	);
};

import "leaflet/dist/leaflet.css";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import { type MapCity, mapTiles } from "@/map-data";
import { Square3Stack3DIcon } from "@heroicons/react/24/outline";
import type { LatLngExpression } from "leaflet";
import dynamic from "next/dynamic";
import type { FC } from "react";
import type { MapCitiesProps } from "./MapCitites";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Button } from "@headlessui/react";
import { cn } from "@/utils";
import { useMap } from "react-leaflet";
import { Icon, divIcon } from "leaflet";
import { useEffect } from "react";
import { ServiceArea } from "@/payload-types";

export type LeafletMapProps = Pick<
	MapCitiesProps,
	"selectedCity" | "onSelectCity" | "hoveredCity" | "onHoverCity"
> & {
	cities: ServiceArea[];
	mapCenter: LatLngExpression;
	mapZoom: number;
	mapStyleIndex: number;
	mapRef: any;
	onMapStyleChange: (index: number) => void;
	onToggleStyleSelector: VoidFunction;
	showStyleSelector: boolean;
};

const MapContainer = dynamic(
	() => import("react-leaflet").then((map) => map.MapContainer),
	{ ssr: false },
);
const TileLayer = dynamic(
	() => import("react-leaflet").then((map) => map.TileLayer),
	{ ssr: false },
);
const ZoomControl = dynamic(
	() => import("react-leaflet").then((map) => map.ZoomControl),
	{ ssr: false },
);
const Marker = dynamic(
	() => import("react-leaflet").then((map) => map.Marker),
	{ ssr: false },
);
const Popup = dynamic(() => import("react-leaflet").then((map) => map.Popup), {
	ssr: false,
});

export const MapIcon = new Icon({
	iconUrl: markerIcon as unknown as string,
	iconRetinaUrl: markerIcon2x as unknown as string,
	shadowUrl: markerShadow as unknown as string,
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41],
});

const TruckMapIcon = (isHovered: boolean) =>
	divIcon({
		html: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000" class="size-6">
  			<path stroke-linecap="round" stroke-linejoin="round" d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
     		</svg>`,
		className: `${isHovered ? "animate-pulse scale-120 text-yellow-500" : "text-yellow-400"}`,
		iconSize: [20, 20],
		iconAnchor: [12, 20],
	});

export const LeafletMap: FC<LeafletMapProps> = ({
	mapCenter,
	mapZoom,
	mapRef,
	mapStyleIndex,
	cities,
	hoveredCity,
	onHoverCity,
	showStyleSelector,
	onSelectCity,
	onToggleStyleSelector,
	onMapStyleChange,
}) => {
	return (
		<div className="lg:col-span-2 bg-white rounded-xl shadow-lg overflow-hidden h-[625px] relative">
			<MapContainer
				center={mapCenter}
				zoom={mapZoom}
				zoomControl={false}
				ref={mapRef}
				className="size-full"
				attributionControl={false}
				// key={`map-${activeState}-${mapStyleIndex}-${selectedCity || "none"}`}
			>
				<TileLayer
					attribution={mapTiles[mapStyleIndex].attribution}
					url={mapTiles[mapStyleIndex].url}
					maxZoom={mapTiles[mapStyleIndex].maxZoom}
				/>
				<ZoomControl position="topright" />

				{/* City Markers */}
				{cities.map((city) => {
					const isHovered = hoveredCity === city.slug;

					return (
						<Marker
							key={city.id}
							position={[city.latitude, city.longitude]}
							icon={TruckMapIcon(isHovered)}
							eventHandlers={{
								click: () => onSelectCity(city.slug),
							}}
						>
							<Popup
								position={[city.latitude, city.longitude]}
								offset={[0, 0]}
								closeButton={true}
								autoPan={true}
							>
								<div className="p-1 w-auto">
									<div className="flex justify-between items-center mb-2">
										<h3 className="text-sm font-bold capitalize text-blue-700">
											{city.title}
										</h3>
										<Button
											onMouseOver={() => onHoverCity(city.slug)}
											onClick={() => onSelectCity(null)}
											className="text-slate-400 hover:text-slate-600"
										>
											<XMarkIcon className="size-4" />
										</Button>
									</div>
									<p className="text-xs text-slate-600 mb-2">
										We offer full-service moving, packing, and storage solutions
										in <span className="capitalize">{city?.title ?? ""}</span>
									</p>
									<Button className="mt-1 text-xs bg-blue-600 text-white px-2 py-1 rounded-md w-full hover:bg-blue-700 transition-colors">
										Get Quote for {city.title}
									</Button>
								</div>
							</Popup>
						</Marker>
					);
				})}
				<SetMapView mapZoom={mapZoom} mapCenter={mapCenter} />
			</MapContainer>

			{/* Map style selector button */}
			<div className="absolute top-4 left-4 z-[1000]">
				<Button
					onClick={onToggleStyleSelector}
					className="bg-white rounded-md shadow-md p-2 flex items-center justify-center hover:bg-slate-50 transition-colors"
					aria-label="Change map style"
				>
					<Square3Stack3DIcon className="text-slate-700 size-5" />
				</Button>

				{/* Map style selector dropdown */}
				{showStyleSelector && (
					<div className="absolute top-full left-0 mt-2 bg-white rounded-md shadow-lg p-2 w-48 z-[1001]">
						<h4 className="text-xs font-semibold text-slate-500 mb-2 px-2">
							Map Style
						</h4>
						{mapTiles.map((tile, index) => (
							<Button
								key={tile.name}
								onClick={() => onMapStyleChange(index)}
								className={cn(
									"w-full text-left px-2 py-1.5 text-sm rounded-md transition-colors",
									mapStyleIndex === index
										? "bg-blue-50 text-blue-700"
										: "hover:bg-slate-50 text-slate-700",
								)}
							>
								{tile.name}
							</Button>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

const SetMapView: FC<{ mapCenter: LatLngExpression; mapZoom: number }> = ({
	mapCenter,
	mapZoom,
}) => {
	const map = useMap();

	useEffect(() => {
		if (!map) return;

		map.flyTo(mapCenter, mapZoom, {
			duration: 0.75,
			easeLinearity: 0.5,
			animate: true,
		});
	}, [mapCenter, mapZoom, map]);

	return null;
};

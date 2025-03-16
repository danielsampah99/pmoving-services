import 'leaflet/dist/leaflet.css'
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import { MapCity, mapTiles } from "@/map-data"
import { Square3Stack3DIcon } from "@heroicons/react/24/outline"
import { LatLngExpression } from "leaflet"
import dynamic from "next/dynamic"
import { FC } from "react"
import { MapCitiesProps } from "./MapCitites"
import { XMarkIcon } from "@heroicons/react/24/solid"
import { Button } from "@headlessui/react"
import { cn } from "@/utils"
import { useMap } from 'react-leaflet'
import { Icon } from 'leaflet'
import { useEffect } from 'react'


export type LeafletMapProps = Pick<MapCitiesProps, 'selectedCity' | 'onSelectCity' | 'hoveredCity' | 'onHoverCity'> & {
	cities: MapCity[]
	mapCenter: LatLngExpression
	mapZoom: number
	mapStyleIndex: number

	mapRef: any
	onMapStyleChange: (index: number) => void
	onToggleStyleSelector: VoidFunction
	showStyleSelector: boolean
}


const MapContainer = dynamic(() => import('react-leaflet').then((map) => map.MapContainer), { ssr: false })
const TileLayer = dynamic(() => import('react-leaflet').then(map => map.TileLayer), { ssr: false })
const ZoomControl = dynamic(() => import('react-leaflet').then(map => map.ZoomControl), { ssr: false })
const Marker = dynamic(() => import('react-leaflet').then(map => map.Marker), { ssr: false })
const Popup = dynamic(() => import('react-leaflet').then(map => map.Popup), { ssr: false })
// const useMap = dynamic(() => import('react-leaflet').then(mod => mod.useMap), { ssr: false })



export const MapIcon = new Icon({
	iconUrl: markerIcon as unknown as string,
	iconRetinaUrl: markerIcon2x as unknown as string,
	shadowUrl: markerShadow as unknown as string,
	iconSize: [25, 41],
	iconAnchor: [12, 41],
	popupAnchor: [1, -34],
	shadowSize: [41, 41]
});

export const LeafletMap: FC<LeafletMapProps> = ({ mapCenter, mapZoom, mapRef, mapStyleIndex, cities, hoveredCity, showStyleSelector, onSelectCity, onToggleStyleSelector, onMapStyleChange }) => {

	return (
		<div className="lg:col-span-2 bg-white rounded-xl shadow-lg overflow-hidden h-[625px] relative">

			<MapContainer
				center={mapCenter}
				zoom={mapZoom}
				zoomControl={false}
				ref={mapRef}
				className='size-full'
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
				{cities.map((city) => (
					<Marker
						key={city.href}
						position={[city.latitude, city.longitude]}
						icon={MapIcon}
						eventHandlers={{
							click: () => onSelectCity(city.city),
						}}
					>
						<Popup position={[city.latitude, city.longitude]} offset={[0, -20]} closeButton={false}>
							<div className="p-1 w-[200px]">
								<div className="flex justify-between items-center mb-2">
									<h3 className="text-sm font-bold text-blue-700">{city.city}</h3>
									<Button
										onClick={() => onSelectCity(null)}
										className="text-slate-400 hover:text-slate-600"
									>
										<XMarkIcon className='size-4' />
									</Button>
								</div>
								<p className="text-xs text-slate-600 mb-2">
									{`We offer full-service moving, packing, and storage solutions in ${city.city}.`}
								</p>
								<Button className="mt-1 text-xs bg-blue-600 text-white px-2 py-1 rounded-md w-full hover:bg-blue-700 transition-colors">
									Get Quote for {city.city}
								</Button>
							</div>
						</Popup>

					</Marker>
				)
				)}
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
						<h4 className="text-xs font-semibold text-slate-500 mb-2 px-2">Map Style</h4>
						{mapTiles.map((tile, index) => (
							<Button
								key={tile.name}
								onClick={() => onMapStyleChange(index)}
								className={cn(
									"w-full text-left px-2 py-1.5 text-sm rounded-md transition-colors",
									mapStyleIndex === index ? "bg-blue-50 text-blue-700" : "hover:bg-slate-50 text-slate-700",
								)}
							>
								{tile.name}
							</Button>
						))}
					</div>
				)}
			</div>

			{/* Map legend */}
			{/* <div className="absolute bottom-4 left-4 bg-white bg-opacity-90 p-3 rounded-lg shadow-md z-[1000]">
				<h3 className="text-sm font-semibold text-slate-900 mb-2">Legend</h3>

				<div className="flex items-center gap-2">
					<TruckIcon className="text-yellow-400 size-[14px]" />
					<span className="text-xs text-slate-700">Service Area</span>
				</div>
			</div> */}
		</div>
	)
}

const SetMapView: FC<{ mapCenter: LatLngExpression, mapZoom: number }> = ({ mapCenter, mapZoom }) => {
	const map = useMap();

	useEffect(() => {
		if (!map) return;

		map.setView(mapCenter, mapZoom);
	}, [mapCenter, mapZoom, map]);

	return null;
};

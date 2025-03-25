import { Button } from "@headlessui/react";
import type { ActiveState } from "./InteractiveMap";
import { cn } from "@/utils";
import { FC } from "react";
import { State } from "@/map-data";

export type LocationControlProps = {
	currentState: ActiveState;
	onStateChange: (activeState: ActiveState) => void;
	states: State[];
};

export const LocationControl: FC<LocationControlProps> = ({
	states,
	currentState,
	onStateChange,
}) => {
	return (
		<div className="flex justify-center gap-3 mt-6">
			{states.map((state) => {
				const isActive = currentState === state.value;
				return (
					<Button
						key={state.value}
						type="button"
						onClick={() => onStateChange(state.value)}
						className={cn(
							"px-4 capitalize py-2 rounded-full text-sm font-medium transition-colors",
							isActive
								? "bg-moving-yellow font-semibold text-white"
								: "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200",
						)}
					>
						{state.label}
					</Button>
				);
			})}
		</div>
	);
};

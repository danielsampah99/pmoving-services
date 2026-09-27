import * as migration_20250922_015925 from "./20250922_015925";
import * as migration_20260927_160821_add_service_pricing from "./20260927_160821_add_service_pricing";

export const migrations = [
	{
		up: migration_20250922_015925.up,
		down: migration_20250922_015925.down,
		name: "20250922_015925",
	},
	{
		up: migration_20260927_160821_add_service_pricing.up,
		down: migration_20260927_160821_add_service_pricing.down,
		name: "20260927_160821_add_service_pricing",
	},
];

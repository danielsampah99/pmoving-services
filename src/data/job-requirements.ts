import { HeroIconType } from "@/components/HeroIcon"
import { ArchiveBoxIcon, IdentificationIcon, TruckIcon, UsersIcon, ClockIcon } from '@heroicons/react/20/solid'


export type JobRequirement = {
	name: string,
	description: string,
	icon: HeroIconType
}


export const jobRequirements: JobRequirement[] = [
	{
		name: 'Identification',
		description: "Valid driver's license, (Driver roles only)",
		icon: IdentificationIcon,
	},
	{
		name: 'Transportation',
		description: "Reliable transportation",
		icon: TruckIcon,
	},
	{
		name: 'Move Items',
		description: "Ability to lift and move objects and boxed",
		icon: ArchiveBoxIcon,
	},
	{
		name: 'Team work',
		description: "Ability to work well in a team",
		icon: UsersIcon,
	},
	{
		name: 'Punctuality',
		description: "Ability to adhere to schedule. Be on time!",
		icon: ClockIcon,
	},
]

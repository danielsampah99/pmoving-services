export interface ServiceAreaType {
	id: number;
	title: string;
	description: string;
	'short-code': string;
	latitude: number;
	longitude: number;
	/**
	 * What state does this service area or city belong to?
	 */
	'state-name': string;
	/**
	 * The two-letter word initials of the state this service area or city belongs to. Example if city is Minnesota, state initials should be MN
	 */
	'state-initials': string;
	updatedAt: string;
	createdAt: string;
}

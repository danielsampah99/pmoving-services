import { CareerForm } from "./CareerForm";
import { Info } from "./Info";


export default function CareersPage() {
	return (
		<div className="bg-white max-sm:border-t max-sm:border-solid max-sm:border-white">
			<Info />
			<CareerForm />
		</div>
	)
}

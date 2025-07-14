import { getPayload } from "payload";
import { HeroSection } from "./hero";
import { ReferralForm } from "./referral-form";
import config from "@payload-config";
import { submitReferral } from "@/data/referrals";

export default async function ReferralProgramPage() {
	return (
		<section>
			<HeroSection />
			<ReferralForm />
		</section>
	);
}

import payloadConfig from "@/payload.config";
import { jobApplicationEmail, JobApplicationEmailProps } from "@/utils";
import { NextRequest, NextResponse } from "next/server";
import { getPayload } from "payload";

export const POST = async (req: NextRequest) => {
	try {
		const formData = await req.formData()

		const data: JobApplicationEmailProps = {
			fullName: formData.get('fullName') as string,
			emailAddress: formData.get('emailAddress') as string,
			phone: formData.get('phone')  as string,
			employmentPositions: String(formData.get('employmentPositions')) === 'undefined' ? '' : formData.get('employmentPositions') as string,
			hasTransport: formData.get('hasTransport') === 'true',
			isUsCitizen: formData.get('isUsCitizen') === 'true',
			isAgeOk: formData.get('isAgeOk') === 'true',
			hasLicense: formData.get('hasLicense') === 'true',
			canCommunicate: formData.get('canCommunicate') === 'true',
		}

		console.dir({ 'data': JSON.stringify(data, null, 4) })

		const payload = await getPayload({ config: payloadConfig})
		try {
			const email = await payload.sendEmail({ to: process.env.SMTP_USER, subject: 'Premium Moving Services: Job Application', html: await jobApplicationEmail({...data})})
		} catch(e) {
			throw new Error("Could not send email")
		}


		return NextResponse.json({success: 'Application received'}, { status: 200 });
	} catch (error) {
		console.error('Error processing career application:', error);
		return NextResponse.json({error: 'Failed to process application.'}, { status: 500 });
	}
}

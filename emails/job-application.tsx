import { Text, Heading, Img, Preview, Html, Head, Body, Container, Hr, Section } from '@react-email/components'

interface JobApplicationEmailProps {
	fullName: string,
	jobPositions?: string
	emailAddress: string
	phone: string,
	hasTransport: boolean,
	hasLicense: boolean ,
	canCommunicate: boolean
	isAgeOk: boolean,
	isUsCitizen: boolean
	employmentPositions?: string
}

const APP_URL = process.env.APP_URL ? process.env.APP_URL : 'https://pmovingservices.com';

export function JobApplicationEmail (props: JobApplicationEmailProps) {
	return (
		<Html>
			<Head />
			<Preview>New Job Application From Premium Moving Services Website</Preview>
			<Body style={{ background: '#fff', color: '#595959' }}>
				<Container style={container}>
					<Img
			          	src={`${APP_URL}/logo.svg`}
				        width={48}
			          	height={48}
				        alt="Preimum Moving services"
					/>

					<Heading style={{ fontSize: '28px', marginTop: '48px', fontWeight: 'bold' }}>New Job Application</Heading>
					<Hr style={{ borderColor: '#dddddd', marginTop: '10px', marginBottom: '10px' }} />

					<Text style={{ fontSize: '16px', lineHeight: '24px' }}> Find details of the application below</Text>

					{[
						{ number: 1, title: 'Full Name', description: props.fullName},
						{ number: 2, title: 'Email Address', description: props.emailAddress.toLowerCase() },
						{ number: 3, title: 'Phone Number', descriptin: props.phone },
						{ number: 4, title: 'Transportation', description: props.hasTransport ? 'Applicant has a valid mode of transportation' : 'Applicant does not have a reliable mode of transpoprt' },
						{ number: 5, title: 'Citizenship', description: props.isUsCitizen ? 'Applicant holds a valid US citizenship' : 'Applicant may not be a citizen or not hold a valid US citizenshipp' },
						{ number: 6, title: 'Age', description: props.isAgeOk ? 'Applicant meets the age requirement of the job' : 'Applicant does not meet the necessary age requirements of the job'},
						{ number: 7, title: 'Driver\'s License', description: props.hasLicense ? 'Applicant has a valid driver\'s license' : 'Applicant does not have a valid driver\'s license' },
						{ number: 8, title: 'Communication', description: props.canCommunicate ? 'Applicant can communicate effectively in American English' : 'Applicant may not speak fluent English' },
						{ number: 9, title: 'Employment Information', description: props.employmentPositions ?? 'No employment information provided' }
					].map(info => (
						<Section key={info.number} style={{ marginBottom: '36px'}}>
							<div style={{ marginRight: '32px', marginLeft: '18px', display: 'inline-flex', alignItems: 'start' }}>
	            				<div
									style={{
										marginRight: '18px', display: 'flex', height: '24px', width: '24px', flexShrink: '0', alignItems: 'center', justifyContent: 'center', background: '#ffd00d', borderRadius: '50%', color: '#ffffff', fontWeight: 600, lineHeight: 1, fontSize: '12px'
								 	}}
								>
									{info.number}
	                			</div>
	                   			<div>
	                      		<Heading
	                        		as="h2"
	                          		style={{ marginTop: '0px', marginBottom: '8px', color: '#101828', lineHeight: '28px', fontSize: '18px' }}

	                        	>
	                        		{info.title}
	                         	</Heading>
					            <Text style={{ margin: '0px', color: '#6a7282', fontSize: '14px', lineHeight: '24px' }}>
					               {info.description}
					            </Text>
	                      		</div>
	          				</div>
						</Section>
					))}


				</Container>
			</Body>
		</Html>
	)
}

JobApplicationEmail.PreviewProps = {

    fullName: "Daniel Sampah",
    emailAddress: "danielsampah@gmail.com",
    phone: "+233847382849",
    employmentPositions: "Some description",
    hasTransport: false,
    isUsCitizen: true,
    isAgeOk: false,
    hasLicense: false,
    canCommunicate: true
}

export default JobApplicationEmail

const body = {
	backgroundColor: '#ffffff'
}

const container = {
	margin: '0 auto',
	padding: '20px 25px 48px',
	backgroundImage: `url(${process.cwd}/jop-app-email-bg.png)`,
	backgroundPosition: 'bottom',
	backgroundRepeat: 'no-repeat, no-repeat',
};

import ContactComponent from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Professional Movers Me",
	description:
		"Moving your stuff whether locally or somewhere far? Contact the best and most professional amonst the various moving companies - Premium Moving Services",
};

const ContactPage = () => {
	return <ContactComponent />;
};

export default ContactPage;

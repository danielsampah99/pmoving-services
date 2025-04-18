import {
	FacebookIcon,
	InstagramIcon,
	EmailIcon,
	PhoneIcon,
	WhatsappIcon,
	XIcon,
	YoutubeIcon,
	FooterIconProps,
} from "@/components/icons/footer-icons";
import { FC } from "react";

export type FooterLink = {
	name: string;
	href: string;
};

export type FooterSocial = FooterLink & { icon: FC<FooterIconProps> };

export type FooterNavigation = {
	solutions: FooterLink[];
	locations: FooterLink[];
	company: FooterLink[];
	certifications: FooterLink[];
	socials: FooterSocial[];
};

export const navigation = {
	solutions: [
		{ name: "Marketing", href: "#" },
		{ name: "Analytics", href: "#" },
		{ name: "Commerce", href: "#" },
		{ name: "Insights", href: "#" },
	],
	locations: [
		{ name: "Minnesota", href: "#" },
		{ name: "Wisconsin", href: "#" },
	],
	company: [
		{ name: "About", href: "/#about-us" },
		{ name: "Contact Us", href: "/contact-us" },
		{ name: "Affiliates", href: "/affiliates" },
		{ name: "Blog", href: "/blog" },
		{ name: "FAQs", href: "/#faqs" },
		{ name: "HTML Sitemap", href: "#" },
		{ name: "Referral Program", href: "#" },
		{ name: "Privacy Policy", href: "/privacy-policy" },
		{ name: "Terms & Conditions", href: "/terms-and-conditions" },
	],
	certifications: [
		{ name: "DOT: #3047943", href: "#" },
		{ name: "HHG:#383025", href: "#" },
		{ name: "BBB Certifications", href: "#" },
	],
	socials: [
		{
			name: "Facebook",
			href: "https://facebook.com/moveatease",
			icon: FacebookIcon,
		},
		{
			name: "Instagram",
			href: "https://www.instagram.com/premiummoving16/?next=%2F",
			icon: InstagramIcon,
		},
		{
			name: "X",
			href: "https://twitter.com/g1sackie",
			icon: XIcon,
		},
		{
			name: "YouTube",
			href: "https://www.youtube.com/@PremiumMovingServices",
			icon: YoutubeIcon,
		},
		{
			name: "Whatsapp",
			href: "https://web.whatsapp.com/send?phone=6517575135",
			icon: WhatsappIcon,
		},
		{
			name: "Email",
			href: "mailto:info@pmovingservices.com",
			icon: EmailIcon,
		},
		{
			name: "Phone",
			href: "tel: 651-757-5135",
			icon: PhoneIcon,
		},
	],
};

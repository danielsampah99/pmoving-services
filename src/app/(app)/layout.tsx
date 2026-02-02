import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Trusted Movers Near me | Premium Moving Services",
	description:
		"Get premium moving services available at the snap of a finger. From local, commercial, long-distance to specialty moving, we help you move as smoothly as it gets.",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<head>
				{/* Google tag manager */}
				<Script id="gtm" strategy="afterInteractive">
					{`(function(w,d,s,l,i){w[l]=w[l]||[];
		              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
		              var f=d.getElementsByTagName(s)[0],
		                  j=d.createElement(s),
		                  dl=l!='dataLayer'?'&l='+l:'';
		              j.async=true;
		              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
		              f.parentNode.insertBefore(j,f);
		            })(window,document,'script','dataLayer','GTM-MBJHMPNM');`}
				</Script>

				{/* clickease.com tracking*/}
				<Script
					id="click-ease-script"
					strategy="afterInteractive"
					src="https://www.clickcease.com/monitor/stat.js"
				/>

				<Script
					id="gtag-script"
					strategy="afterInteractive"
					src="https://www.googletagmanager.com/gtag/js?id=G-3RE74NXLBS"
				>
					{`window.dataLayer = window.dataLayer || [];
						function gtag() {
							dataLayer.push(arguments);
							gtag('js' new Date());

							gtag('config', 'G-3RE74NXLBS')
						}
					`}
				</Script>

				<noscript>
					<a href="https://www.clickcease.com" rel="nofollow">
						<img
							src="https://monitor.clickcease.com"
							alt="ClickCease"
						/>
					</a>
				</noscript>
			</head>
			<body className={`${inter.variable} antialiased`}>
				<header>
					<Banner />
					<Header />
				</header>
				{children}
				<footer>
					<Footer />
				</footer>
				<Analytics />
				<SpeedInsights />
				<Script
					strategy="lazyOnload"
					src="https://embed.tawk.to/6876d75d4ec95b190ffa0a72/1j083iht7"
				/>

				{/*  GTM no script */}
				<noscript>
					<iframe
						src="https://www.googletagmanager.com/ns.html?id=GTM-MBJHMPNM"
						height="0"
						width="0"
						style={{ display: "none", visibility: "hidden" }}
						title="gtm-script"
					/>
				</noscript>
			</body>
		</html>
	);
}

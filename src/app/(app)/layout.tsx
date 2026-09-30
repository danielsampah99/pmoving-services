import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { headers } from "next/headers";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Trusted Movers Near me | Premium Moving Services",
	description:
		"Get premium moving services available at the snap of a finger. From local, commercial, long-distance to specialty moving, we help you move as smoothly as it gets.",
};

export default async function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {

	const headersList = await headers()

	const nonce = headersList.get("x-nonce") || ''

	return (
		<html lang="en">
			<head>
				{/* Google tag manager */}
				<Script id="gtm" strategy="afterInteractive" nonce={nonce}>
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
					nonce={nonce}
				/>

				<Script
					id="gtag-script"
					strategy="afterInteractive"
					src="https://www.googletagmanager.com/gtag/js?id=G-3RE74NXLBS"
					nonce={nonce}
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
						<img src="https://monitor.clickcease.com" alt="ClickCease" />
					</a>
				</noscript>


				<Script>
					{`window.__lc = window.__lc || {};
						window.__lc.license = 19944319;
						window.__lc.integration_name = "manual_onboarding";
						window.__lc.product_name = "livechat";
						;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))`}
				</Script>
				<noscript>
					<a href="https://www.livechat.com/chat-with/19944319/" rel="nofollow">Chat with us</a>, powered by <a href="https://www.livechat.com/?welcome" rel="noopener nofollow" target="_blank">LiveChat</a>
				</noscript>


			</head>
			<body className={`${inter.variable} antialiased`}>
				<header>
					<Banner />
					<Header />
				</header>
				{children}

				<Footer />

				<Analytics />
				<SpeedInsights />

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

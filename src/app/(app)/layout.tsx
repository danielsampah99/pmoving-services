import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Premium Moving Services",
	description: "The Number 1 moving company near you",
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
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
			</body>
		</html>
	);
}

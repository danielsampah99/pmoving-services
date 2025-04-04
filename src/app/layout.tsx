import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Banner } from "@/components/Banner";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
	variable: "--font-geist-sans",
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
			</body>
		</html>
	);
}

import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [{ hostname: "media.discordapp.net" }, { hostname: 'www.pmovingservices.com' }, { hostname: 'lirp.cdn-website.com' }]

	},
	turbopack: {
		//enabled: true,
	},
	async redirects() {
		return [
			{
				source: "/pack-and-unpack",
				destination: "/services/local-moving/pack-and-unpack",
				permanent: true
			},
			{
				source: "/local-moving-mn",
				destination: "/services/local-moving",
				permanent: true
			},
			{
				source: "/commercial-moving-mn",
				destination: "/services/commercial-moving",
				permanent: true
			},
			{
				source: "/specialty-moving-mn",
				destination: "/services/specialty-moving",
				permanent: true
			},
			{
				source: "/moving-reviews",
				destination: "/#reviews",
				permanent: true
			},
			{
				source: "/online-request-form",
				destination: "/free-quote",
				permanent: true
			},
			{
				source: "/long-distance-moving",
				destination: "/services/long-distance-moving",
				permanent: true
			},
			{
				source: "/reviews",
				destination: "/#reviews",
				permanent: true
			},
			{
				source: "/moving-cost-calculator",
				destination: "/blogs/moving-cost-calculator",
				permanent: true
			},
			{
				source: "/moving-cost-estimator",
				destination: "/blogs/moving-cost-estimator-understanding-moving-costs",
				permanent: true
			},
			{
				source: "/how-much-does-it-cost-to-ship-a-car",
				destination: "/blogs/how-much-does-it-cost-to-ship-a-car",
				permanent: true
			},
			{
				source: "/moving-company-prices",
				destination: "/blogs/moving-company-prices-understanding-the-cost-to-hire-movers",
				permanent: true
			},
			{
				source: "/moving-estimate",
				destination: "/blogs/moving-estimate",
				permanent: true
			},
			{
				source: "/how-much-do-movers-cost",
				destination: "/blogs/how-much-do-movers-cost",
				permanent: true
			},
			{
				source: "/moving-insurance",
				destination: "/blogs/moving-insurance",
				permanent: true
			},
			{
				source: "/checklist-for-hiring-moving-companies-mn",
				destination: "/blogs/checklist-for-hiring-moving-companies-mn",
				permanent: true
			},
			{
				source: "/how-much-do-movers-minneapolis-cost",
				destination: "/blogs/how-much-does-full-service-move-cost-in-minneapolis",
				permanent: true
			},
			{
				source: "/moving-guide",
				destination: "/blogs/moving-guide-and-checklists-for-senior-citizens",
				permanent: true
			},
			{
				source: "/moving-cost",
				destination: "/blogs/moving-cost",
				permanent: true
			},
			{
				source: "/minneapolis-movers",
				destination: "/blogs/movers-minneapolis",
				permanent: true
			},
			{
				source: "/movers-st-paul",
				destination: "/blogs/movers-st-paul",
				permanent: true
			},
			{
				source: "/st-paul-movers",
				destination: "/service-areas/movers-saint-paul-mn",
				permanent: true
			},
			{
				source: "/how-much-are-movers",
				destination: "/blogs/how-much-are-movers",
				permanent: true
			},
			{
				source: "/movers-woodbury-mn",
				destination: "/blogs/movers-woodbury-mn-reliable-local-hourly-moving-a-complete-guide",
				permanent: true
			}
		]
	}
};

export default withPayload(nextConfig);

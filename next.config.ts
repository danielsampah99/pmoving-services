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
			}
		]
	}
};

export default withPayload(nextConfig);

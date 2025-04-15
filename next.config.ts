import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [{ hostname: "media.discordapp.net" }, { hostname: 'www.pmovingservices.com' }, { hostname: 'lirp.cdn-website.com' }]

	},
	turbopack: {
		//
	}
};

export default withPayload(nextConfig);

import type { NextConfig } from "next"

const nextConfig: NextConfig = {
	experimental: {
		// dynamicIO: true,
		// useCache: true,
	},

	cacheHandler: require.resolve('./cache-handler'),

	logging: {
		fetches: {},
	},
}

export default nextConfig

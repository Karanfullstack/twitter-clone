/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "img.freepik.com",
				// Optional: Set pathname to match the specific image
				pathname: "/free-vector/illustration-user-avatar-icon_53876-5907.jpg",
			},
		],
	},
};

module.exports = nextConfig;

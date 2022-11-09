/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [
			`${process.env.S3_UPLOAD_BUCKET}.s3-accelerate.amazonaws.com`,
			`${process.env.S3_UPLOAD_BUCKET}.s3.${process.env.S3_UPLOAD_REGION}.amazonaws.com`
		]
	}
};

module.exports = nextConfig;

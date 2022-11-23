// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// };

module.exports = {
  images: {
    domains: ["scontent.cdninstagram.com"],
  },
  env: {
    API_KEY: process.env.AIRTABLE_TOKEN,
  },
};

// module.exports = nextConfig;

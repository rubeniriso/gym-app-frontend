/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "clipground.com",
      "images.vexels.com",
      "webstockreview.net",
      "www.inspireusafoundation.org",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
  async headers() {
    return [
      {
        // Define the route for your API
        source: "/api/:path*",
        // Set the CORS headers
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "X-Requested-With, Content-Type, Authorization",
          },
          { key: "Access-Control-Allow-Credentials", value: "true" },
        ],
      },
    ];
  },
};

export default nextConfig;

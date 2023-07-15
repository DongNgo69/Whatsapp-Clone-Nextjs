/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env:{
    NEXT_PUBLIC_ZEGO_APP_ID: 1263359186,
    NEXT_PUBLIC_ZEGO_SERVER_ID: "60ff7fcd72c16891c45808c2eceb6e54",
  },
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;

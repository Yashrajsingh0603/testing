/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",       // generates a static site in the /out folder
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
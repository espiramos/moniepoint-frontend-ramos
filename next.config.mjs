/** @type {import('next').NextConfig} */
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = dirname(fileURLToPath(import.meta.url));
const nextConfig = {
  images: {
    unoptimized: true
  },
  sassOptions: {
    includePaths: [join(__dirname, "styles")],
  },
};

export default nextConfig;

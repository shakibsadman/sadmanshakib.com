import { withPayload } from "@payloadcms/next/withPayload";
import { withContentlayer } from "next-contentlayer2";
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "avatars.githubusercontent.com", protocol: "https" },
      { hostname: "yeyngzrif8taffof.public.blob.vercel-storage.com", protocol: "https" },
    ],
  },
};

export default withPayload(withContentlayer(nextConfig));

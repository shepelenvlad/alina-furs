/** Static export: the build produces plain files in /out, which Cloudflare hosts for free. */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
};
export default nextConfig;

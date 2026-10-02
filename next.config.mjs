/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/:lang(en|es)/home", destination: "/:lang", permanent: true },
    ];
  },
};

export default nextConfig;

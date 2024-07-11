/** @type {import('next').NextConfig} */

function nextConfig(config) {
    return {
      ...config,
      reactStrictMode: true,
      swcMinify: true,
      webpack(webpackConfig) {
        webpackConfig.module.rules.push({
          test: /\.svg$/,
          use: [{ loader: '@svgr/webpack', options: { icon: true } }],
        });
        return webpackConfig;
      },
    };
  }
  
  export default nextConfig({});
  
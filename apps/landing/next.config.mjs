import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXTAUTH_URL: process.env.NEXT_PUBLIC_NEXTAUTH_URL,
  },
  webpack(config) {
    // Agregar regla para archivos .glsl
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: [
        'raw-loader',
        {
          loader: 'glslify-loader',
          options: {
            transform: [
              ['glslify-hex', { 'option-1': true, 'option-2': 42 }],
              ['glslify-import']
            ]
          }
        }
      ]
    });

    // Agregar regla para archivos .svg
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false,
                },
              ],
            },
          },
        },
      ],
    });

    return config;
  },
};

export default withContentlayer(nextConfig);

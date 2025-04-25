import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/app/styles')],
    prependData: `@import "variables.scss";`
  },
  async rewrites() {
    return [
      {
        source: '/product/:id',
        destination: '/routes/product/:id',
      },
      {
        source: '/products',
        destination: '/routes/products',
      },
    ];
  },
}

export default nextConfig;
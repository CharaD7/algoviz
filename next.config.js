/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    reactStrictMode: true,
    swcMinify: true,
    eslint: {
        dirs: ['pages', 'components', 'public', 'lib', 'utils'],
    },
};

module.exports = nextConfig;

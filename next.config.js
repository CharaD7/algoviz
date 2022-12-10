/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: '/app',
    experimental: {
        appDir: true,
    },
    reactStrictMode: true,
    swcMinify: true,
    eslint: {
        dirs: ['app', 'components', 'lib', 'pages', 'public', 'utils'],
    },
};

module.exports = nextConfig;

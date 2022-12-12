/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    eslint: {
        dirs: ['components', 'lib', 'pages', 'public', 'utils'],
    },
};

module.exports = nextConfig;

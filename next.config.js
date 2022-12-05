/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        dirs: ['pages', 'components', 'public', 'lib', 'utils'],
    },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['naiminathayurveda.org'],
    },
    env: {
        NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    },
    experimental: {
        scrollRestoration: true,
        nftTracing: true 
    },
    rewrites: async () => {
        return [
            {
                source: '/',
                destination: '/index.html',
            },
        ]
    },
    
    // // Configure `pageExtensions` to include MDX files
    // pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
    // // Optionally, add any other Next.js config below
}

module.exports = nextConfig;

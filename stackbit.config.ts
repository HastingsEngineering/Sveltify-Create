export default {
    stackbitVersion: '~0.6.0',
    nodeVersion: "20",
    ssgName: 'custom',
    devCommand: 'npm run dev',
    experimental: {
        ssg: {
            name: 'sveltekit',
            logPatterns: {
            up: [' ready in '],
            },
            passthrough: ['/vite-hmr/**'],
        },
    },
  }
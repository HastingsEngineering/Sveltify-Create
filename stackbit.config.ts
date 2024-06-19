export default {
    stackbitVersion: '~0.5.0',
    nodeVersion: "18",
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
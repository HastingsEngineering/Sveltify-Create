import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
    stackbitVersion: '~0.6.0',
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
    contentSources: [
        new GitContentSource({
            rootPath: __dirname,
            contentDirs: ["src/content"],
            models: [
                {
                    name: "Page",
                    description: "Pages on the website",
                    type: "page",
                    urlPath: "/{slug}",
                    filePath: "src\\content\\pages\\{slug}.json",
                    hideContent: true,
                    fieldGroups: [
                        {
                            name: "meta",
                            label: "Metadata",
                            icon: "circle-info"
                        }
                    ],
                    fields: [
                        {
                            name: "slug",
                            type: "slug",
                            required: true,
                            group: "meta"
                        },
                        {
                            name: "title",
                            type: "string",
                            required: true,
                            group: "meta"
                        },
                        {
                            name: "description",
                            type: "text",
                            required: true,
                            group: "meta"
                        },
                        {
                            name: "blocks",
                            type: "model",
                            models: [],
                            groups: ["Block"]
                        }
                    ]
                },
                {
                    name: "Test",
                    type: "object",
                    groups: ["Block"],
                    fields: [
                        {
                            name: "TestField",
                            type: "string",
                            required: true
                        }
                    ]
                },
                {
                    name: "Test2",
                    type: "object",
                    groups: ["Block"],
                    fields: [
                        {
                            name: "TestField2",
                            type: "string",
                            required: true
                        }
                    ]
                },
            ],
            assetsConfig: {
                referenceType: "static",
                assetsDir: "static",
                staticDir: "static",
                uploadDir: "uploads",
                publicPath: "/"
            }
        })
    ]
}); 
import { defineStackbitConfig } from "@stackbit/types";
import { GitContentSource } from "@stackbit/cms-git";

export default defineStackbitConfig({
    stackbitVersion: '~0.6.0',
    nodeVersion: '18',
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
                            type: "list",
                            items: {
                                type: "model",
                                models: [],
                                groups: ["Block"]
                            }
                        }
                    ]
                },
                {
                    name: "HeaderSimpleWithEyebrow",
                    type: "object",
                    groups: ["Block"],
                    fields: [
                        {
                            name: "Heading",
                            type: "string",
                            default: "Heading",
                            required: true
                        },
                        {
                            name: "EyebrowText",
                            type: "string",
                            default: "Eyebrow Text",
                            required: true
                        },
                        {
                            name: "Body",
                            type: "string",
                            default: "Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",
                            required: true
                        },
                        {
                            name: "ref",
                            type: "string",
                            const: "header-simple-with-eyebrow",
                            hidden: true
                        },
                    ]
                }
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
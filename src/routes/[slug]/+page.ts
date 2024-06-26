import { error } from '@sveltejs/kit';

// Tells Svelte to prerender all of the pages in the root of the /src/lib/site/pages route
export async function entries() {
    const pageFiles = Object.entries(import.meta.glob("/src/content/pages/*.json"));
    const pages = await Promise.all(pageFiles.map(async ([path, resolver]) => {
        let file = await resolver();        
        const slug = path.slice(19, -5);
        return {slug}
    }));
    return pages.filter(page => page);
}

// Fetches the data for the appropriate page the user/Svelte prerender is requesting
/** @type {import('./$types').PageLoad} */
export async function load({params}) {
    try {
        const page = await import(`../../content/pages/${params.slug}.json`);
        return { PageContent: page.default, path: `src/content/pages/${params.slug}.json`}
    } catch(err) {
        throw error(404, "Not Found")
    }
}
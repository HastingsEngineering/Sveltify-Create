<script lang="ts">
	import { Meta, BlockComponents } from "$lib/components";

    export let data;

    let { PageContent } = data;
</script>

<Meta {data}/>

<article>
    {#if PageContent.blocks}
        {#each PageContent.blocks as block, index}
            <section data-sb-field-path={`blocks.${index}`}>
                <svelte:component this={BlockComponents.find(component => component.ref === block.ref)?.component} data={block} />
            </section>
        {/each}
    {/if}
</article>
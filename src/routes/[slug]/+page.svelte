<script>
	import LayoutBlocks from "$lib/layout/LayoutBlocks.svelte";
    export let data;

    let { path } = data;
</script>

<main data-sb-object-id={path}>
    <LayoutBlocks {data}/>
</main>
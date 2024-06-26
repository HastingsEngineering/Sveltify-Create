<script>
    export let data;

    let { PageContent } = data;
</script>

<svelte:head>
    <meta charset="utf-8">
    <title>{PageContent.title}</title>
    <meta name="description" content={PageContent.description}>
</svelte:head>
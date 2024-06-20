<script>
    export let data;
    let { PageContent, path } = data;
</script>

<div data-sb-object-id={path}>
    <h1 data-sb-field-path="title">{PageContent.title}</h1>
</div>
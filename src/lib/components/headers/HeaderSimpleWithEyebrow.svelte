<script context="module">
  export const ref = "header-simple-with-eyebrow";
</script>

<script lang="ts">

  export let data;

  let { EyebrowText, Heading, Body, width } = data;
</script>

<div class="py-24 sm:py-32">
  <div class="mx-auto px-6 lg:px-8">
    <div class="mx-auto max-w-2xl lg:mx-0">
      <p class="text-base font-semibold leading-7 text-secondary-600-300-token" data-sb-field-path=".EyebrowText">{EyebrowText}</p>
      <h2 class="mt-2 text-4xl font-bold tracking-tight sm:text-6xl" data-sb-field-path=".Heading">{Heading}</h2>
      <p class="mt-6 text-lg leading-8" data-sb-field-path=".Body">{Body}</p>
    </div>
  </div>
</div>
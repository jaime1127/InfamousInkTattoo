<script lang="ts">
	export let title: string;
	export let description: string;
	export let keywords: string = '';
	export let author: string = '';
</script>

<svelte:head>
	{#if title}
		<title>{title}</title>
		<meta name="title" content={title} />
		<meta property="og:title" content={title} />
		<meta name="twitter:title" content={title} />
	{/if}

	{#if description}
		<meta name="description" content={description} />
		<meta property="og:description" content={description} />
		<meta name="twitter:description" content={description} />
	{/if}

	{#if keywords}
		<meta name="keywords" content={keywords} />
	{/if}

	{#if author}
		<meta name="author" content={author} />
	{/if}

	<meta property="og:type" content="website" />
</svelte:head>

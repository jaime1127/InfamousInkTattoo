<script lang="ts">
	import '../app.css';
	import Header from '$lib/Components/Header.svelte';
	import Footer from '$lib/Components/Footer.svelte';
	import Meta from '$lib/Components/Meta.svelte';
	import { page } from '$app/stores';
</script>

<Meta
	{...$page.data.meta}
	title={$page.data.meta?.title}
	description={$page.data.meta?.pageDescription}
	keywords={$page.data.meta?.pageKeywords}
	author={$page.data.meta?.pageAuthor}
/>

<Header />
<main>
	<slot />
</main>
<Footer />

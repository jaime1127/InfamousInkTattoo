<script lang="ts">
	import type { PageData } from './$types';
	import Video from '$lib/Components/Video.svelte';
	import GridList from '$lib/Components/GridList.svelte';
	import Hero from '$lib/Components/Hero.svelte';

	export let data: PageData;
</script>

<Video />
<Hero title={data.title} content={data.content} img={data.storeFront} />
<!-- <GridList image={data.tattoos} /> -->

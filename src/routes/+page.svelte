<!-- src/routes/+page.svelte -->
<script lang="ts">
	import type { PageData } from './$types';
	import Video from '$lib/Components/Video.svelte';
	import GridList from '$lib/Components/GridList.svelte';
	import Hero from '$lib/Components/Hero.svelte';

	export let data: PageData;
	console.log({data})
</script>

<Video />
<Hero title={data.title} content={data.content} />
<GridList image={data.tattoos}/>

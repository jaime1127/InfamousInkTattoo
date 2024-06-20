<script lang="ts">
	import type { PageData } from './$types';
	import Video from '$lib/Components/Video.svelte';
	import GridList from '$lib/Components/GridList.svelte';
	import Hero from '$lib/Components/Hero.svelte';

	export let data: PageData;
</script>

<Video />
<Hero title={data.title} content={data.content} img="/images/Tampa/WestshorePlaza.JPG" />
<GridList image={data.tattoos} />
<img
	src={data.storeFront}
	alt="tattoo grid list"
	class="pointer-events-none object-cover group-hover:opacity-75"
/>

<img
	src={data.google}
	alt="tattoo grid list"
	class="pointer-events-none object-cover group-hover:opacity-75"
/>

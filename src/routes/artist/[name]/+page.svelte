<script lang="ts">
	import type { PageData } from './$types';
	import AritistTile from '$lib/Components/AritistTile.svelte';
	import GridList from '$lib/Components/GridList.svelte';

	export let data: PageData;

	const artistTattoos: string[] = data.artist?.tattoos ?? [];
	const artistPiercings: string[] = data.artist?.piercing ?? [];
</script>

<div class="bg-gray-900 py-24 sm:py-32">
	<AritistTile
		image={data.artist?.photo}
		location={data.artist?.location}
		name={data.artist?.name}
		link={data.artist?.name}
	/>

	<img
		class="w-full md:w-3/4 lg:w-1/2"
		loading="lazy"
		src="images/Tampa/Betsy Piercer/Piercings/Piercing1.png"
		alt="logo overlay"
	/>

	{#if artistTattoos.length > 0}
		<GridList image={artistTattoos} />
	{/if}

	{#if artistPiercings.length > 0}
		<GridList image={artistPiercings} />
	{/if}
</div>

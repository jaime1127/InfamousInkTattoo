<script lang="ts">
	import Hero from '$lib/Components/Hero.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let allALocations = [
		data.locations.tampa,
		data.locations.daytona,
		data.locations.peachTree,
		data.locations.victoryLaneStore
	];
</script>

{#each allALocations as location}
	<Hero title={location.location} content={location.address} img={location.storeFront} />
{/each}

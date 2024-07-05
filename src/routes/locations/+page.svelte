<script lang="ts">
	import Hero from '$lib/Components/Hero.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	let locations = data.locations;

	let button = {
		text: 'Book Now'
	};
</script>

{#each locations as location}
	<Hero title={location.location} content={location.address} img={location.storeFront} button={button} />
{/each}

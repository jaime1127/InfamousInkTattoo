<script lang="ts">
	import ArtistTile from '$lib/Components/AritistTile.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	let allArtists = [
		...data.artists['tampa'],
		...data.artists['daytona'],
		...data.artists['peachTree'],
		...data.artists['victoryLane']
	];
</script>

<div class="bg-gray-900 py-24 sm:py-32">
	<div class="mx-auto max-w-7xl px-6 text-center lg:px-8">
		<div class="mx-auto max-w-2xl">
			<h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet our team</h2>
			<p class="mt-4 text-lg leading-8 text-gray-400">
				We’re a dynamic group of individuals who are passionate about what we do.
			</p>
		</div>
		<ul
			role="list"
			class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
		>
			{#each allArtists as artist}
				<ArtistTile image={artist.photo} location={artist.location} name={artist.name} />
			{/each}
		</ul>
	</div>
</div>

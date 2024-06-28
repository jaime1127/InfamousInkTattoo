<script lang="ts">
	import type { PageData } from './$types';
	import AritistTile from '$lib/Components/AritistTile.svelte';
	import GridList from '$lib/Components/GridList.svelte';

	export let data: PageData;
</script>

<div class="bg-gray-900 py-24 sm:py-32">
	<AritistTile
		image={data.artist?.photo}
		location={data.artist?.location}
		name={data.artist?.name}
		link={data.artist?.name}
	/>

	<!-- <GridList image={data.artist?.tattoos} /> -->
</div>

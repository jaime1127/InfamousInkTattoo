<script lang="ts">
	export let image: string[];
</script>

<ul
	role="list"
	class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
>
	{#each image as item}
		<li class="relative">
			<div class="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg">
				<img src={item} alt="tattoo grid list" class="pointer-events-none object-cover" />
			</div>
		</li>
	{/each}
</ul>

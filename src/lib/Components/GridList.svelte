<script lang="ts">
	export let image: string[];
</script>

<ul
	role="list"
	class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
>
	{#each image as item}
		<li class="relative">
			<div
				class="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100"
			>
				<img
					src={item}
					alt="tattoo grid list"
					class="pointer-events-none object-cover group-hover:opacity-75"
				/>
			</div>
		</li>
	{/each}
</ul>

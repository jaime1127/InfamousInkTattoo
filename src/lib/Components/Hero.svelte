<script lang="ts">
	import Dropdown from "./Dropdown.svelte";
	export let title: string;
	export let content: string;
</script>

<div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
	<!-- <Dropdown/> -->
	<div class="mx-auto max-w-2xl text-center">
		{#if title}
			<h1 class="text-4xl font-bold tracking-tight text-gray-300 sm:text-6xl">{title}</h1>
		{/if}
		{#if content}
			<p class="mt-6 mb-6 text-lg leading-8 text-gray-300">{content}</p>
		{/if}
		<img
			src="/images/Tampa/WestshorePlaza.JPG"
			alt="tattoo grid list"
			class="pointer-events-none object-cover group-hover:opacity-75"
		/>
	</div>
</div>

<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import Button from './Button.svelte';

	export let title: string | undefined = undefined;
	export let content: string | undefined = undefined;
	export let img: string | undefined = undefined;
	export let button: typeof SvelteComponent<any>;
</script>

<div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 lg:px-8">
	<div class="mx-auto max-w-2xl text-center">
		{#if title}
			<h1 class="text-4xl font-bold tracking-tight text-gray-300 sm:text-6xl">{title}</h1>
		{/if}
		{#if content}
			<p class="mt-6 mb-6 text-lg leading-8 text-gray-300">{content}</p>
		{/if}
		<img
			src={img}
			alt="tattoo grid list"
			class="pointer-events-none object-cover group-hover:opacity-75 p-6"
		/>
		{#if button}
			<Button text="Book Now" />
		{/if}
	</div>
</div>

<script lang="ts">
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import tattoo2 from '$lib/images/Daytona/John Sinster/Portfilio/tattoo2.jpg';

	interface Slide {
		src: string;
		alt: string;
	}

	export let slides: Slide[] = [];
	const currentIndex = writable(0);

	let interval: number;

	onMount(() => {
		interval = setInterval(() => {
			currentIndex.update((n) => (n + 1) % slides.length);
		}, 3000);

		return () => clearInterval(interval);
	});

	function prevSlide() {
		currentIndex.update((n) => (n === 0 ? slides.length - 1 : n - 1));
	}

	function nextSlide() {
		currentIndex.update((n) => (n + 1) % slides.length);
	}
</script>

<div class="relative w-full max-w-4xl mx-auto">
	<div class="overflow-hidden relative rounded-lg shadow-lg">
		<!-- {#each slides as slide, i}
			<img
				class="w-full absolute transition-opacity duration-1000 ease-in-out"
				src={tattoo2}
				alt={slide.alt}
				class:opacity-100={i === $currentIndex}
				class:opacity-0={i !== $currentIndex}
			/>
		{/each} -->
        <img
				class="w-full absolute transition-opacity duration-1000 ease-in-out"
				src={tattoo2}
				alt=""
			/>
	</div>
	<button
		class="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full"
		on:click={prevSlide}
	>
		&lt;
	</button>
	<button
		class="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-gray-700 text-white rounded-full"
		on:click={nextSlide}
	>
		&gt;
	</button>
	<div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 p-2">
		{#each slides as _, i}
			<button
				class="w-3 h-3 rounded-full bg-gray-700"
				class:opacity-50={i !== $currentIndex}
				class:opacity-100={i === $currentIndex}
				on:click={() => currentIndex.set(i)}
			/>
		{/each}
	</div>
</div>

<style>
	img {
		opacity: 0;
	}
	img.opacity-100 {
		opacity: 1;
	}
</style>

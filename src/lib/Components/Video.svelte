<script lang="ts">
	import heroVid from '$lib/video/heroVideo.mp4';

	export let image: string | undefined = undefined;
</script>

<section class="relative min-h-lvh">
	<video class="absolute top-0 left-0 w-full h-full object-cover" autoplay loop muted playsinline>
		<source src={heroVid} type="video/mp4" />
	</video>
	<div class="absolute inset-0 flex justify-center self-center">
		{#if image}
			<img class="w-full md:w-3/4 lg:w-1/2" loading="lazy" src={image} alt="logo overlay" />
		{/if}
	</div>
</section>

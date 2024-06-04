<script lang="ts">
	import vid from '$lib/video/vid.mp4';
</script>

<section class="relative min-h-screen flex">
	<video class="absolute top-0 left-0" autoplay loop muted playsinline>
		<source src={vid} type="video/mp4" />
	</video>
</section>

<script lang="ts">
	import vid from '$lib/video/vid.mp4';
	import mobileVid from '$lib/video/mobileVid.mp4'
</script>

<section class="relative min-h-lvh">
	<!-- <video class="absolute top-0 left-0 w-full h-full object-cover" autoplay loop muted playsinline>
		<source src={vid} type="video/mp4" />
	</video> -->
	<video class="absolute top-0 left-0 w-full h-full object-cover" autoplay loop muted playsinline>
		<source src={mobileVid} type="video/mp4" />
	</video>
</section>

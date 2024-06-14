<script lang="ts">
	import heroVid from '/video/heroVideo.mp4';
	import infamous from '/images/logo/infamous.png';
</script>

<section class="relative min-h-lvh">
	<video class="absolute top-0 left-0 w-full h-full object-cover" autoplay loop muted playsinline>
		<source src={heroVid} type="video/mp4" />
	</video>
	<div class="absolute inset-0 flex items-center justify-center">
		<div class="text-center text-white self-center w-full md:w-3/4 lg:w-1/2">
			<img src={infamous} alt="logo overlay" />
		</div>
	</div>
</section>

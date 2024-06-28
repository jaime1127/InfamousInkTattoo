<script lang="ts">
	import Twitter from '$lib/Svg/Twitter.svelte';
	import Facebook from '$lib/Svg/Facebook.svelte';
	import Instagram from '$lib/Svg/Instagram.svelte';

	export let image: string | undefined = undefined;
	export let name: string | undefined = undefined;
	export let location: string | undefined = undefined;
	export let twitter: string | undefined = undefined;
	export let facebook: string | undefined = undefined;
	export let instagram: string | undefined = undefined;
	export let link: string | undefined = undefined;
</script>

<li class="rounded-2xl bg-gray-800 py-10">
	<a href="artist/{link}">
		<img class="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56" src={image} alt="Tattoo Artists" />
	</a>
	<h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{name}</h3>
	<p class="text-sm leading-6 text-gray-400">{location}</p>
	<ul role="list" class="mt-6 flex justify-center gap-x-6">
		{#if twitter}
			<li>
				<a href={twitter} class="text-gray-400 hover:text-gray-300">
					<span class="sr-only">X</span>
					<Twitter />
				</a>
			</li>
		{/if}
		{#if facebook}
			<li>
				<a href={facebook} class="text-gray-400 hover:text-gray-300">
					<span class="sr-only">X</span>
					<Facebook />
				</a>
			</li>
		{/if}
		{#if instagram}
			<li>
				<a href={instagram} class="text-gray-400 hover:text-gray-300">
					<span class="sr-only">X</span>
					<Instagram />
				</a>
			</li>
		{/if}
	</ul>
</li>

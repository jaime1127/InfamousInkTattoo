<script lang="ts">
	import Facebook from '$lib/Svg/Facebook.svelte';
	import Instagram from '$lib/Svg/Instagram.svelte';

	let socials = [
		{
			component: Facebook,
			label: 'Facebook',
			href: 'https://www.facebook.com/realinfamousink'
		},
		{
			component: Instagram,
			label: 'Instagram',
			href: 'https://www.instagram.com/realinfamousink/'
		}
	];
</script>

<footer class="bg-gray-900">
	<div class="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
		<div class=" flex justify-center space-x-10">
			{#each socials as social}
				<a href={social.href} class="text-gray-400 hover:text-gray-500">
					<span class="sr-only">{social.label}</span>
					<svelte:component this={social.component} />
				</a>
			{/each}
		</div>
		<p class="mt-10 text-center text-xs leading-5 text-gray-500">
			&copy; 2020 Infamous Ink, Inc. All rights reserved | Powered by Sveltekit
		</p>
	</div>
</footer>

<script lang="ts">
	import DropDown from '$lib/Svg/DropDown.svelte';

	let isMenuOpen = false;
	let selectedLocation = 'Select Location';

	async function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function selectLocation(location: string) {
		selectedLocation = location;
		isMenuOpen = false;
	}

	let Locations = [
		{ label: 'Tampa', href: '/' },
		{ label: 'Daytona', href: '/' },
		{ label: 'V', href: '/' },
		{ label: 'V', href: '/' }
	];
</script>

<div class="relative inline-block text-left">
	<div>
		<button
			type="button"
			class="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2  text-gray-300"
			id="menu-button"
			aria-expanded={isMenuOpen}
			aria-haspopup="true"
			on:click={toggleMenu}
		>
			{selectedLocation}
			<DropDown />
		</button>
	</div>
	{#if isMenuOpen}
		<div
			class="absolute right-0 z-10 mt-2 origin-top-right text-gray-400 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
			role="menu"
			aria-orientation="vertical"
			aria-labelledby="menu-button"
			tabindex="-1"
		>
			<div class="py-1" role="none">
				{#each Locations as location}
					<a
						href="/"
						class="block px-4 py-2 text-sm text-gray-400 hover:bg-gray-100 hover:text-gray-900"
						role="menuitem"
						tabindex="-1"
						id="menu-item-0"
						on:click={() => selectLocation(`${location.label}`)}>{location.label}</a
					>
				{/each}
			</div>
		</div>
	{/if}
</div>

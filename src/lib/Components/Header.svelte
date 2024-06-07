<script lang="ts">
	let items = [
		{ label: 'Locations', href: '/locations' },
		{ label: 'Artists', href: '/artists' },
		{ label: 'Information', href: '/information' },
		{ label: 'About Us', href: '/aboutus' }
	];

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<header class="absolute inset-x-0 top-0 z-50">
	<nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
		<div class="flex lg:flex-1">
			<a href="/" class="-m-1.5 p-1.5">
				<span class="sr-only">Your Company</span>
				<img
					class="h-8 w-auto"
					src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
					alt=""
				/>
			</a>
		</div>
		<div class="hidden lg:flex lg:gap-x-12 lg:justify-end">
			{#each items as item}
				<a href={item.href} class="text-sm font-semibold leading-6 text-white">{item.label}</a>
			{/each}
		</div>
		<div class="hidden lg:flex lg:flex-1 lg:justify-end">
			<a href="/contact" class="text-sm font-semibold leading-6 text-white"
				>Contact Us <span aria-hidden="true">&rarr;</span></a
			>
		</div>
		<button type="button" class="lg:hidden" on:click={toggleMenu}>
			<span class="sr-only">Open menu</span>
			<svg
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				aria-hidden="true"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M3.75 5.25h16.5m-16.5 7.5h16.5m-16.5 7.5h16.5"
				/>
			</svg>
		</button>
	</nav>
	{#if isMenuOpen}
		<div class="lg:hidden" role="dialog" aria-modal="true">
			<div
				class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
			>
				<div class="flex items-center justify-between">
					<a href="/" class="-m-1.5 p-1.5">
						<span class="sr-only">Your Company</span>
						<img
							class="h-8 w-auto"
							src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
							alt=""
						/>
					</a>
					<button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" on:click={toggleMenu}>
						<span class="sr-only">Close menu</span>
						<svg
							class="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>
				<div class="mt-6 flow-root">
					<div class="-my-6 divide-y divide-gray-500/10">
						<div class="space-y-2 py-6">
							{#each items as item}
								<a
									href={item.href}
									class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>
									{item.label}
								</a>
							{/each}
						</div>
						<div class="py-6">
							<a
								href="/login"
								class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
								>Contact Us</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	{/if}
</header>

<script>
	let mobileMenuOpen = false;

	const navigation = [
		{ name: 'Artists', href: '#' },
		{ name: 'Information', href: '#' },
		{ name: 'Locations', href: '#' },
		{ name: 'About Us', href: '#' }
	];

	function openMenu() {
		mobileMenuOpen = true;
	}

	function closeMenu() {
		mobileMenuOpen = false;
	}
</script>

<header class="bg-gray-900">
	<nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
		<div class="flex lg:flex-1">
			<a href="#" class="-m-1.5 p-1.5">
				<span class="sr-only">Your Company</span>
				<img
					class="h-8 w-auto"
					src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
					alt=""
				/>
			</a>
		</div>
		<div class="flex lg:hidden">
			<button
				type="button"
				class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
				on:click={openMenu}
			>
				<span class="sr-only">Open main menu</span>

			</button>
		</div>
		<div class="hidden lg:flex lg:gap-x-12">
			{#each navigation as item}
				<a href={item.href} class="text-sm font-semibold leading-6 text-white">
					{item.name}
				</a>
			{/each}
		</div>
		<div class="hidden lg:flex lg:flex-1 lg:justify-end">
			<a href="#" class="text-sm font-semibold leading-6 text-white">
				Log in <span aria-hidden="true">&rarr;</span>
			</a>
		</div>
	</nav>
	{#if mobileMenuOpen}
		<div class="fixed inset-0 z-10 bg-gray-900 bg-opacity-75"></div>
		<div
			class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10"
		>
			<div class="flex items-center justify-between">
				<a href="#" class="-m-1.5 p-1.5">
					<span class="sr-only">Your Company</span>
					<img
						class="h-8 w-auto"
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
						alt=""
					/>
				</a>
				<button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-400" on:click={closeMenu}>
					<span class="sr-only">Close menu</span>
				</button>
			</div>
			<div class="mt-6 flow-root">
				<div class="-my-6 divide-y divide-gray-500/25">
					<div class="space-y-2 py-6">
						{#each navigation as item}
							<a
								href={item.href}
								class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
							>
								{item.name}
							</a>
						{/each}
					</div>
					<div class="py-6">
						<a
							href="#"
							class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
						>
							Log in
						</a>
					</div>
				</div>
			</div>
		</div>
	{/if}
</header>

<!-- //Blog section
<div class="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
	<div class="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
		<h2 class="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">From the blog</h2>
		<p class="mt-2 text-lg leading-8 text-gray-300">
			Vel dolorem qui facilis soluta sint aspernatur totam cumque.
		</p>
	</div>
	<div
		class="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
	>
		<article
			class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80"
		>
			<img
				src="https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80"
				alt=""
				class="absolute inset-0 -z-10 h-full w-full object-cover"
			/>
			<div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
			<div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>

			<div
				class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300"
			>
				<time datetime="2020-03-16" class="mr-8">Mar 16, 2020</time>
				<div class="-ml-4 flex items-center gap-x-4">
					<svg viewBox="0 0 2 2" class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
						<circle cx="1" cy="1" r="1" />
					</svg>
					<div class="flex gap-x-2.5">
						<img
							src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
							alt=""
							class="h-6 w-6 flex-none rounded-full bg-white/10"
						/>
						Michael Foster
					</div>
				</div>
			</div>
			<h3 class="mt-3 text-lg font-semibold leading-6 text-white">
				<a href="#">
					<span class="absolute inset-0"></span>
					Vel expedita assumenda placeat aut nisi optio voluptates quas
				</a>
			</h3>
		</article>
	</div>
</div> -->
<script lang="ts">
	import Faq from '$lib/Components/Faq.svelte';
	import Values from '$lib/Components/Values.svelte';
	// import type { PageData } from './$types';

	// export let data: PageData;
</script>

<div class="bg-gray-900">
	<main class="isolate">
		<div class="overflow-hidden">
			<div class="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
				<div class="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
					<div class="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
						<h1 class="text-4xl font-bold tracking-tight text-gray-300 sm:text-6xl">About Us</h1>
						<p class="relative mt-6 text-lg leading-8 text-gray-300 sm:max-w-md lg:max-w-none">
							At Infamous Ink, we believe that tattoos and piercings are more than just body art;
							they are a form of self-expression, a statement of individuality, and a celebration of
							creativity. Our mission is to provide top-notch custom tattoos and body piercings in a
							sophisticated, welcoming environment.
						</p>
					</div>
					<div
						class="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0"
					>
						<div
							class="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80"
						>
							<div class="relative">
								<img
									src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
									alt=""
									class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
								/>
								<div
									class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
								></div>
							</div>
						</div>
						<div class="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
							<div class="relative">
								<img
									src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
									alt=""
									class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
								/>
								<div
									class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
								></div>
							</div>
							<div class="relative">
								<img
									src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
									alt=""
									class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
								/>
								<div
									class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
								></div>
							</div>
						</div>
						<div class="w-44 flex-none space-y-8 pt-32 sm:pt-0">
							<div class="relative">
								<img
									src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
									alt=""
									class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
								/>
								<div
									class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
								></div>
							</div>
							<div class="relative">
								<img
									src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
									alt=""
									class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
								/>
								<div
									class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
								></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<Values />
	</main>
</div>

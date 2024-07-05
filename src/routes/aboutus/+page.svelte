<script lang="ts">
	import Faq from '$lib/Components/Faq.svelte';
	import ImageSection from '$lib/Components/ImageSection.svelte';
	import Values from '$lib/Components/Values.svelte';

</script>

<div class="bg-gray-900">
	<main class="isolate">
		<div class="overflow-hidden">
			<div class="mx-auto max-w-7xl px-6 pb-32 pt-32 sm:pt-32 lg:px-8">
				<div class="mx-auto gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
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
									src="/images/PeachTree/Jables/Tattoos/tattoo3.png"
									alt="Tattoo Jables"
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
									src="/images/Tampa/Steve Mcalister/Tattoos/tattoo1.jpg"
									alt=""
									class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
								/>
								<div
									class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
								></div>
							</div>
							<div class="relative">
								<img
									src="/images/Victory Drive/Mike Oswald/Tattoos/tattoo3.jpg"
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
									src="/images/Daytona/John Sinster/Tattoos/tattoo3.jpg"
									alt=""
									class="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
								/>
								<div
									class="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10"
								></div>
							</div>
							<div class="relative">
								<img
									src="/images/Tampa/Jose Reapertats/Tattoos/tattoo4.jpg"
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
		<ImageSection />
		<Values />
		<Faq/>
	</main>
</div>

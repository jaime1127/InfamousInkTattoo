<script lang="ts">
	import { writable } from 'svelte/store';

	const faqs = [
		{
			question: 'Do you take walk-ins?',
			answer:
				'We are pleased to announce that we will now be accepting walk-in appointments! Stop by anytime during normal business hours for a same-day session.'
		},
		{
			question: 'Do you offer consultations?',
			answer:
				'Yes. Consultations are free and recommended. You will meet with your artist on a set day and time for approximately 1/2 hour in order to review your vision as well as its location, sizing and details. If your tattoo appointment isn’t already booked, your tattooist will schedule you by the end of your consultation. It is also not uncommon for your artist to request you put down a deposit at this time in order to hold the spot.'
		}
	];

	let openIndex = writable<number | null>(null);

	function toggle(index: number) {
		openIndex.update((current) => (current === index ? null : index));
	}
</script>

<div class="bg-gray-900">
	<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
		<div class="mx-auto max-w-4xl divide-y divide-gray-900/10">
			<h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-300">
				Frequently asked questions
			</h2>
			<dl class="mt-10 space-y-6 divide-y divide-gray-900/10">
				{#each faqs as faq, index}
					<div class="pt-6">
						<dt>
							<button
								type="button"
								class="flex w-full items-start justify-between text-left text-gray-300"
								on:click={() => toggle(index)}
							>
								<span class="text-base font-semibold leading-7">
									{faq.question}
								</span>
								<span class="ml-6 flex h-7 items-center">
									{#if $openIndex === index}
										<svg
											class="h-6 w-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
										</svg>
									{:else}
										<svg
											class="h-6 w-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											aria-hidden="true"
										>
											<path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m6-6H6" />
										</svg>
									{/if}
								</span>
							</button>
						</dt>
						{#if $openIndex === index}
							<dd class="mt-2 pr-12">
								<p class="text-base leading-7 text-gray-300">
									{faq.answer}
								</p>
							</dd>
						{/if}
					</div>
				{/each}
			</dl>
		</div>
	</div>
</div>

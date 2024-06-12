<script lang="ts">
	export let title: String;
	export let content: String;
</script>

<div class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
	<div class="mx-auto max-w-2xl text-center">
		<h2 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">{title}</h2>
		<p class="mt-6 text-lg leading-8 text-gray-300">{content}</p>
	</div>
</div>

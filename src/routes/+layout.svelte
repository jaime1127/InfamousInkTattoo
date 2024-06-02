<script>
	import '../app.css';
	import '$lib/Components/Header.svelte';
	import Header from '$lib/Components/Header.svelte';
</script>

<div class="app">
	<main>
		<slot />
	</main>
	<Header />
</div>

<style>
</style>

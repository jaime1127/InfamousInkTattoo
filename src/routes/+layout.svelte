<script>
	import '../app.css';
	import Header from '$lib/Components/Header.svelte';
	import Footer from '$lib/Components/Footer.svelte';
	import Hero from '$lib/Components/Hero.svelte';
</script>

<Header />
<main>
	<Hero />
	<slot />
</main>
<Footer />

<style>
</style>

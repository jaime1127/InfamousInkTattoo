<script lang='ts'>
	import '../app.css';
	import Header from '$lib/Components/Header.svelte';
	import Footer from '$lib/Components/Footer.svelte';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />


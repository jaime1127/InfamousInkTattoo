<script>
	import '../app.css';
	import Header from '$lib/Components/Header.svelte';
	import Footer from '$lib/Components/Footer.svelte';
	import Hero from '$lib/Components/Hero.svelte';
	import Testimonal from '$lib/Components/Testimonal.svelte';
	import GridList from '$lib/Components/GridList.svelte';
</script>

<Header />
<main>
	<Hero />
	<GridList />
	<Testimonal />
</main>
<Footer />

<!-- src/routes/+page.svelte -->
<script lang="ts">
    import '../app.css';
    import Video from '$lib/Components/Video.svelte';
    import GridList from '$lib/Components/GridList.svelte';
    import Hero from '$lib/Components/Hero.svelte';
    
    export let data: { title: string; content: string; image: string };

    const { title, content, image } = data;
</script>

<Video />
<Hero {title} {content} />
<GridList />
<img class="h-8 w-auto rounded-full" src={image} alt="infamousInk" />
{image}

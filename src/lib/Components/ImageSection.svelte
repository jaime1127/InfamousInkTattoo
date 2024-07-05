<script lang="ts">
	export let image: string | undefined = undefined;
</script>

<div class="xl:mx-auto xl:max-w-7xl xl:px-8 pb-32">
	<img src={image} alt="Tattoo" class="aspect-[5/2] w-full object-cover xl:rounded-3xl" />
</div>

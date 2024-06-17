<script lang="ts">
	export let image: string;
	export let name: string;
	export let location: string;
	export let twitter: string;
</script>

<ul
	role="list"
	class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
>
	<li class="rounded-2xl bg-gray-800 px-8 py-10">
		<img class="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56" src={image} alt="Tattoo Artists" />
		<h3 class="mt-6 text-base font-semibold leading-7 tracking-tight text-white">{name}</h3>
		<p class="text-sm leading-6 text-gray-400">{location}</p>
		<ul role="list" class="mt-6 flex justify-center gap-x-6">
			<li>
				<a href={twitter} class="text-gray-400 hover:text-gray-300">
					<span class="sr-only">X</span>
					<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
						<path
							d="M11.4678 8.77491L17.2961 2H15.915L10.8543 7.88256L6.81232 2H2.15039L8.26263 10.8955L2.15039 18H3.53159L8.87581 11.7878L13.1444 18H17.8063L11.4675 8.77491H11.4678ZM9.57608 10.9738L8.95678 10.0881L4.02925 3.03974H6.15068L10.1273 8.72795L10.7466 9.61374L15.9156 17.0075H13.7942L9.57608 10.9742V10.9738Z"
						/>
					</svg>
				</a>
			</li>
		</ul>
	</li>
</ul>

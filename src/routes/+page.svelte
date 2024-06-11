<script lang="ts">
	import { base } from "$app/paths";
	import type { Game } from "$lib/models/Conference.js";

	export let data;

	const platforms = [
		...new Set(
			data.conference.games.flatMap((game) =>
				game.platforms.map((p) => p.platform),
			),
		),
	].sort();
	let selectedPlatforms: string[] = [];

	$: games = data.conference.games.filter((game) => {
		return (
			selectedPlatforms.length == 0 ||
			game.platforms.some((platform) =>
				selectedPlatforms.includes(platform.platform),
			)
		);
	});

	function togglePlatform(platform: string) {
		if (selectedPlatforms.includes(platform)) {
			selectedPlatforms.splice(selectedPlatforms.indexOf(platform), 1);
		} else {
			selectedPlatforms.push(platform);
		}
		selectedPlatforms = selectedPlatforms;
	}
</script>

<svelte:head>
	<title>EÑE TRES: La conferencia de videojuegos hispanohablante</title>
	<meta
		name="description"
		content="Encuentra los juegos protagonistas del Ñ3!"
	/>
</svelte:head>

<section class="bg-gray-100 h-screen">
	<p class="text-center text-xl">Seleccionar plataformas</p>
	<div class="flex flex-wrap gap-4 justify-center my-2">
		{#each platforms as platform}
			<button
				class:bg-yellow-200={selectedPlatforms.includes(platform)}
				on:click={() => togglePlatform(platform)}
				class="flex px-2 py-1 rounded-full bg-white shadow-md"
				title={platform.replace("_", "")}
			>
				<img
					src="{base}/icons/{platform}.svg"
					class="h-6"
					alt={platform.replace("_", "")}
				/>
			</button>
		{/each}
	</div>
	<div class="flex flex-wrap items-stretch">
		{#each games as game}
			<div class="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 2xl:w-1/5 my-2 px-2">
				<div
					class="bg-white border-gray-800 rounded-md shadow-md shadow-gray-400 hover:-translate-y-2 transition-transform"
				>
					<a
						href={game.trailer}
						title="Trailer de {game.name} en YouTube"
						target="_blank"
						rel="noopener"
					>
						<img
							src={game.image}
							alt={game.name}
							class="rounded-t-md w-full aspect-auto cursor-pointer"
						/>
					</a>
					<div class="px-2 py-1">
						<h2 class="text-lg">{game.name}</h2>
						<p class="text-xs text-gray-700 pl-2">
							{game.developer} / {game.publisher}
						</p>

						<div class="flex flex-wrap gap-2 my-1">
							{#each game.platforms.sort( (a, b) => a.platform.localeCompare(b.platform), ) as platform}
								<a
									href={platform.link}
									target="_blank"
									rel="noopener"
									title={platform.platform}
								>
									<img
										class:grayscale={platform.link ==
											undefined}
										class="h-7 w-auto"
										src="{base}/icons/{platform.platform}.svg"
										alt={platform.platform}
									/>
								</a>
							{/each}
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

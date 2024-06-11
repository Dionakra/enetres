<script lang="ts">
	import { base } from "$app/paths";

	export let data;

	const platforms = [
		...new Set(
			data.conference.games.flatMap((game) =>
				game.platforms.map((p) => p.platform),
			),
		),
	].sort();
	let selectedPlatforms: string[] = [];
	const gameTitles: string = data.conference.games
		.map((game) => game.name)
		.join(", ");

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
	<title>Ñ3 - La conferencia de videojuegos hispanohablante</title>

	<!-- HTML META TAGS -->
	<meta name="author" content="Dionakra" />
	<meta
		name="description"
		content="Web no-oficial del Ñ3, la conferencia hispanohablante de videojuegos"
	/>
	<meta name="generator" content="sveltekit" />
	<meta
		name="keywords"
		content="yuste, inyustificado, n3, ñ3, enetres, eñetres, eñe tres, videojuegos hispanohablantes, conferencia, {gameTitles}"
	/>

	<!-- OPENGRAPH TAGS -->
	<meta property="og:title" content="website" />
	<meta
		property="og:type"
		content="Ñ3 - La conferencia de videojuegos hispanohablante"
	/>
	<meta property="og:url" content="https://boix.dev/enetres/" />
	<meta
		property="og:image"
		content="https://i.ytimg.com/vi/TcRNPB01eMQ/maxresdefault.jpg"
	/>
	<meta property="og:image:alt" content="Logo de la conferencia de Ñ3" />

	<meta
		property="og:description"
		content="Web no-oficial del Ñ3, la conferencia hispanohablante de videojuegos"
	/>
	<meta property="og:locale" content="es_ES" />
	<meta property="og:site_name" content="Ñ3" />
	<meta
		property="og:video"
		content="https://www.youtube.com/watch?v=TcRNPB01eMQ"
	/>

	<!-- TWITTER META TAGS -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@el_yuste_" />
	<meta name="twitter:creator" content="@el_yuste_" />

	<!-- FAVICON -->
	<link
		rel="apple-touch-icon"
		sizes="180x180"
		href="{base}/icons/favicon/apple-touch-icon.png"
	/>
	<link
		rel="icon"
		type="image/png"
		sizes="32x32"
		href="{base}/icons/favicon/favicon-32x32.png"
	/>
	<link
		rel="icon"
		type="image/png"
		sizes="16x16"
		href="{base}/icons/favicon/favicon-16x16.png"
	/>
	<link rel="manifest" href="{base}/icons/favicon/site.webmanifest" />
	<link
		rel="mask-icon"
		href="{base}/icons/favicon/safari-pinned-tab.svg"
		color="#5bbad5"
	/>
	<meta name="msapplication-TileColor" content="#da532c" />
	<meta name="theme-color" content="#ffffff" />
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
						<p class="text-lg">{game.name}</p>
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

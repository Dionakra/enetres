<script>
	import { base } from "$app/paths";
	import "../app.css";
</script>

<div class="app">
	<header
		class="w-full bg-white border-b shadow-lg px-4 py-2 mb-2 flex justify-between"
	>
		<h1 class="text-2xl">
			Ñ3: La conferencia de videojuegos hispanohablante
		</h1>

		<div class="flex gap-3">
			<a
				href="https://www.twitch.tv/el_yuste"
				target="_blank"
				rel="noopener"
			>
				<img
					src="{base}/icons/twitch.svg"
					alt="Twitch de Yuste"
					class="h-8"
				/>
			</a>

			<a href="https://x.com/el_yuste_" target="_blank" rel="noopener">
				<img
					src="{base}/icons/twitter.svg"
					alt="Twitter de Yuste"
					class="h-8"
				/>
			</a>

			<a
				href="https://www.instagram.com/el_yuste_ins/"
				target="_blank"
				rel="noopener"
			>
				<img
					src="{base}/icons/instagram.svg"
					alt="Instagram de Yuste"
					class="h-8"
				/>
			</a>

			<a
				href="https://www.youtube.com/c/YusteYT"
				target="_blank"
				rel="noopener"
			>
				<img
					src="{base}/icons/youtube.svg"
					alt="Yuste ESports"
					class="h-8"
				/>
			</a>

			<a
				href="https://www.youtube.com/channel/UCSdRVh3vdGPii6L7MGEsZ-A"
				target="_blank"
				rel="noopener"
			>
				<img
					src="{base}/icons/youtube.svg"
					alt="El Yuste y sus cosas"
					class="h-8"
				/>
			</a>
		</div>
	</header>
	<main>
		<slot />
	</main>
</div>

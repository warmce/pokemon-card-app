<script lang="ts">
	let venusaurImg = $state('https://www.pngkey.com/png/full/845-8454007_venusaur-png-png-venusaur.png');
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Pokemon Card Tracker" />
</svelte:head>

<section>
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={venusaurImg} type="image/webp" />
				<img src={venusaurImg} alt="Welcome" />
			</picture>
		</span>

		Welcome<br /> to a pokemon site
	</h1>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: flex;
		justify-content: center;
		position: relative;
		width: 300px;
		height: 275px;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>

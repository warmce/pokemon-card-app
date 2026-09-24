<script lang="ts">
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	let ball = "https://static.wikia.nocookie.net/pokemon-fano/images/6/6f/Poke_Ball.png"
</script>

<header>
		<a class="corner" href={resolve('/')}>
			<img src={ball} alt="pokeball">
		</a>
		<button class="header-btn" aria-current={page.url.pathname === '/' ? 'page' : undefined}>
			<a href={resolve('/')}>Home</a>
		</button>
		<button class="header-btn" aria-current={page.url.pathname === '/about' ? 'page' : undefined}>
			<a href={resolve('/about')}>About</a>
		</button>
		<button class="header-btn" aria-current={page.url.pathname === '/randomCard' ? 'page' : undefined}>
			<a href={resolve('/randomCard')}>Random Card</a>
		</button>
		<button class="header-btn" aria-current={page.url.pathname === '/sets' ? 'page' : undefined}>
			<a href={resolve('/sets')}>All Sets</a>
		</button>
</header>

<style>
	header {
		display: flex;
		padding: 0px;
		height:50px; width:100%;
		background-color: white;
		align-items: center;
	}
	.header-btn {
		border: none;
		padding: 8px;
		height:100%;
		width: fit-content;
		background-color: transparent;
	}
	.header-btn a:hover {
		color: var(--color-theme-1);
	}
	.header-btn[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}
	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}
	.header-btn {
		position: relative;
		height: 100%;
	}
	.header-btn a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}


</style>

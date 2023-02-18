<script lang="ts">
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/all';
	import { onMount } from 'svelte';

	import { page } from '$app/stores';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		// NavBar
		gsap.from('.navbar', {
			width: 'calc(100% - 5rem)',
			minWidth: 'fit-content',
			top: '0.5rem',
			marginRight: '2.5rem',
			marginLeft: '2.5rem',
			boxShadow: 'none',
			duration: 0.25,
			scrollTrigger: {
				start: '25rem',
				toggleActions: 'play none none reverse'
			}
		});
	});
</script>

<header
	class="navbar sticky flex w-fit top-6 m-auto mt-4 mx-4 lg:-mb-8 lg:mr-16 self-center lg:self-end rounded-3xl shadow-xl justify-between z-40 bg-white border-white border-2 text-black dark:bg-[#505050] dark:text-white"
>
	<div class="corner">
		<a href="/" class="object">
			<img src="https://avatars.githubusercontent.com/u/109919769?s=400&u=9c3ba7dbc57d29292dbf148fa8154f3da88c9508&v=4" alt="logo" />
		</a>
	</div>

	<nav class=" flex justify-center">
		<ul class=" relative p-0 m-0 h-12 flex justify-center items-center list-none bg-contain">
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/" class="object">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
				<a href="/about" class="object">About</a>
			</li>
			<li aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}>
				<a href="/contact" class="object">Contact</a>
			</li>
		</ul>
	</nav>
	<div class="corner flex">
		<a href="https://github.com/MofuNetive" class="object">
			<img src="/images/gh_logo.svg" alt="GitHub" class=" dark:bg-white" />
		</a>
	</div>
</header>

<style>
	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
		border-radius: 50%;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
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

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}
</style>

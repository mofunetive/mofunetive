<script lang="ts">
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/all';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		// NavBar
		gsap.to('.navbar', {
			width: 0,
			minWidth: 'fit-content',
			top: '0.5rem',
			right: window.innerWidth > 1024 ? '1.5rem' : 0,
			duration: 0.25,
			ease: "linear",
			scrollTrigger: {
				start: '25rem',
				toggleActions: 'play none none reverse'
			},
			onComplete:() => { document.getElementById('nav')?.classList.add('shadow-2xl'); },
			onReverseComplete:() => { document.getElementById('nav')?.classList.remove('shadow-2xl'); }
		});
	});
</script>

<header class="navbar sticky top-0 flex h-fit max-w-full min-w-full m-auto lg:mr-0 px-4 lg:px-10 pt-4 z-40">
	<div id="nav" class=" flex flex-row flex-1 rounded-3xl justify-between bg-white text-[#505050] dark:bg-[#505050] dark:text-white transition-shadow ">
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
				<li aria-current={$page.url.pathname === '/team' ? 'page' : undefined}>
					<a href="/team" class="object">Team</a>
				</li>
			</ul>
		</nav>
		<div class="corner flex">
			<a href="https://github.com/MofuNetive" class="object">
				<img src="/images/gh_logo.svg" alt="GitHub" class=" dark:bg-white" />
			</a>
		</div>
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

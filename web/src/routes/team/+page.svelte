<script lang="ts">
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.set('.member', { width: '35%', duration: 1 });

		gsap.to('.member', {
			width: '80%',
			duration: 1,
			stagger: 0.2
		});
	});
</script>

<svelte:head>
	<title>Contant</title>
	<meta name="description" content="We Mofunetive Team" />
</svelte:head>

<section>
	<div class="max-w-full lg:max-w-6xl m-auto lg:p-4 text-column">
		<div class="bg " />
		<div class="dev-team">
			<h1 class="dev-team-text w-fit text-4xl p-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 via-purple-400 animate-text">Develop Team</h1>
			<div class="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-4">
				{#each Array(10) as _, i}
					<div class="member relative flex m-auto h-40 lg:h-56 w-[80%] ">
						<img
							class="member-img absolute h-32 w-32 m-auto inset-y-0 -right-1 bg-gray-300 rounded-full object-cover object-top z-10 border-4 border-white"
							src="https://avatars.githubusercontent.com/u/53619535?v=4"
							alt="member-img"
							loading="lazy"
						/>
						<div class="absolute h-28 w-full m-auto inset-y-0 p-6 bg-[#303030] rounded-full">
							<div class="max-w-[50%] text-white text-center">
								<h1 class="text-base lg:text-xl  line-clamp-1">Z0TEExt</h1>
								<div class="inline-flex flex-col-reverse lg:flex-row ">
									<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="my-auto mr-2 w-6 h-6">
										<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
									</svg>
									<h1 class="text-base xl:text-xl m-auto">FrontEnd</h1>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

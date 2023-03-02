<script lang="ts">
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	import CursorAnimation from '$animation/cursor';

	// import { is_empty } from 'svelte/internal';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ dataTeam } = data);

	onMount(() => {
		new CursorAnimation();

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
	<div class="text-column m-auto max-w-full lg:max-w-6xl lg:p-4">
		<div class="bg " />
		<div class="dev-team">
			{#await dataTeam}
				<div class="member relative m-auto flex h-40 w-[80%] lg:h-56 ">
					<div class="member-img absolute inset-y-0 -right-1 z-10 m-auto h-32 w-32 rounded-full border-4 border-white bg-white object-cover object-top">
						<div class="h-full w-full animate-pulse rounded-full bg-gray-300" />
					</div>
					<div class="absolute inset-y-0 m-auto h-28 w-full rounded-full bg-[#303030] p-6">
						<div class="max-w-[50%] text-center text-white">
							<div class="animate-pulse space-y-3">
								<div class=" h-5 max-w-full rounded-3xl bg-slate-300" />
								<div class=" h-4 max-w-full rounded-3xl bg-slate-300" />
							</div>
						</div>
					</div>
				</div>
			{:then data}
				{#each data as nameTeam, i}
					{#if nameTeam.members.length !== 0}
						<h1 class="dev-team-text w-fit animate-text bg-gradient-to-r from-red-500 via-purple-400 to-orange-500 bg-clip-text p-4 text-4xl font-bold text-transparent">
							{nameTeam.name}
						</h1>
						<div class="container mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
							{#each nameTeam.members as finalData}
								<div class="member relative m-auto flex h-40 w-[80%] lg:h-56 ">
									<img
										class="member-img absolute inset-y-0 -right-1 z-10 m-auto h-32 w-32 rounded-full border-4 border-white bg-gray-300 object-cover object-top"
										src="https://cdn.discordapp.com/avatars/{finalData.user.id}/{finalData.user.avatar}"
										alt="member-img"
										loading="lazy"
									/>
									<div class="absolute inset-y-0 m-auto h-28 w-full rounded-full bg-[#303030] p-6">
										<div class="flex h-full max-w-[50%] flex-col text-center text-white">
											<h1 class="m-auto text-base line-clamp-1 lg:text-xl">
												<a class="object" target="_blank" rel="noreferrer" href="https://discord.com/users/{finalData.user.id}">{finalData.user.username}</a>
											</h1>
											{#if finalData.roles[0] != null}
												<div class="m-auto inline-flex flex-row text-center">
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="m-auto mr-2 h-6 w-6">
														<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
													</svg>
													<h1 class="text-sm xl:text-xl ">{finalData.roles[0] ?? finalData.user.username}</h1>
												</div>
											{/if}
										</div>
									</div>
								</div>
							{/each}
						</div>
					{/if}
				{/each}
			{:catch error}
				<h1 class=" z-10 px-4 py-2 text-xl text-red-400">Error code: {error}</h1>
			{/await}
		</div>
	</div>
</section>

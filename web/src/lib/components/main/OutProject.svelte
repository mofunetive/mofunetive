<script lang="ts">
	import type { GetRepository } from '@mofunetive/api';
	export let mainData: GetRepository['response'];
</script>

<div class=" relative mt-10 overflow-hidden rounded-3xl pb-10 ">
	<video class="bg absolute min-h-full min-w-full rounded-3xl object-cover" autoplay loop muted playsinline>
		<source src="/videos/bg_2.webm" type="video/webm" />
		<source src="/videos/bg_2.mp4" type="video/mp4" />
	</video>

	<h1 class="out-project object m-auto mt-16 w-fit rounded-xl bg-[#303030] px-8 py-2 text-center text-3xl text-white">Our Projects</h1>
	<div class="project_group mt-8 flex flex-col items-center overflow-hidden pt-4 pb-4">
		<div class="container_block invisible fixed top-0 z-50 h-full w-full bg-white/30 opacity-0 backdrop-blur-sm">
			<div class="container absolute inset-0 my-auto mx-4 flex h-fit max-w-fit lg:mx-96 lg:max-h-fit" />
		</div>

		<div class="out_project z-10 flex">
			{#await mainData}
				<div class="object z-10 mt-4 h-60 w-64 lg:h-72 lg:w-96">
					<div class=" h-full w-full rounded-3xl bg-white p-4 pb-24">
						<div class=" mx-auto min-h-[80%] max-w-[80%] animate-pulse rounded-3xl bg-gray-300" />
						<div class=" mt-4 animate-pulse space-y-3">
							<div class="h-6 max-w-[50%] rounded-md bg-gray-300" />
							<div class="h-4 max-w-[80%] rounded-md bg-gray-300 " />
							<div class="h-4 max-w-[80%] rounded-md bg-gray-300 " />
						</div>
					</div>
				</div>
			{:then data}
				{#each data as gitRepo, i}
					<div class="box{i} old_container object mt-4 h-60 w-64 lg:h-72 lg:w-96">
						<div class="box h-full w-full rounded-3xl bg-white p-4 pb-24">
							<button
								class="close_project object absolute top-4 right-4 hidden w-fit rounded-lg bg-[#303030] p-2 px-4 text-base text-white opacity-0 transition-colors hover:bg-[#505050] lg:top-8 lg:right-8 lg:text-xl"
							>
								X
							</button>
							<img class="img_project mx-auto w-[80%] rounded-3xl transition-all" src="https://i.ytimg.com/vi/HCz3JVH0h9c/maxresdefault.jpg" alt="logo" loading="lazy" />
							<h1 class=" mt-4 font-bold line-clamp-1 lg:text-2xl">{gitRepo.name}</h1>
							<p class="info_project break-words line-clamp-2">
								{gitRepo.description ? gitRepo.description : 'no information'}
							</p>
							<a
								href={gitRepo.html_url}
								class="link_project object pointer-events-none absolute bottom-8 right-8 hidden w-fit rounded-lg bg-[#303030] p-2 px-4 text-xl text-white opacity-0 transition-colors hover:bg-[#505050]"
							>
								Link To Project
							</a>
						</div>
					</div>
				{/each}
			{:catch error}
				<h1 class=" z-10 px-4 py-2 text-xl text-red-400">Error code: {error}</h1>
			{/await}
		</div>
	</div>
</div>

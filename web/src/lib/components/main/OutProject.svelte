<script lang="ts">
	import type { GetRepository } from '@mofunetive/api';
	export let mainData: GetRepository['response'];
</script>

<div class=" relative mt-10 pb-10 rounded-3xl overflow-hidden ">
	<video class="bg absolute min-h-full min-w-full rounded-3xl object-cover" autoplay loop muted playsinline>
		<source src="/videos/bg_2.webm" type="video/webm" />
		<source src="/videos/bg_2.mp4" type="video/mp4" />
	</video>

	<h1 class="out-project object w-fit bg-[#303030] rounded-xl m-auto mt-16 px-8 py-2 text-3xl text-center text-white">Our Projects</h1>
	<div class="project_group flex flex-col items-center mt-8 pt-4 pb-4 overflow-hidden">
		<div class="container_block fixed h-full w-full top-0 bg-white/30 backdrop-blur-sm opacity-0 invisible z-50">
			<div class="container absolute flex inset-0 h-fit lg:max-h-fit max-w-fit my-auto mx-4 lg:mx-96" />
		</div>

		<div class="out_project flex z-10">
			{#await mainData}
				<div class="object h-60 w-64 lg:h-72 lg:w-96 mt-4 z-10">
					<div class=" h-full w-full p-4 pb-24 bg-white rounded-3xl">
						<div class=" min-h-[80%] max-w-[80%] mx-auto bg-gray-300 rounded-3xl animate-pulse" />
						<div class=" mt-4 space-y-3 animate-pulse">
							<div class="h-6 max-w-[50%] bg-gray-300 rounded-md" />
							<div class="h-4 max-w-[80%] bg-gray-300 rounded-md " />
							<div class="h-4 max-w-[80%] bg-gray-300 rounded-md " />
						</div>
					</div>
				</div>
			{:then data}
				{#each data as gitRepo, i}
					<div class="box{i} old_container object h-60 w-64 lg:h-72 lg:w-96 mt-4">
						<div class="box h-full w-full p-4 pb-24 bg-white rounded-3xl">
							<button
								class="close_project object absolute w-fit p-2 px-4 top-4 lg:top-8 right-4 lg:right-8 rounded-lg text-base lg:text-xl opacity-0 hidden text-white bg-[#303030] transition-colors hover:bg-[#505050]"
							>
								X
							</button>
							<img class="img_project w-[80%] mx-auto rounded-3xl transition-all" src="https://i.ytimg.com/vi/HCz3JVH0h9c/maxresdefault.jpg" alt="logo" loading="lazy" />
							<h1 class=" mt-4 lg:text-2xl font-bold line-clamp-1">{gitRepo.name}</h1>
							<p class="info_project line-clamp-2 break-words">
								{gitRepo.description ? gitRepo.description : 'no information'}
							</p>
							<a
								href={gitRepo.html_url}
								class="link_project object absolute w-fit p-2 px-4 bottom-8 right-8 rounded-lg text-xl opacity-0 hidden text-white bg-[#303030] transition-colors hover:bg-[#505050] pointer-events-none"
							>
								Link To Project
							</a>
						</div>
					</div>
				{/each}
			{:catch error}
				<h1 class=" px-4 py-2 text-red-400 text-xl z-10">Error code: {error}</h1>
			{/await}
		</div>
	</div>
</div>

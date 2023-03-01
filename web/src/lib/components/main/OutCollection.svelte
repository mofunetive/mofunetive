<script lang="ts">
	import type { GetProject } from '@mofunetive/api';
	export let mainData: GetProject['response'];
</script>

<div class=" relative mt-10 overflow-hidden rounded-3xl">
	<video class="bg absolute min-h-full min-w-full rounded-3xl object-cover" autoplay loop muted playsinline>
		<source src="/videos/bg_3.webm" type="video/webm" />
		<source src="/videos/bg_3.mp4" type="video/mp4" />
	</video>

	<div class="absolute h-full w-full rounded-3xl bg-black bg-opacity-30 bg-cover" />
	<div class="flex flex-col pt-16 pb-10">
		<h1 class="out-col object m-auto w-fit rounded-xl bg-[#303030] px-8 py-2 text-center text-3xl text-white">Our Collections</h1>

		<div class="silder m-auto mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
			{#await mainData}
				<div class=" relative m-6 flex h-[34rem] w-[22rem] flex-col rounded-3xl bg-white p-8 transition-transform xl:hover:scale-105">
					<div class=" relative h-52 w-full animate-pulse rounded-3xl bg-gray-300" />
					<div class=" mt-8 animate-pulse space-y-3">
						<div class="h-6 max-w-full rounded-md bg-gray-300" />
						<div class="ml-4 h-3 max-w-full rounded-md  bg-gray-300" />
						<div class="ml-4 h-3 max-w-full rounded-md bg-gray-300" />
						<div class="ml-4 h-3 w-[80%] max-w-full rounded-md bg-gray-300" />

						<div class=" absolute bottom-8 h-fit w-full space-y-2">
							<div class="bottom-0 h-4 max-w-[50%] rounded-md bg-gray-300" />
							<div class="bottom-8 h-4 max-w-[30%] rounded-md bg-gray-300" />
						</div>

						<button class="object absolute bottom-8 right-8 w-fit rounded-lg bg-gray-300 p-2 px-4 text-xl text-white transition-colors hover:bg-[#505050]">more</button>
					</div>
				</div>
			{:then data}
				{#each data as gh_Project}
					<div class="projects relative m-2 flex h-[34rem] w-[19rem] flex-col rounded-3xl bg-white p-4 lg:m-6 lg:w-[22rem] lg:p-8">
						<div class=" relative flex h-52 w-full">
							<img class=" absolute inset-0 m-auto max-h-full max-w-full rounded-3xl object-cover shadow-2xl" src={gh_Project.images} alt="Image_Project" loading="lazy" />
						</div>
						<div class=" mt-8 text-[#505050]">
							<h1 class=" text-2xl line-clamp-1 lg:text-3xl">{gh_Project.name}</h1>
							<p class=" ml-4 line-clamp-5">{gh_Project.description ? gh_Project.description : 'no information'}</p>
							<div class=" absolute bottom-8 w-full">
								<h1 class=" max-w-[50%] line-clamp-1 lg:text-xl">By: {gh_Project.owner.login}</h1>
							</div>
							<a
								href={gh_Project.html_url}
								class="object absolute bottom-8 right-8 w-fit rounded-lg bg-[#303030] p-2 px-4 text-base text-white transition-colors hover:bg-[#505050]"
								target="_blank"
								rel="noreferrer">more</a
							>
						</div>
					</div>
				{/each}
			{:catch error}
				<h1 class=" z-10 px-4 py-2 text-xl text-red-400">Error code: {error}</h1>
			{/await}
		</div>
	</div>
</div>

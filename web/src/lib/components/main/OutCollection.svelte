<script lang="ts">
	import type { GetProject } from '@mofunetive/api';
	export let mainData: GetProject['response'];
</script>

<div class=" relative mt-10 rounded-3xl overflow-hidden">
	<video class="bg absolute min-h-full min-w-full rounded-3xl object-cover" autoplay loop muted playsinline>
		<source src="/videos/bg_3.webm" type="video/webm" />
		<source src="/videos/bg_3.mp4" type="video/mp4" />
	</video>

	<div class="bg-cover absolute h-full w-full bg-black bg-opacity-30 rounded-3xl" />
	<div class=" pt-16 pb-10">
		<h1 class="out-col object w-fit bg-[#303030] rounded-xl m-auto px-8 py-2 text-3xl text-center text-white">Our Collections</h1>

		<div class="silder flex flex-wrap mt-8 justify-center">
			{#await mainData}
				<div class=" relative h-[34rem] w-[22rem] xl:hover:scale-105 transition-transform flex m-6 p-8 rounded-3xl bg-white flex-col">
					<div class=" h-52 w-full relative bg-gray-300 rounded-3xl animate-pulse" />
					<div class=" mt-8 animate-pulse space-y-3">
						<div class="h-6 max-w-full bg-gray-300 rounded-md" />
						<div class="h-3 max-w-full ml-4 bg-gray-300  rounded-md" />
						<div class="h-3 max-w-full ml-4 bg-gray-300 rounded-md" />
						<div class="h-3 max-w-full w-[80%] ml-4 bg-gray-300 rounded-md" />

						<div class=" absolute w-full h-fit bottom-8 space-y-2">
							<div class="h-4 max-w-[50%] bg-gray-300 rounded-md bottom-0" />
							<div class="h-4 max-w-[30%] bg-gray-300 rounded-md bottom-8" />
						</div>

						<button class="object absolute w-fit p-2 px-4 bottom-8 right-8 rounded-lg text-xl text-white bg-gray-300 transition-colors hover:bg-[#505050]">more</button>
					</div>
				</div>
			{:then data}
				{#each data as gh_Project}
					<div class="projects relative h-[34rem] w-[22rem] xl:hover:scale-105 transition-transform flex m-6 p-8 rounded-3xl bg-white flex-col ">
						<div class=" h-52 w-full relative">
							<img class=" absolute top-0 bottom-0 m-auto object-cover rounded-3xl shadow-2xl" src={gh_Project.images} alt="" loading="lazy" />
						</div>
						<div class=" mt-8">
							<h1 class=" text-2xl lg:text-3xl line-clamp-1">{gh_Project.name}</h1>
							<p class=" ml-4 line-clamp-5">{gh_Project.description ? gh_Project.description : 'no information'}</p>
							<div class=" absolute bottom-8">
								<h1 class=" lg:text-xl line-clamp-1">By: {gh_Project.owner.login}</h1>
								<!-- <h1 class=" lg:text-xl line-clamp-1">Version: 0.0.1</h1> -->
							</div>
							<a href={gh_Project.html_url} class="object absolute w-fit p-2 px-4 bottom-8 right-8 rounded-lg text-xl text-white bg-[#303030] transition-colors hover:bg-[#505050]"
								>more</a
							>
						</div>
					</div>
				{/each}
			{:catch error}
				<h1 class=" px-4 py-2 text-red-400 text-xl z-10">Error code: {error}</h1>
			{/await}
		</div>
	</div>
</div>
